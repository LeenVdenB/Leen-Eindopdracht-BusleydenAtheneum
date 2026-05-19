import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const GameScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    if (timer <= 0) {
      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setObjects((prev) => {
        if (prev.length >= 5) return prev;

        const randomX = Math.random() * (width - 80);
        const randomY = Math.random() * (height - 300) + 150;
        const isBomb = Math.random() < 0.25;
        const newObject = {
          id: Math.random(),
          x: randomX,
          y: randomY,
          type: isBomb ? "bomb" : "book",
        };
        setTimeout(() => {
          setObjects((current) => current.filter((o) => o.id !== newObject.id));
        }, 2000);

        return [...prev, newObject];
      });
    }, 600);

    return () => clearInterval(interval);
  }, [gameOver]);

  const handleTap = (obj) => {
    if (gameOver) return;

    if (obj.type === "bomb") {
      setGameOver(true);
      return;
    }
    setScore((prev) => prev + 1);
    setObjects((prev) => prev.filter((o) => o.id !== obj.id));
  };

  const restartGame = () => {
    setScore(0);
    setTimer(20);
    setGameOver(false);
    setObjects([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>← Terug naar home</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.score}>Score: {score}</Text>
        <Text style={styles.timer}>⏱ {timer}s</Text>
      </View>

      {gameOver && (
        <View style={styles.gameOverBox}>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <Text style={styles.finalScore}>Je score: {score}</Text>

          <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
            <Text style={styles.restartText}>Herstart</Text>
          </TouchableOpacity>
        </View>
      )}

      {!gameOver &&
        objects.map((obj) => (
          <TouchableOpacity
            key={obj.id}
            onPress={() => handleTap(obj)}
            style={[styles.object, { top: obj.y, left: obj.x }]}
          >
            <Text style={styles.objectEmoji}>
              {obj.type === "bomb" ? "💣" : "📚"}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backButton: {
    fontSize: 16,
    color: "#86BC25",
    margin: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
  },
  timer: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E53935",
  },
  object: {
    position: "absolute",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  objectEmoji: {
    fontSize: 40,
  },
  gameOverBox: {
    marginTop: 100,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 30,
    borderRadius: 15,
  },
  gameOverText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  finalScore: {
    fontSize: 22,
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: "#86BC25",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  restartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GameScreen;
