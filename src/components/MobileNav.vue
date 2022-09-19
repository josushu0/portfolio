<template>
	<Menu as="div" v-slot="{ open }" class="menu">
		<MenuButton class="menu-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				v-if="!open">
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				v-else>
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
			</svg>
		</MenuButton>
		<MenuItems class="panel">
			<MenuItem v-slot="{ active }"
				><a
					href="#about"
					:class="{ 'menu-item active': active, 'menu-item': !active }"
					>About Me</a
				>
			</MenuItem>
			<MenuItem v-slot="{ active }"
				><a
					href="#projects"
					:class="{ 'menu-item active': active, 'menu-item': !active }"
					>Projects</a
				></MenuItem
			>
		</MenuItems>
	</Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style scoped>
.menu {
	height: 32px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

.menu-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	height: 100%;
	width: 32px;
	border: none;
	padding: 0px;
}

.menu-button svg {
	fill: var(--color-text);
}

.panel {
	display: flex;
	flex-direction: column;
	width: 100%;
	position: absolute;
	left: 0px;
	top: 60px;
	background-color: var(--color-bg-surface);
}

.menu-item {
	padding-block: 1rem;
	width: 100%;
	text-align: center;
	color: var(--color-text);
	text-decoration: none;
}

.active {
	outline-width: 2px;
	outline-style: solid;
	outline-color: var(--color-tertiary);
}

@media (prefers-color-scheme: dark) {
	.menu-button svg {
		fill: var(--color-text-dark);
	}

	.panel {
		background-color: var(--color-bg-dark-surface);
	}

	.menu-item {
		color: var(--color-text-dark);
	}
}
</style>
