all: build publish

build:
	docker buildx build --platform linux/amd64 . -t 192.168.1.95:9500/calem.dev:latest

publish:
	docker push 192.168.1.95:9500/calem.dev:latest