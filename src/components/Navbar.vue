<template>
	<div class="nav-wrapper effect" :class="{ 'nav-sticky': showNavbar }">
		<div
			class="navbar-custom navbar-collapse navbar-right "
			id="bm-navbar"
			aria-expanded="false"
		>
			<a href="#intro" class="navbar-brand effect font-weight-bold">ANDY</a>
			<ul class="nav navbar-nav">
				<li
					:id="'nav-' + item.link.toLowerCase()"
					class=""
					v-for="(item, index) in sectionLink"
					:key="index"
				>
					<a
						:href="'#' + item.link.toLowerCase()"
						class="scroll effect p-2"
						:data-speed="item.scrollSpeed"
						>{{ item.item }}</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'NavBar',
		data() {
			return {
				showNavbar: true,
				lastScrollPosition: 0,
				contact: [
					{
						icon: 'mobile-alt',
						data: '0928865490'
					},
					{
						icon: 'envelope',
						data: 'andy870622'
					}
				],
				sectionLink: [
					{
						item: 'About',
						link: 'About',
						scrollSpeed: 800
					},
					{
						item: 'Skill',
						link: 'SKill',
						scrollSpeed: 800
					},
					{
						item: 'Work',
						link: 'Work',
						scrollSpeed: 1400
					},
					{
						item: 'Experience & Education',
						link: 'experienceAndEducation',
						scrollSpeed: 1400
					}
					// ,
					// {
					//   item: 'Sepcial',
					//   link: 'Sepcial',
					//   scrollSpeed: 1700
					// },
					// {
					//   item: 'Contact',
					//   link: 'Contact',
					//   scrollSpeed: 1700
					// }
				]
			}
		},
		mounted() {
			window.addEventListener('scroll', this.onScroll)
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.onScroll)
		},
		methods: {
			onScroll() {
				// const sectionBlock = Object.values(this.sectionLink).map(item => item.item.toLowerCase())
				const currentScrollPosition =
					window.pageYOffset || document.documentElement.scrollTop
				const kvTyperHeight = document.getElementById('kvTyper').offsetHeight
				if (currentScrollPosition < 0) {
					return (this.showNavbar = false)
				}
				if (currentScrollPosition < kvTyperHeight) {
					return (this.showNavbar = true)
				}
				this.showNavbar = currentScrollPosition > kvTyperHeight
				this.lastScrollPosition = currentScrollPosition
			}
		}
	}
</script>
