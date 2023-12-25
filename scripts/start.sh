echo "[SCRIPTS] Building the server.."

# Run Prisma migrations
echo "[SCRIPTS] Running Prisma migrations..."
npx prisma migrate deploy

# Start the application
echo "[SCRIPTS] Starting the application..."
yarn start
