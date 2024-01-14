echo "[SCRIPTS] Building the server.."

# Change directory to src
cd src

# Run Prisma Generate
echo "[SCRIPTS] Making Prisma Files..."
npx prisma generate

# Run Prisma migrations
echo "[SCRIPTS] Running Prisma migrations..."
npx prisma migrate deploy

# Start the application
echo "[SCRIPTS] Starting the application..."
yarn start