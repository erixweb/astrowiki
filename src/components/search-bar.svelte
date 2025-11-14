<script lang="ts">
	import { onMount } from "svelte"
	import Search from "./Search.svelte"

	export let posts

	let query = ""

	$: shownPosts = posts.filter((post) =>
		post.frontmatter.title.toLowerCase().includes(query.toLowerCase()),
	)

	onMount(() => {
		const input = document.querySelector("input")

		input.addEventListener("input", (e) => {
			if (query == "") {
				input.parentElement.style.borderRadius = "16px"
			} else {
				input.parentElement.style.borderBottomRightRadius = "0px"
				input.parentElement.style.borderBottomLeftRadius = "0px"
			}
		})
		if (query == "") {
			input.parentElement.style.borderRadius = "16px"
		}
	})
</script>

<div class="w-full my-[20px] z-20 relative">
	<div class="relative">
		<div
			class="flex gap-[20px] items-center justify-center w-full p-[12px] rounded-t-[16px] border-gray-400 border-2 glass"
		>
			<Search />

			<input
				type="text"
				class={`w-full bg-transparent font-mono text-[18px] border-none outline-none`}
				placeholder="Escribe tus dudas de Astro"
				bind:value={query}
			/>
		</div>
		{#if query !== ""}
			<div class="search-results border-gray-400 border-2 w-full absolute glass font-mono">
				{#each shownPosts as post}
					<div class="search-result">
						<a
							href={post.url}
							class="py-[10px] px-[20px] hover:bg-zinc-800/60 w-full block"
						>
							{post.frontmatter.title}
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
