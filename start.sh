# Launch the backend
cd api/
mvn spring-boot:run &

# Set the API url for the frontend
export API_URL=http://localhost:8080

# Download all dependencies
cd ..
cd viewer/
npm install

# Launch the frontend
npm start
