import { createClient } from "redis";

const client = createClient({
    url: "redis://localhost:6379",
});

// error handling
client.on("error", (err) => {
    console.log("❌ Redis Error:", err);
});

// connect function
export const connectRedis = async () => {
    try {
        await client.connect();
        console.log("✅ Redis connected");
    } catch (error) {
        console.log("Redis connection failed:", error.message);
    }
};

export default client;