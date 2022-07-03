SHELL: bash
.ONESHELL:

# clean node modules and install
clean:
	rm -rf node_modules
	rm .next
	yarn
