# Makefile for omerdogan.dev Deployment
# Usage: make <target>

# Variables - Bunları kendi bilgilerinize göre güncelleyin
VDS_IP ?= 84.247.20.85
VDS_USER ?= root
VDS_PATH ?= /var/www/omerdogan.dev/

.PHONY: help install build deploy dev clean test

# Default target
help:
	@echo "omerdogan.dev Deployment Commands"
	@echo "=================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make deploy     - Build and deploy to VDS"
	@echo "  make clean      - Clean build files"
	@echo "  make test       - Run linter"
	@echo ""
	@echo "VDS Configuration:"
	@echo "  VDS_IP    = $(VDS_IP)"
	@echo "  VDS_USER  = $(VDS_USER)"
	@echo "  VDS_PATH  = $(VDS_PATH)"
	@echo ""
	@echo "Override with: make deploy VDS_IP=123.45.67.89"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install
	@echo "✓ Dependencies installed!"

# Start development server
dev:
	@echo "🚀 Starting development server..."
	npm run dev

# Build for production
build:
	@echo "🏗️  Building for production..."
	npm run build
	@echo "✓ Build complete! Files in dist/"

# Deploy to VDS
deploy: build
	@echo "📤 Deploying to VDS..."
	@if [ "$(VDS_IP)" = "YOUR_VDS_IP" ]; then \
		echo "❌ Error: Please set VDS_IP"; \
		echo "Usage: make deploy VDS_IP=123.45.67.89"; \
		exit 1; \
	fi
	@echo "Uploading to $(VDS_USER)@$(VDS_IP):$(VDS_PATH)"
	scp -r dist/* $(VDS_USER)@$(VDS_IP):$(VDS_PATH)
	@echo "✓ Deployment successful!"
	@echo "🌐 Site: https://omerdogan.dev"

# Clean build files
clean:
	@echo "🧹 Cleaning build files..."
	rm -rf dist
	rm -rf node_modules/.vite
	@echo "✓ Clean complete!"

# Run linter
test:
	@echo "🔍 Running linter..."
	npm run lint

# Build and preview locally
preview: build
	@echo "👀 Starting preview server..."
	npm run preview

# Quick deploy (without rebuild)
quick-deploy:
	@echo "⚡ Quick deploying (using existing build)..."
	@if [ "$(VDS_IP)" = "YOUR_VDS_IP" ]; then \
		echo "❌ Error: Please set VDS_IP"; \
		exit 1; \
	fi
	scp -r dist/* $(VDS_USER)@$(VDS_IP):$(VDS_PATH)
	@echo "✓ Quick deployment successful!"

