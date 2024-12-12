docker-rebuild-no-cache:	
	docker-compose -f ./gascd_app/docker-compose.yml build --no-cache 

docker-up:
	docker-compose -f ./gascd_app/docker-compose.yml up -d

docker-up-rebuild:	
	docker-compose -f ./gascd_app/docker-compose.yml up -d --build --force-recreate

docker-down:
	docker-compose -f ./gascd_app/docker-compose.yml down

format-staged:
	cd app && npx lint-staged
run-dev:
	cd gascd_app; \
	 npm run dev
