.PHONY: help install dev build lint serve clean test audit

# Default target
.DEFAULT_GOAL := help

# Colors for output
CYAN := \033[0;36m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

help: ## Show this help message
	@echo "$(CYAN)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(NC) %s\n", $$1, $$2}'

install: ## Install dependencies
	@echo "$(CYAN)Installing dependencies...$(NC)"
	npm install

ci-install: ## Clean install for CI/CD (uses package-lock.json)
	@echo "$(CYAN)Running clean install...$(NC)"
	npm ci

dev: ## Start development server
	@echo "$(CYAN)Starting development server...$(NC)"
	npm run dev

start: dev ## Alias for dev

build: ## Build production site
	@echo "$(CYAN)Building production site...$(NC)"
	npm run build

lint: ## Run ESLint
	@echo "$(CYAN)Running linter...$(NC)"
	npm run lint

lint-fix: ## Run ESLint with auto-fix
	@echo "$(CYAN)Running linter with auto-fix...$(NC)"
	npm run lint:fix

serve: ## Serve production build locally
	@echo "$(CYAN)Serving production build...$(NC)"
	npm run serve

clean: ## Clean build artifacts and node_modules
	@echo "$(CYAN)Cleaning build artifacts...$(NC)"
	rm -rf public .cache
	@echo "$(GREEN)Build artifacts cleaned!$(NC)"

clean-all: clean ## Clean everything including node_modules
	@echo "$(CYAN)Removing node_modules...$(NC)"
	rm -rf node_modules package-lock.json
	@echo "$(GREEN)All artifacts cleaned!$(NC)"

audit: ## Run npm security audit
	@echo "$(CYAN)Running security audit...$(NC)"
	npm audit

audit-fix: ## Fix npm security issues automatically
	@echo "$(CYAN)Fixing security issues...$(NC)"
	npm audit fix

test: lint build ## Run all tests (lint + build)
	@echo "$(GREEN)All tests passed!$(NC)"

fresh: clean-all install ## Fresh install (clean + install)
	@echo "$(GREEN)Fresh install complete!$(NC)"

rebuild: clean build ## Clean rebuild
	@echo "$(GREEN)Rebuild complete!$(NC)"

upgrade: ## Update all dependencies to latest versions
	@echo "$(YELLOW)Updating dependencies...$(NC)"
	npm update
	@echo "$(GREEN)Dependencies updated!$(NC)"

version: ## Show current version from package.json
	@node -p "'v' + require('./package.json').version"

info: ## Show project information
	@echo "$(CYAN)Project Information:$(NC)"
	@echo "  Name:    $$(node -p "require('./package.json').name")"
	@echo "  Version: $$(node -p "require('./package.json').version")"
	@echo "  Node:    $$(node --version)"
	@echo "  NPM:     $$(npm --version)"
