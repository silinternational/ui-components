start: install dev

install:
	npm install

dev:
	npm run dev

build:
	npm run build

build-sb:
	npm run build:prod

clean:
	npm run clean

bun:
	bun install
	bun run dev

format:
	npm run format-all

dry:
	npm run dry

test:
	npm run test
