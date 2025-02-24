# Sử dụng node image làm base
FROM node:18-alpine

# Cài đặt các dependencies cần thiết
RUN apk add --no-cache libc6-compat

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies với cache
RUN npm ci

# Copy toàn bộ source code
COPY . .

# Port mà ứng dụng sẽ chạy
EXPOSE 3001

# Khởi chạy ứng dụng
CMD ["npm", "run", "dev"] 