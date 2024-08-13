<script lang="ts">
	import Search from "./Search.svelte"

	export let posts

	let query = ""

	$: shownPosts = posts.filter((post) =>
		post.frontmatter.title.toLowerCase().includes(query.toLowerCase()),
	)
</script>

<div class="w-full my-[20px]">
	<div class="relative">
		<div class="flex gap-[20px] w-full p-[12px] rounded-t-[16px] border-gray-400 border-2">
			<Search />

			<input
				type="text"
				class="w-full bg-transparent font-[SpaceGrotesk] font-bold text-[22px] border-none outline-none"
				placeholder="Escribe tus dudas de Astro"
				bind:value={query}
			/>
		</div>
		{#if query !== ""}
			<div class=" border-gray-400 border-2 w-full absolute bg-zinc-900">
				{#each shownPosts as post}
					<div class="">
						<a
							href={post.url}
							class="py-[10px] px-[20px] hover:bg-zinc-800 w-full block"
						>
							{post.frontmatter.title}
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
