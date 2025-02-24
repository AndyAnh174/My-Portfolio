# Sử dụng node image làm base
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Port mà ứng dụng sẽ chạy
EXPOSE 3001

# Khởi chạy ứng dụng trong development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3001"] 