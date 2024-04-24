<!DOCTYPE html>
<html lang="en-US" class="theme-auto">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Server/IGlobals.ts at 3.8.1-DEV - Server - SPT-AKI Development</title>
	<link rel="manifest" href="data:application/json;base64,eyJuYW1lIjoiU1BULUFLSSBEZXZlbG9wbWVudCIsInNob3J0X25hbWUiOiJTUFQtQUtJIERldmVsb3BtZW50Iiwic3RhcnRfdXJsIjoiaHR0cHM6Ly9kZXYuc3AtdGFya292LmNvbS8iLCJpY29ucyI6W3sic3JjIjoiaHR0cHM6Ly9kZXYuc3AtdGFya292LmNvbS9hc3NldHMvaW1nL2xvZ28ucG5nIiwidHlwZSI6ImltYWdlL3BuZyIsInNpemVzIjoiNTEyeDUxMiJ9LHsic3JjIjoiaHR0cHM6Ly9kZXYuc3AtdGFya292LmNvbS9hc3NldHMvaW1nL2xvZ28uc3ZnIiwidHlwZSI6ImltYWdlL3N2Zyt4bWwiLCJzaXplcyI6IjUxMng1MTIifV19">
	<meta name="author" content="SPT-AKI">
	<meta name="description" content="Server">
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer">


	<link rel="alternate" type="application/atom+xml" title="" href="/SPT-AKI/Server.atom">
	<link rel="alternate" type="application/rss+xml" title="" href="/SPT-AKI/Server.rss">

	<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/assets/img/favicon.png" type="image/png">
	
<script>
	
	window.addEventListener('error', function(e) {window._globalHandlerErrors=window._globalHandlerErrors||[]; window._globalHandlerErrors.push(e);});
	window.addEventListener('unhandledrejection', function(e) {window._globalHandlerErrors=window._globalHandlerErrors||[]; window._globalHandlerErrors.push(e);});
	window.config = {
		appUrl: 'https:\/\/dev.sp-tarkov.com\/',
		appSubUrl: '',
		assetVersionEncoded: encodeURIComponent('1.21.11'), 
		assetUrlPrefix: '\/assets',
		runModeIsProd:  false ,
		customEmojis: {"codeberg":":codeberg:","git":":git:","gitea":":gitea:","github":":github:","gitlab":":gitlab:","gogs":":gogs:"},
		csrfToken: 'QWp-o2MACXPCy5QoDrQOYXKr3EQ6MTcxMzk3Mzc0NDYzNjE2OTg0MA',
		pageData: {},
		notificationSettings: {"EventSourceUpdateTime":10000,"MaxTimeout":60000,"MinTimeout":10000,"TimeoutStep":10000}, 
		enableTimeTracking:  true ,
		
		mermaidMaxSourceCharacters:  5000 ,
		
		i18n: {
			copy_success: "Copied!",
			copy_error: "Copy failed",
			error_occurred: "An error occurred",
			network_error: "Network error",
			remove_label_str: "Remove item \"%s\"",
			modal_confirm: "Confirm",
			modal_cancel: "Cancel",
		},
	};
	
	window.config.pageData = window.config.pageData || {};
</script>
<script src="/assets/js/webcomponents.js?v=1.21.11"></script>

	<noscript>
		<style>
			.dropdown:hover > .menu { display: block; }
			.ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>
	
	
		<meta property="og:title" content="Server/IGlobals.ts at 3.8.1-DEV">
		<meta property="og:url" content="https://dev.sp-tarkov.com//SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common/IGlobals.ts">
		
	
	<meta property="og:type" content="object">
	
		<meta property="og:image" content="https://dev.sp-tarkov.com/repo-avatars/661-81e984da30db7c62b13db369993fcb3f">
	

<meta property="og:site_name" content="SPT-AKI Development">

	<link rel="stylesheet" href="/assets/css/index.css?v=1.21.11">

	<link rel="stylesheet" href="/assets/css/theme-auto.css?v=1.21.11">


	
</head>
<body>
	
	

	<div class="full height">
		<noscript>This website requires JavaScript.</noscript>

		

		
			


<nav id="navbar" aria-label="Navigation Bar">
	<div class="navbar-left ui secondary menu">
		
		<a class="item" id="navbar-logo" href="/" aria-label="Home">
			<img width="30" height="30" src="/assets/img/logo.svg" alt="Logo" aria-hidden="true">
		</a>

		
		<div class="ui secondary menu item navbar-mobile-right">
			
			<button class="item gt-w-auto ui icon mini button gt-p-3 gt-m-0" id="navbar-expand-toggle"><svg viewBox="0 0 16 16" class="svg octicon-three-bars" aria-hidden="true" width="16" height="16"><path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"/></svg></button>
		</div>

		
		
			<a class="item" href="/explore/repos">Explore</a>
		

		

		
			<a class="item" target="_blank" rel="noopener noreferrer" href="https://docs.gitea.com">Help</a>
		
	</div>

	
	<div class="navbar-right ui secondary menu">
		
			
				<a class="item" href="/user/sign_up">
					<svg viewBox="0 0 16 16" class="svg octicon-person" aria-hidden="true" width="16" height="16"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/></svg> Register
				</a>
			
			<a class="item" rel="nofollow" href="/user/login?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2fIGlobals.ts">
				<svg viewBox="0 0 16 16" class="svg octicon-sign-in" aria-hidden="true" width="16" height="16"><path d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm6.56 4.5h5.69a.75.75 0 0 1 0 1.5H8.56l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L6.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z"/></svg> Sign In
			</a>
		
	</div>
</nav>

		



<div role="main" aria-label="Server/IGlobals.ts at 3.8.1-DEV" class="page-content repository file list ">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="repo-header">
			<div class="repo-title-wrap gt-df gt-fc">
				<div class="repo-title" role="heading" aria-level="1">
					<div class="gt-mr-3">
						

	<img class="ui avatar gt-vm" src="/repo-avatars/661-81e984da30db7c62b13db369993fcb3f" width="32" height="32" alt="SPT-AKI/Server">


					</div>
					<a href="/SPT-AKI">SPT-AKI</a>
					<div class="gt-mx-2">/</div>
					<a href="/SPT-AKI/Server">Server</a>
					<div class="labels gt-df gt-ac gt-fw">
						
						
							
						
						
					</div>
					
						<a class="rss-icon gt-ml-3" href="/SPT-AKI/Server.rss" data-tooltip-content="RSS Feed"><svg viewBox="0 0 16 16" class="svg octicon-rss" aria-hidden="true" width="18" height="18"><path d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098 10.502 10.502 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7.002 7.002 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.503 5.503 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489ZM2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg></a>
					
				</div>
				
				
				
			</div>
			
				<div class="repo-buttons">
					
					<form method="post" action="/SPT-AKI/Server/action/watch?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2fIGlobals.ts">
						<input type="hidden" name="_csrf" value="QWp-o2MACXPCy5QoDrQOYXKr3EQ6MTcxMzk3Mzc0NDYzNjE2OTg0MA">
						<div class="ui labeled button" data-tooltip-content="Sign in to watch this repository.">
							<button type="submit" class="ui compact small basic button" disabled>
								<svg viewBox="0 0 16 16" class="svg octicon-eye" aria-hidden="true" width="16" height="16"><path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"/></svg>Watch
							</button>
							<a class="ui basic label" href="/SPT-AKI/Server/watchers">
								22
							</a>
						</div>
					</form>
					
						<form method="post" action="/SPT-AKI/Server/action/star?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2fIGlobals.ts">
							<input type="hidden" name="_csrf" value="QWp-o2MACXPCy5QoDrQOYXKr3EQ6MTcxMzk3Mzc0NDYzNjE2OTg0MA">
							<div class="ui labeled button" data-tooltip-content="Sign in to star this repository.">
								<button type="submit" class="ui compact small basic button" disabled>
									<svg viewBox="0 0 16 16" class="svg octicon-star" aria-hidden="true" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"/></svg>Star
								</button>
								<a class="ui basic label" href="/SPT-AKI/Server/stars">
									27
								</a>
							</div>
						</form>
					
					
						<div class="ui labeled button
							
								disabled
							"
							
								data-tooltip-content="Sign in to fork this repository."
							
						>
							<a class="ui compact small basic button"
								
									
								
							>
								<svg viewBox="0 0 16 16" class="svg octicon-repo-forked" aria-hidden="true" width="16" height="16"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/></svg>Fork
							</a>
							<div class="ui small modal" id="fork-repo-modal">
								<div class="header">
									You&#39;ve already forked Server
								</div>
								<div class="content gt-text-left">
									<div class="ui list">
										
									</div>
									
								</div>
							</div>
							<a class="ui basic label" href="/SPT-AKI/Server/forks">
								89
							</a>
						</div>
					
				</div>
			
		</div>
	</div>

	<div class="ui tabs container">
		
			<div class="ui tabular menu navbar gt-overflow-x-auto gt-overflow-y-hidden">
				
				<a class="active item" href="/SPT-AKI/Server/src/branch/3.8.1-DEV">
					<svg viewBox="0 0 16 16" class="svg octicon-code" aria-hidden="true" width="16" height="16"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"/></svg> Code
				</a>
				

				

				
					<a class="item" href="https://dev.sp-tarkov.com/SPT-AKI/Issues/issues" target="_blank" rel="noopener noreferrer">
						<svg viewBox="0 0 16 16" class="svg octicon-link-external" aria-hidden="true" width="16" height="16"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/></svg> Issues
					</a>
				

				
					<a class="item" href="/SPT-AKI/Server/pulls">
						<svg viewBox="0 0 16 16" class="svg octicon-git-pull-request" aria-hidden="true" width="16" height="16"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/></svg> Pull Requests
						
					</a>
				

				
					<a class="item" href="/SPT-AKI/Server/actions">
						<svg viewBox="0 0 16 16" class="svg octicon-play" aria-hidden="true" width="16" height="16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"/></svg> Actions
						
					</a>
				

				

				

				

				

				

				
					<a class="item" href="/SPT-AKI/Server/activity">
						<svg viewBox="0 0 16 16" class="svg octicon-pulse" aria-hidden="true" width="16" height="16"><path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"/></svg> Activity
					</a>
				

				

				
			</div>
		
	</div>
	<div class="ui tabs divider"></div>
</div>

	<div class="ui container ">
		




		

		
		
		
		

		<div class="repo-button-row">
			<div class="gt-df gt-ac gt-fw gt-gap-y-3">
				






	




<script type="module">
	const data = {
		'textReleaseCompare': "Compare",
		'textCreateTag': "Create tag \u003cstrong\u003e%s\u003c/strong\u003e",
		'textCreateBranch': "Create branch \u003cstrong\u003e%s\u003c/strong\u003e",
		'textCreateBranchFrom': "from \"%s\"",
		'textBranches': "Branches",
		'textTags': "Tags",
		'textDefaultBranchLabel': "default",

		'mode': 'branches',
		'showBranchesInDropdown':  true ,
		'searchFieldPlaceholder': 'Filter branch or tag...',
		'branchForm':  null ,
		'disableCreateBranch':  true ,
		'setAction':  null ,
		'submitForm':  null ,
		'viewType': "branch",
		'refName': "3.8.1-DEV",
		'commitIdShort': "d8504950f2",
		'tagName': "",
		'branchName': "3.8.1-DEV",
		'noTag':  null ,
		'defaultSelectedRefName': "3.8.1-DEV",
		'repoDefaultBranch': "master",
		'enableFeed':  true ,
		'rssURLPrefix': '\/SPT-AKI\/Server/rss/branch/',
		'branchURLPrefix': '\/SPT-AKI\/Server/src/branch/',
		'branchURLSuffix': '/project\/src\/models\/eft\/common\/IGlobals.ts',
		'tagURLPrefix': '\/SPT-AKI\/Server/src/tag/',
		'tagURLSuffix': '/project\/src\/models\/eft\/common\/IGlobals.ts',
		'repoLink': "/SPT-AKI/Server",
		'treePath': "project/src/models/eft/common/IGlobals.ts",
		'branchNameSubURL': "branch/3.8.1-DEV",
		'noResults': "No results found.",
	};
	
	window.config.pageData.branchDropdownDataList = window.config.pageData.branchDropdownDataList || [];
	window.config.pageData.branchDropdownDataList.push(data);
</script>

<div class="js-branch-tag-selector gt-mr-2">
	
	<div class="ui dropdown custom">
		<button class="branch-dropdown-button gt-ellipsis ui basic small compact button gt-df gt-m-0">
			<span class="text gt-df gt-ac gt-mr-2">
				
					
						<svg viewBox="0 0 16 16" class="svg octicon-git-branch" aria-hidden="true" width="16" height="16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"/></svg>
					
					<strong ref="dropdownRefName" class="gt-ml-3">3.8.1-DEV</strong>
				
			</span>
			<svg viewBox="0 0 16 16" class="dropdown icon svg octicon-triangle-down" aria-hidden="true" width="14" height="14"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"/></svg>
		</button>
	</div>
</div>

				
					
					
					
					
					<a id="new-pull-request" role="button" class="ui compact basic button" href="/SPT-AKI/Server/compare/master...3.8.1-DEV"
						data-tooltip-content="Compare">
						<svg viewBox="0 0 16 16" class="svg octicon-git-pull-request" aria-hidden="true" width="16" height="16"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/></svg>
					</a>
				
				
				
				
				

				

				
				
					<span class="breadcrumb repo-path gt-ml-2">
						<a class="section" href="/SPT-AKI/Server/src/branch/3.8.1-DEV" title="Server">Server</a><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project" title="project">project</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src" title="src">src</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models" title="models">models</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft" title="eft">eft</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common" title="common">common</a></span><span class="breadcrumb-divider">/</span><span class="active section" title="IGlobals.ts">IGlobals.ts</span></span>
				
			</div>
			<div class="gt-df gt-ac">
				
				
				
			</div>
		</div>
		
			<div class="tab-size-4 non-diff-file-content">
	<h4 class="file-header ui top attached header gt-df gt-ac gt-sb gt-fw">
		<div class="file-header-left gt-df gt-ac gt-py-3 gt-pr-4">
			
				<div class="file-info text grey normal gt-mono">
	
	
		<div class="file-info-entry">
			1799 lines
		</div>
	
	
		<div class="file-info-entry">
			41 KiB
		</div>
	
	
	
		<div class="file-info-entry">
			TypeScript
		</div>
	
	
	
</div>

			
		</div>
		<div class="file-header-right file-actions gt-df gt-ac gt-fw">
			
			
				<div class="ui buttons gt-mr-2">
					<a class="ui mini basic button" href="/SPT-AKI/Server/raw/branch/3.8.1-DEV/project/src/models/eft/common/IGlobals.ts">Raw</a>
					
						<a class="ui mini basic button" href="/SPT-AKI/Server/src/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/IGlobals.ts">Permalink</a>
					
					
						<a class="ui mini basic button" href="/SPT-AKI/Server/blame/branch/3.8.1-DEV/project/src/models/eft/common/IGlobals.ts">Blame</a>
					
					<a class="ui mini basic button" href="/SPT-AKI/Server/commits/branch/3.8.1-DEV/project/src/models/eft/common/IGlobals.ts">History</a>
					
				</div>
				<a download href="/SPT-AKI/Server/raw/branch/3.8.1-DEV/project/src/models/eft/common/IGlobals.ts"><span class="btn-octicon" data-tooltip-content="Download file"><svg viewBox="0 0 16 16" class="svg octicon-download" aria-hidden="true" width="16" height="16"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"/></svg></span></a>
				<a id="copy-content" class="btn-octicon " data-tooltip-content="Copy content"><svg viewBox="0 0 16 16" class="svg octicon-copy" aria-hidden="true" width="14" height="14"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg></a>
				
				<a class="btn-octicon" href="/SPT-AKI/Server/rss/branch/3.8.1-DEV/project/src/models/eft/common/IGlobals.ts"><svg viewBox="0 0 16 16" class="svg octicon-rss" aria-hidden="true" width="14" height="14"><path d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098 10.502 10.502 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7.002 7.002 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.503 5.503 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489ZM2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg></a>
				
				
					
						<span class="btn-octicon disabled" data-tooltip-content="You must fork this repository to make or propose changes to this file."><svg viewBox="0 0 16 16" class="svg octicon-pencil" aria-hidden="true" width="16" height="16"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"/></svg></span>
					
					
						<span class="btn-octicon disabled" data-tooltip-content="You must have write access to make or propose changes to this file."><svg viewBox="0 0 16 16" class="svg octicon-trash" aria-hidden="true" width="16" height="16"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"/></svg></span>
					
				
			
		</div>
	</h4>
	<div class="ui attached table unstackable segment">
		
			
	


		
		<div class="file-view code-view">
			
				
				<table>
					<tbody>
						
						
						<tr>
							<td id="L1" class="lines-num"><span id="L1" data-line-number="1"></span></td>
							
							<td rel="L1" class="lines-code chroma"><code class="code-inner"><span class="cm">/* eslint-disable @typescript-eslint/naming-convention */</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L2" class="lines-num"><span id="L2" data-line-number="2"></span></td>
							
							<td rel="L2" class="lines-code chroma"><code class="code-inner"><span class="kr">import</span> <span class="p">{</span> <span class="nx">Ixyz</span> <span class="p">}</span> <span class="kr">from</span> <span class="s2">&#34;@spt-aki/models/eft/common/Ixyz&#34;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L3" class="lines-num"><span id="L3" data-line-number="3"></span></td>
							
							<td rel="L3" class="lines-code chroma"><code class="code-inner"><span class="kr">import</span> <span class="p">{</span> <span class="nx">Item</span> <span class="p">}</span> <span class="kr">from</span> <span class="s2">&#34;@spt-aki/models/eft/common/tables/IItem&#34;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L4" class="lines-num"><span id="L4" data-line-number="4"></span></td>
							
							<td rel="L4" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L5" class="lines-num"><span id="L5" data-line-number="5"></span></td>
							
							<td rel="L5" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IGlobals</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L6" class="lines-num"><span id="L6" data-line-number="6"></span></td>
							
							<td rel="L6" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L7" class="lines-num"><span id="L7" data-line-number="7"></span></td>
							
							<td rel="L7" class="lines-code chroma"><code class="code-inner">    <span class="nx">time</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L8" class="lines-num"><span id="L8" data-line-number="8"></span></td>
							
							<td rel="L8" class="lines-code chroma"><code class="code-inner">    <span class="nx">config</span>: <span class="kt">IConfig</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L9" class="lines-num"><span id="L9" data-line-number="9"></span></td>
							
							<td rel="L9" class="lines-code chroma"><code class="code-inner">    <span class="nx">bot_presets</span>: <span class="kt">IBotPreset</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L10" class="lines-num"><span id="L10" data-line-number="10"></span></td>
							
							<td rel="L10" class="lines-code chroma"><code class="code-inner">    <span class="nx">AudioSettings</span>: <span class="kt">IAudioSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L11" class="lines-num"><span id="L11" data-line-number="11"></span></td>
							
							<td rel="L11" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnvironmentSettings</span>: <span class="kt">IEnvironmentSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L12" class="lines-num"><span id="L12" data-line-number="12"></span></td>
							
							<td rel="L12" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotWeaponScatterings</span>: <span class="kt">IBotWeaponScattering</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L13" class="lines-num"><span id="L13" data-line-number="13"></span></td>
							
							<td rel="L13" class="lines-code chroma"><code class="code-inner">    <span class="nx">ItemPresets</span>: <span class="kt">Record</span><span class="p">&lt;</span><span class="nt">string</span><span class="err">,</span> <span class="na">IPreset</span><span class="p"></span><span class="p">&gt;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L14" class="lines-num"><span id="L14" data-line-number="14"></span></td>
							
							<td rel="L14" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L15" class="lines-num"><span id="L15" data-line-number="15"></span></td>
							
							<td rel="L15" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L16" class="lines-num"><span id="L16" data-line-number="16"></span></td>
							
							<td rel="L16" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IConfig</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L17" class="lines-num"><span id="L17" data-line-number="17"></span></td>
							
							<td rel="L17" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L18" class="lines-num"><span id="L18" data-line-number="18"></span></td>
							
							<td rel="L18" class="lines-code chroma"><code class="code-inner">    <span class="nx">content</span>: <span class="kt">IContent</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L19" class="lines-num"><span id="L19" data-line-number="19"></span></td>
							
							<td rel="L19" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimPunchMagnitude</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L20" class="lines-num"><span id="L20" data-line-number="20"></span></td>
							
							<td rel="L20" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponSkillProgressRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L21" class="lines-num"><span id="L21" data-line-number="21"></span></td>
							
							<td rel="L21" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillAtrophy</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L22" class="lines-num"><span id="L22" data-line-number="22"></span></td>
							
							<td rel="L22" class="lines-code chroma"><code class="code-inner">    <span class="nx">exp</span>: <span class="kt">IExp</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L23" class="lines-num"><span id="L23" data-line-number="23"></span></td>
							
							<td rel="L23" class="lines-code chroma"><code class="code-inner">    <span class="nx">t_base_looting</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L24" class="lines-num"><span id="L24" data-line-number="24"></span></td>
							
							<td rel="L24" class="lines-code chroma"><code class="code-inner">    <span class="nx">t_base_lockpicking</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L25" class="lines-num"><span id="L25" data-line-number="25"></span></td>
							
							<td rel="L25" class="lines-code chroma"><code class="code-inner">    <span class="nx">armor</span>: <span class="kt">IArmor</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L26" class="lines-num"><span id="L26" data-line-number="26"></span></td>
							
							<td rel="L26" class="lines-code chroma"><code class="code-inner">    <span class="nx">SessionsToShowHotKeys</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L27" class="lines-num"><span id="L27" data-line-number="27"></span></td>
							
							<td rel="L27" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxBotsAliveOnMap</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L28" class="lines-num"><span id="L28" data-line-number="28"></span></td>
							
							<td rel="L28" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavagePlayCooldown</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L29" class="lines-num"><span id="L29" data-line-number="29"></span></td>
							
							<td rel="L29" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavagePlayCooldownNdaFree</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L30" class="lines-num"><span id="L30" data-line-number="30"></span></td>
							
							<td rel="L30" class="lines-code chroma"><code class="code-inner">    <span class="nx">MarksmanAccuracy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L31" class="lines-num"><span id="L31" data-line-number="31"></span></td>
							
							<td rel="L31" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavagePlayCooldownDevelop</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L32" class="lines-num"><span id="L32" data-line-number="32"></span></td>
							
							<td rel="L32" class="lines-code chroma"><code class="code-inner">    <span class="nx">TODSkyDate</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L33" class="lines-num"><span id="L33" data-line-number="33"></span></td>
							
							<td rel="L33" class="lines-code chroma"><code class="code-inner">    <span class="nx">Mastering</span>: <span class="kt">IMastering</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L34" class="lines-num"><span id="L34" data-line-number="34"></span></td>
							
							<td rel="L34" class="lines-code chroma"><code class="code-inner">    <span class="nx">GlobalItemPriceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L35" class="lines-num"><span id="L35" data-line-number="35"></span></td>
							
							<td rel="L35" class="lines-code chroma"><code class="code-inner">    <span class="nx">TradingUnlimitedItems</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L36" class="lines-num"><span id="L36" data-line-number="36"></span></td>
							
							<td rel="L36" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxLoyaltyLevelForAll</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L37" class="lines-num"><span id="L37" data-line-number="37"></span></td>
							
							<td rel="L37" class="lines-code chroma"><code class="code-inner">    <span class="nx">GlobalLootChanceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L38" class="lines-num"><span id="L38" data-line-number="38"></span></td>
							
							<td rel="L38" class="lines-code chroma"><code class="code-inner">    <span class="nx">GraphicSettings</span>: <span class="kt">IGraphicSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L39" class="lines-num"><span id="L39" data-line-number="39"></span></td>
							
							<td rel="L39" class="lines-code chroma"><code class="code-inner">    <span class="nx">TimeBeforeDeploy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L40" class="lines-num"><span id="L40" data-line-number="40"></span></td>
							
							<td rel="L40" class="lines-code chroma"><code class="code-inner">    <span class="nx">TimeBeforeDeployLocal</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L41" class="lines-num"><span id="L41" data-line-number="41"></span></td>
							
							<td rel="L41" class="lines-code chroma"><code class="code-inner">    <span class="nx">TradingSetting</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L42" class="lines-num"><span id="L42" data-line-number="42"></span></td>
							
							<td rel="L42" class="lines-code chroma"><code class="code-inner">    <span class="nx">TradingSettings</span>: <span class="kt">ITradingSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L43" class="lines-num"><span id="L43" data-line-number="43"></span></td>
							
							<td rel="L43" class="lines-code chroma"><code class="code-inner">    <span class="nx">ItemsCommonSettings</span>: <span class="kt">IItemsCommonSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L44" class="lines-num"><span id="L44" data-line-number="44"></span></td>
							
							<td rel="L44" class="lines-code chroma"><code class="code-inner">    <span class="nx">LoadTimeSpeedProgress</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L45" class="lines-num"><span id="L45" data-line-number="45"></span></td>
							
							<td rel="L45" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseLoadTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L46" class="lines-num"><span id="L46" data-line-number="46"></span></td>
							
							<td rel="L46" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseUnloadTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L47" class="lines-num"><span id="L47" data-line-number="47"></span></td>
							
							<td rel="L47" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseCheckTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L48" class="lines-num"><span id="L48" data-line-number="48"></span></td>
							
							<td rel="L48" class="lines-code chroma"><code class="code-inner">    <span class="nx">BluntDamageReduceFromSoftArmorMod</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L49" class="lines-num"><span id="L49" data-line-number="49"></span></td>
							
							<td rel="L49" class="lines-code chroma"><code class="code-inner">    <span class="nx">Customization</span>: <span class="kt">ICustomization</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L50" class="lines-num"><span id="L50" data-line-number="50"></span></td>
							
							<td rel="L50" class="lines-code chroma"><code class="code-inner">    <span class="nx">UncheckOnShot</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L51" class="lines-num"><span id="L51" data-line-number="51"></span></td>
							
							<td rel="L51" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotsEnabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L52" class="lines-num"><span id="L52" data-line-number="52"></span></td>
							
							<td rel="L52" class="lines-code chroma"><code class="code-inner">    <span class="nx">BufferZone</span>: <span class="kt">IBufferZone</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L53" class="lines-num"><span id="L53" data-line-number="53"></span></td>
							
							<td rel="L53" class="lines-code chroma"><code class="code-inner">    <span class="nx">ArmorMaterials</span>: <span class="kt">IArmorMaterials</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L54" class="lines-num"><span id="L54" data-line-number="54"></span></td>
							
							<td rel="L54" class="lines-code chroma"><code class="code-inner">    <span class="nx">LegsOverdamage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L55" class="lines-num"><span id="L55" data-line-number="55"></span></td>
							
							<td rel="L55" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandsOverdamage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L56" class="lines-num"><span id="L56" data-line-number="56"></span></td>
							
							<td rel="L56" class="lines-code chroma"><code class="code-inner">    <span class="nx">StomachOverdamage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L57" class="lines-num"><span id="L57" data-line-number="57"></span></td>
							
							<td rel="L57" class="lines-code chroma"><code class="code-inner">    <span class="nx">Health</span>: <span class="kt">IHealth</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L58" class="lines-num"><span id="L58" data-line-number="58"></span></td>
							
							<td rel="L58" class="lines-code chroma"><code class="code-inner">    <span class="nx">rating</span>: <span class="kt">IRating</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L59" class="lines-num"><span id="L59" data-line-number="59"></span></td>
							
							<td rel="L59" class="lines-code chroma"><code class="code-inner">    <span class="nx">tournament</span>: <span class="kt">ITournament</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L60" class="lines-num"><span id="L60" data-line-number="60"></span></td>
							
							<td rel="L60" class="lines-code chroma"><code class="code-inner">    <span class="nx">RagFair</span>: <span class="kt">IRagFair</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L61" class="lines-num"><span id="L61" data-line-number="61"></span></td>
							
							<td rel="L61" class="lines-code chroma"><code class="code-inner">    <span class="nx">handbook</span>: <span class="kt">IHandbook</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L62" class="lines-num"><span id="L62" data-line-number="62"></span></td>
							
							<td rel="L62" class="lines-code chroma"><code class="code-inner">    <span class="nx">FractureCausedByFalling</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L63" class="lines-num"><span id="L63" data-line-number="63"></span></td>
							
							<td rel="L63" class="lines-code chroma"><code class="code-inner">    <span class="nx">FractureCausedByBulletHit</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L64" class="lines-num"><span id="L64" data-line-number="64"></span></td>
							
							<td rel="L64" class="lines-code chroma"><code class="code-inner">    <span class="nx">WAVE_COEF_LOW</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L65" class="lines-num"><span id="L65" data-line-number="65"></span></td>
							
							<td rel="L65" class="lines-code chroma"><code class="code-inner">    <span class="nx">WAVE_COEF_MID</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L66" class="lines-num"><span id="L66" data-line-number="66"></span></td>
							
							<td rel="L66" class="lines-code chroma"><code class="code-inner">    <span class="nx">WAVE_COEF_HIGH</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L67" class="lines-num"><span id="L67" data-line-number="67"></span></td>
							
							<td rel="L67" class="lines-code chroma"><code class="code-inner">    <span class="nx">WAVE_COEF_HORDE</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L68" class="lines-num"><span id="L68" data-line-number="68"></span></td>
							
							<td rel="L68" class="lines-code chroma"><code class="code-inner">    <span class="nx">Stamina</span>: <span class="kt">IStamina</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L69" class="lines-num"><span id="L69" data-line-number="69"></span></td>
							
							<td rel="L69" class="lines-code chroma"><code class="code-inner">    <span class="nx">StaminaRestoration</span>: <span class="kt">IStaminaRestoration</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L70" class="lines-num"><span id="L70" data-line-number="70"></span></td>
							
							<td rel="L70" class="lines-code chroma"><code class="code-inner">    <span class="nx">StaminaDrain</span>: <span class="kt">IStaminaDrain</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L71" class="lines-num"><span id="L71" data-line-number="71"></span></td>
							
							<td rel="L71" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequirementReferences</span>: <span class="kt">IRequirementReferences</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L72" class="lines-num"><span id="L72" data-line-number="72"></span></td>
							
							<td rel="L72" class="lines-code chroma"><code class="code-inner">    <span class="nx">RestrictionsInRaid</span>: <span class="kt">IRestrictionsInRaid</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L73" class="lines-num"><span id="L73" data-line-number="73"></span></td>
							
							<td rel="L73" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillMinEffectiveness</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L74" class="lines-num"><span id="L74" data-line-number="74"></span></td>
							
							<td rel="L74" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillFatiguePerPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L75" class="lines-num"><span id="L75" data-line-number="75"></span></td>
							
							<td rel="L75" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillFreshEffectiveness</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L76" class="lines-num"><span id="L76" data-line-number="76"></span></td>
							
							<td rel="L76" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillFreshPoints</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L77" class="lines-num"><span id="L77" data-line-number="77"></span></td>
							
							<td rel="L77" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillPointsBeforeFatigue</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L78" class="lines-num"><span id="L78" data-line-number="78"></span></td>
							
							<td rel="L78" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillFatigueReset</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L79" class="lines-num"><span id="L79" data-line-number="79"></span></td>
							
							<td rel="L79" class="lines-code chroma"><code class="code-inner">    <span class="nx">DiscardLimitsEnabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L80" class="lines-num"><span id="L80" data-line-number="80"></span></td>
							
							<td rel="L80" class="lines-code chroma"><code class="code-inner">    <span class="nx">EventSettings</span>: <span class="kt">IEventSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L81" class="lines-num"><span id="L81" data-line-number="81"></span></td>
							
							<td rel="L81" class="lines-code chroma"><code class="code-inner">    <span class="nx">FavoriteItemsSettings</span>: <span class="kt">IFavoriteItemsSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L82" class="lines-num"><span id="L82" data-line-number="82"></span></td>
							
							<td rel="L82" class="lines-code chroma"><code class="code-inner">    <span class="nx">VaultingSettings</span>: <span class="kt">IVaultingSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L83" class="lines-num"><span id="L83" data-line-number="83"></span></td>
							
							<td rel="L83" class="lines-code chroma"><code class="code-inner">    <span class="nx">BTRSettings</span>: <span class="kt">IBTRSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L84" class="lines-num"><span id="L84" data-line-number="84"></span></td>
							
							<td rel="L84" class="lines-code chroma"><code class="code-inner">    <span class="nx">EventType</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L85" class="lines-num"><span id="L85" data-line-number="85"></span></td>
							
							<td rel="L85" class="lines-code chroma"><code class="code-inner">    <span class="nx">WalkSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L86" class="lines-num"><span id="L86" data-line-number="86"></span></td>
							
							<td rel="L86" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L87" class="lines-num"><span id="L87" data-line-number="87"></span></td>
							
							<td rel="L87" class="lines-code chroma"><code class="code-inner">    <span class="nx">SquadSettings</span>: <span class="kt">ISquadSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L88" class="lines-num"><span id="L88" data-line-number="88"></span></td>
							
							<td rel="L88" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillEnduranceWeightThreshold</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L89" class="lines-num"><span id="L89" data-line-number="89"></span></td>
							
							<td rel="L89" class="lines-code chroma"><code class="code-inner">    <span class="nx">TeamSearchingTimeout</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L90" class="lines-num"><span id="L90" data-line-number="90"></span></td>
							
							<td rel="L90" class="lines-code chroma"><code class="code-inner">    <span class="nx">Insurance</span>: <span class="kt">IInsurance</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L91" class="lines-num"><span id="L91" data-line-number="91"></span></td>
							
							<td rel="L91" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillExpPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L92" class="lines-num"><span id="L92" data-line-number="92"></span></td>
							
							<td rel="L92" class="lines-code chroma"><code class="code-inner">    <span class="nx">GameSearchingTimeout</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L93" class="lines-num"><span id="L93" data-line-number="93"></span></td>
							
							<td rel="L93" class="lines-code chroma"><code class="code-inner">    <span class="nx">WallContusionAbsorption</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L94" class="lines-num"><span id="L94" data-line-number="94"></span></td>
							
							<td rel="L94" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponFastDrawSettings</span>: <span class="kt">IWeaponFastDrawSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L95" class="lines-num"><span id="L95" data-line-number="95"></span></td>
							
							<td rel="L95" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillsSettings</span>: <span class="kt">ISkillsSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L96" class="lines-num"><span id="L96" data-line-number="96"></span></td>
							
							<td rel="L96" class="lines-code chroma"><code class="code-inner">    <span class="nx">AzimuthPanelShowsPlayerOrientation</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L97" class="lines-num"><span id="L97" data-line-number="97"></span></td>
							
							<td rel="L97" class="lines-code chroma"><code class="code-inner">    <span class="nx">Aiming</span>: <span class="kt">IAiming</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L98" class="lines-num"><span id="L98" data-line-number="98"></span></td>
							
							<td rel="L98" class="lines-code chroma"><code class="code-inner">    <span class="nx">Malfunction</span>: <span class="kt">IMalfunction</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L99" class="lines-num"><span id="L99" data-line-number="99"></span></td>
							
							<td rel="L99" class="lines-code chroma"><code class="code-inner">    <span class="nx">Overheat</span>: <span class="kt">IOverheat</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L100" class="lines-num"><span id="L100" data-line-number="100"></span></td>
							
							<td rel="L100" class="lines-code chroma"><code class="code-inner">    <span class="nx">FenceSettings</span>: <span class="kt">IFenceSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L101" class="lines-num"><span id="L101" data-line-number="101"></span></td>
							
							<td rel="L101" class="lines-code chroma"><code class="code-inner">    <span class="nx">TestValue</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L102" class="lines-num"><span id="L102" data-line-number="102"></span></td>
							
							<td rel="L102" class="lines-code chroma"><code class="code-inner">    <span class="nx">Inertia</span>: <span class="kt">IInertia</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L103" class="lines-num"><span id="L103" data-line-number="103"></span></td>
							
							<td rel="L103" class="lines-code chroma"><code class="code-inner">    <span class="nx">Ballistic</span>: <span class="kt">IBallistic</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L104" class="lines-num"><span id="L104" data-line-number="104"></span></td>
							
							<td rel="L104" class="lines-code chroma"><code class="code-inner">    <span class="nx">RepairSettings</span>: <span class="kt">IRepairSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L105" class="lines-num"><span id="L105" data-line-number="105"></span></td>
							
							<td rel="L105" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L106" class="lines-num"><span id="L106" data-line-number="106"></span></td>
							
							<td rel="L106" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L107" class="lines-num"><span id="L107" data-line-number="107"></span></td>
							
							<td rel="L107" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWeaponFastDrawSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L108" class="lines-num"><span id="L108" data-line-number="108"></span></td>
							
							<td rel="L108" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L109" class="lines-num"><span id="L109" data-line-number="109"></span></td>
							
							<td rel="L109" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandShakeCurveFrequency</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L110" class="lines-num"><span id="L110" data-line-number="110"></span></td>
							
							<td rel="L110" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandShakeCurveIntensity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L111" class="lines-num"><span id="L111" data-line-number="111"></span></td>
							
							<td rel="L111" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandShakeMaxDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L112" class="lines-num"><span id="L112" data-line-number="112"></span></td>
							
							<td rel="L112" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandShakeTremorIntensity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L113" class="lines-num"><span id="L113" data-line-number="113"></span></td>
							
							<td rel="L113" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponFastSwitchMaxSpeedMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L114" class="lines-num"><span id="L114" data-line-number="114"></span></td>
							
							<td rel="L114" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponFastSwitchMinSpeedMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L115" class="lines-num"><span id="L115" data-line-number="115"></span></td>
							
							<td rel="L115" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponPistolFastSwitchMaxSpeedMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L116" class="lines-num"><span id="L116" data-line-number="116"></span></td>
							
							<td rel="L116" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponPistolFastSwitchMinSpeedMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L117" class="lines-num"><span id="L117" data-line-number="117"></span></td>
							
							<td rel="L117" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L118" class="lines-num"><span id="L118" data-line-number="118"></span></td>
							
							<td rel="L118" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L119" class="lines-num"><span id="L119" data-line-number="119"></span></td>
							
							<td rel="L119" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEventSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L120" class="lines-num"><span id="L120" data-line-number="120"></span></td>
							
							<td rel="L120" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L121" class="lines-num"><span id="L121" data-line-number="121"></span></td>
							
							<td rel="L121" class="lines-code chroma"><code class="code-inner">    <span class="nx">EventActive</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L122" class="lines-num"><span id="L122" data-line-number="122"></span></td>
							
							<td rel="L122" class="lines-code chroma"><code class="code-inner">    <span class="nx">EventTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L123" class="lines-num"><span id="L123" data-line-number="123"></span></td>
							
							<td rel="L123" class="lines-code chroma"><code class="code-inner">    <span class="nx">EventWeather</span>: <span class="kt">IEventWeather</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L124" class="lines-num"><span id="L124" data-line-number="124"></span></td>
							
							<td rel="L124" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExitTimeMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L125" class="lines-num"><span id="L125" data-line-number="125"></span></td>
							
							<td rel="L125" class="lines-code chroma"><code class="code-inner">    <span class="nx">StaminaMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L126" class="lines-num"><span id="L126" data-line-number="126"></span></td>
							
							<td rel="L126" class="lines-code chroma"><code class="code-inner">    <span class="nx">SummonFailedWeather</span>: <span class="kt">IEventWeather</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L127" class="lines-num"><span id="L127" data-line-number="127"></span></td>
							
							<td rel="L127" class="lines-code chroma"><code class="code-inner">    <span class="nx">SummonSuccessWeather</span>: <span class="kt">IEventWeather</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L128" class="lines-num"><span id="L128" data-line-number="128"></span></td>
							
							<td rel="L128" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeatherChangeTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L129" class="lines-num"><span id="L129" data-line-number="129"></span></td>
							
							<td rel="L129" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L130" class="lines-num"><span id="L130" data-line-number="130"></span></td>
							
							<td rel="L130" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L131" class="lines-num"><span id="L131" data-line-number="131"></span></td>
							
							<td rel="L131" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEventWeather</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L132" class="lines-num"><span id="L132" data-line-number="132"></span></td>
							
							<td rel="L132" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L133" class="lines-num"><span id="L133" data-line-number="133"></span></td>
							
							<td rel="L133" class="lines-code chroma"><code class="code-inner">    <span class="nx">Cloudness</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L134" class="lines-num"><span id="L134" data-line-number="134"></span></td>
							
							<td rel="L134" class="lines-code chroma"><code class="code-inner">    <span class="nx">Hour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L135" class="lines-num"><span id="L135" data-line-number="135"></span></td>
							
							<td rel="L135" class="lines-code chroma"><code class="code-inner">    <span class="nx">Minute</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L136" class="lines-num"><span id="L136" data-line-number="136"></span></td>
							
							<td rel="L136" class="lines-code chroma"><code class="code-inner">    <span class="nx">Rain</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L137" class="lines-num"><span id="L137" data-line-number="137"></span></td>
							
							<td rel="L137" class="lines-code chroma"><code class="code-inner">    <span class="nx">RainRandomness</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L138" class="lines-num"><span id="L138" data-line-number="138"></span></td>
							
							<td rel="L138" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScaterringFogDensity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L139" class="lines-num"><span id="L139" data-line-number="139"></span></td>
							
							<td rel="L139" class="lines-code chroma"><code class="code-inner">    <span class="nx">TopWindDirection</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L140" class="lines-num"><span id="L140" data-line-number="140"></span></td>
							
							<td rel="L140" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wind</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L141" class="lines-num"><span id="L141" data-line-number="141"></span></td>
							
							<td rel="L141" class="lines-code chroma"><code class="code-inner">    <span class="nx">WindDirection</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L142" class="lines-num"><span id="L142" data-line-number="142"></span></td>
							
							<td rel="L142" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L143" class="lines-num"><span id="L143" data-line-number="143"></span></td>
							
							<td rel="L143" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L144" class="lines-num"><span id="L144" data-line-number="144"></span></td>
							
							<td rel="L144" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IGraphicSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L145" class="lines-num"><span id="L145" data-line-number="145"></span></td>
							
							<td rel="L145" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L146" class="lines-num"><span id="L146" data-line-number="146"></span></td>
							
							<td rel="L146" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExperimentalFogInCity</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L147" class="lines-num"><span id="L147" data-line-number="147"></span></td>
							
							<td rel="L147" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L148" class="lines-num"><span id="L148" data-line-number="148"></span></td>
							
							<td rel="L148" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L149" class="lines-num"><span id="L149" data-line-number="149"></span></td>
							
							<td rel="L149" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBufferZone</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L150" class="lines-num"><span id="L150" data-line-number="150"></span></td>
							
							<td rel="L150" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L151" class="lines-num"><span id="L151" data-line-number="151"></span></td>
							
							<td rel="L151" class="lines-code chroma"><code class="code-inner">    <span class="nx">CustomerAccessTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L152" class="lines-num"><span id="L152" data-line-number="152"></span></td>
							
							<td rel="L152" class="lines-code chroma"><code class="code-inner">    <span class="nx">CustomerCriticalTimeStart</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L153" class="lines-num"><span id="L153" data-line-number="153"></span></td>
							
							<td rel="L153" class="lines-code chroma"><code class="code-inner">    <span class="nx">CustomerKickNotifTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L154" class="lines-num"><span id="L154" data-line-number="154"></span></td>
							
							<td rel="L154" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L155" class="lines-num"><span id="L155" data-line-number="155"></span></td>
							
							<td rel="L155" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L156" class="lines-num"><span id="L156" data-line-number="156"></span></td>
							
							<td rel="L156" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IItemsCommonSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L157" class="lines-num"><span id="L157" data-line-number="157"></span></td>
							
							<td rel="L157" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L158" class="lines-num"><span id="L158" data-line-number="158"></span></td>
							
							<td rel="L158" class="lines-code chroma"><code class="code-inner">    <span class="nx">ItemRemoveAfterInterruptionTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L159" class="lines-num"><span id="L159" data-line-number="159"></span></td>
							
							<td rel="L159" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L160" class="lines-num"><span id="L160" data-line-number="160"></span></td>
							
							<td rel="L160" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L161" class="lines-num"><span id="L161" data-line-number="161"></span></td>
							
							<td rel="L161" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ITradingSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L162" class="lines-num"><span id="L162" data-line-number="162"></span></td>
							
							<td rel="L162" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L163" class="lines-num"><span id="L163" data-line-number="163"></span></td>
							
							<td rel="L163" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuyoutRestrictions</span>: <span class="kt">IBuyoutRestrictions</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L164" class="lines-num"><span id="L164" data-line-number="164"></span></td>
							
							<td rel="L164" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L165" class="lines-num"><span id="L165" data-line-number="165"></span></td>
							
							<td rel="L165" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L166" class="lines-num"><span id="L166" data-line-number="166"></span></td>
							
							<td rel="L166" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBuyoutRestrictions</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L167" class="lines-num"><span id="L167" data-line-number="167"></span></td>
							
							<td rel="L167" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L168" class="lines-num"><span id="L168" data-line-number="168"></span></td>
							
							<td rel="L168" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinDurability</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L169" class="lines-num"><span id="L169" data-line-number="169"></span></td>
							
							<td rel="L169" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinFoodDrinkResource</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L170" class="lines-num"><span id="L170" data-line-number="170"></span></td>
							
							<td rel="L170" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinMedsResource</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L171" class="lines-num"><span id="L171" data-line-number="171"></span></td>
							
							<td rel="L171" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L172" class="lines-num"><span id="L172" data-line-number="172"></span></td>
							
							<td rel="L172" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L173" class="lines-num"><span id="L173" data-line-number="173"></span></td>
							
							<td rel="L173" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IContent</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L174" class="lines-num"><span id="L174" data-line-number="174"></span></td>
							
							<td rel="L174" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L175" class="lines-num"><span id="L175" data-line-number="175"></span></td>
							
							<td rel="L175" class="lines-code chroma"><code class="code-inner">    <span class="nx">ip</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L176" class="lines-num"><span id="L176" data-line-number="176"></span></td>
							
							<td rel="L176" class="lines-code chroma"><code class="code-inner">    <span class="nx">port</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L177" class="lines-num"><span id="L177" data-line-number="177"></span></td>
							
							<td rel="L177" class="lines-code chroma"><code class="code-inner">    <span class="nx">root</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L178" class="lines-num"><span id="L178" data-line-number="178"></span></td>
							
							<td rel="L178" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L179" class="lines-num"><span id="L179" data-line-number="179"></span></td>
							
							<td rel="L179" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L180" class="lines-num"><span id="L180" data-line-number="180"></span></td>
							
							<td rel="L180" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IExp</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L181" class="lines-num"><span id="L181" data-line-number="181"></span></td>
							
							<td rel="L181" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L182" class="lines-num"><span id="L182" data-line-number="182"></span></td>
							
							<td rel="L182" class="lines-code chroma"><code class="code-inner">    <span class="nx">heal</span>: <span class="kt">IHeal</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L183" class="lines-num"><span id="L183" data-line-number="183"></span></td>
							
							<td rel="L183" class="lines-code chroma"><code class="code-inner">    <span class="nx">match_end</span>: <span class="kt">IMatchEnd</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L184" class="lines-num"><span id="L184" data-line-number="184"></span></td>
							
							<td rel="L184" class="lines-code chroma"><code class="code-inner">    <span class="nx">kill</span>: <span class="kt">IKill</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L185" class="lines-num"><span id="L185" data-line-number="185"></span></td>
							
							<td rel="L185" class="lines-code chroma"><code class="code-inner">    <span class="nx">level</span>: <span class="kt">ILevel</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L186" class="lines-num"><span id="L186" data-line-number="186"></span></td>
							
							<td rel="L186" class="lines-code chroma"><code class="code-inner">    <span class="nx">loot_attempts</span>: <span class="kt">ILootAttempt</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L187" class="lines-num"><span id="L187" data-line-number="187"></span></td>
							
							<td rel="L187" class="lines-code chroma"><code class="code-inner">    <span class="nx">expForLockedDoorOpen</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L188" class="lines-num"><span id="L188" data-line-number="188"></span></td>
							
							<td rel="L188" class="lines-code chroma"><code class="code-inner">    <span class="nx">expForLockedDoorBreach</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L189" class="lines-num"><span id="L189" data-line-number="189"></span></td>
							
							<td rel="L189" class="lines-code chroma"><code class="code-inner">    <span class="nx">triggerMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L190" class="lines-num"><span id="L190" data-line-number="190"></span></td>
							
							<td rel="L190" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L191" class="lines-num"><span id="L191" data-line-number="191"></span></td>
							
							<td rel="L191" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L192" class="lines-num"><span id="L192" data-line-number="192"></span></td>
							
							<td rel="L192" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHeal</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L193" class="lines-num"><span id="L193" data-line-number="193"></span></td>
							
							<td rel="L193" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L194" class="lines-num"><span id="L194" data-line-number="194"></span></td>
							
							<td rel="L194" class="lines-code chroma"><code class="code-inner">    <span class="nx">expForHeal</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L195" class="lines-num"><span id="L195" data-line-number="195"></span></td>
							
							<td rel="L195" class="lines-code chroma"><code class="code-inner">    <span class="nx">expForHydration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L196" class="lines-num"><span id="L196" data-line-number="196"></span></td>
							
							<td rel="L196" class="lines-code chroma"><code class="code-inner">    <span class="nx">expForEnergy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L197" class="lines-num"><span id="L197" data-line-number="197"></span></td>
							
							<td rel="L197" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L198" class="lines-num"><span id="L198" data-line-number="198"></span></td>
							
							<td rel="L198" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L199" class="lines-num"><span id="L199" data-line-number="199"></span></td>
							
							<td rel="L199" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMatchEnd</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L200" class="lines-num"><span id="L200" data-line-number="200"></span></td>
							
							<td rel="L200" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L201" class="lines-num"><span id="L201" data-line-number="201"></span></td>
							
							<td rel="L201" class="lines-code chroma"><code class="code-inner">    <span class="nx">README</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L202" class="lines-num"><span id="L202" data-line-number="202"></span></td>
							
							<td rel="L202" class="lines-code chroma"><code class="code-inner">    <span class="nx">survived_exp_requirement</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L203" class="lines-num"><span id="L203" data-line-number="203"></span></td>
							
							<td rel="L203" class="lines-code chroma"><code class="code-inner">    <span class="nx">survived_seconds_requirement</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L204" class="lines-num"><span id="L204" data-line-number="204"></span></td>
							
							<td rel="L204" class="lines-code chroma"><code class="code-inner">    <span class="nx">survived_exp_reward</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L205" class="lines-num"><span id="L205" data-line-number="205"></span></td>
							
							<td rel="L205" class="lines-code chroma"><code class="code-inner">    <span class="nx">mia_exp_reward</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L206" class="lines-num"><span id="L206" data-line-number="206"></span></td>
							
							<td rel="L206" class="lines-code chroma"><code class="code-inner">    <span class="nx">runner_exp_reward</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L207" class="lines-num"><span id="L207" data-line-number="207"></span></td>
							
							<td rel="L207" class="lines-code chroma"><code class="code-inner">    <span class="nx">leftMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L208" class="lines-num"><span id="L208" data-line-number="208"></span></td>
							
							<td rel="L208" class="lines-code chroma"><code class="code-inner">    <span class="nx">miaMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L209" class="lines-num"><span id="L209" data-line-number="209"></span></td>
							
							<td rel="L209" class="lines-code chroma"><code class="code-inner">    <span class="nx">survivedMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L210" class="lines-num"><span id="L210" data-line-number="210"></span></td>
							
							<td rel="L210" class="lines-code chroma"><code class="code-inner">    <span class="nx">runnerMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L211" class="lines-num"><span id="L211" data-line-number="211"></span></td>
							
							<td rel="L211" class="lines-code chroma"><code class="code-inner">    <span class="nx">killedMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L212" class="lines-num"><span id="L212" data-line-number="212"></span></td>
							
							<td rel="L212" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L213" class="lines-num"><span id="L213" data-line-number="213"></span></td>
							
							<td rel="L213" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L214" class="lines-num"><span id="L214" data-line-number="214"></span></td>
							
							<td rel="L214" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IKill</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L215" class="lines-num"><span id="L215" data-line-number="215"></span></td>
							
							<td rel="L215" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L216" class="lines-num"><span id="L216" data-line-number="216"></span></td>
							
							<td rel="L216" class="lines-code chroma"><code class="code-inner">    <span class="nx">combo</span>: <span class="kt">ICombo</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L217" class="lines-num"><span id="L217" data-line-number="217"></span></td>
							
							<td rel="L217" class="lines-code chroma"><code class="code-inner">    <span class="nx">victimLevelExp</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L218" class="lines-num"><span id="L218" data-line-number="218"></span></td>
							
							<td rel="L218" class="lines-code chroma"><code class="code-inner">    <span class="nx">headShotMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L219" class="lines-num"><span id="L219" data-line-number="219"></span></td>
							
							<td rel="L219" class="lines-code chroma"><code class="code-inner">    <span class="nx">expOnDamageAllHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L220" class="lines-num"><span id="L220" data-line-number="220"></span></td>
							
							<td rel="L220" class="lines-code chroma"><code class="code-inner">    <span class="nx">longShotDistance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L221" class="lines-num"><span id="L221" data-line-number="221"></span></td>
							
							<td rel="L221" class="lines-code chroma"><code class="code-inner">    <span class="nx">bloodLossToLitre</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L222" class="lines-num"><span id="L222" data-line-number="222"></span></td>
							
							<td rel="L222" class="lines-code chroma"><code class="code-inner">    <span class="nx">botExpOnDamageAllHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L223" class="lines-num"><span id="L223" data-line-number="223"></span></td>
							
							<td rel="L223" class="lines-code chroma"><code class="code-inner">    <span class="nx">botHeadShotMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L224" class="lines-num"><span id="L224" data-line-number="224"></span></td>
							
							<td rel="L224" class="lines-code chroma"><code class="code-inner">    <span class="nx">victimBotLevelExp</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L225" class="lines-num"><span id="L225" data-line-number="225"></span></td>
							
							<td rel="L225" class="lines-code chroma"><code class="code-inner">    <span class="nx">pmcExpOnDamageAllHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L226" class="lines-num"><span id="L226" data-line-number="226"></span></td>
							
							<td rel="L226" class="lines-code chroma"><code class="code-inner">    <span class="nx">pmcHeadShotMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L227" class="lines-num"><span id="L227" data-line-number="227"></span></td>
							
							<td rel="L227" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L228" class="lines-num"><span id="L228" data-line-number="228"></span></td>
							
							<td rel="L228" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L229" class="lines-num"><span id="L229" data-line-number="229"></span></td>
							
							<td rel="L229" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICombo</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L230" class="lines-num"><span id="L230" data-line-number="230"></span></td>
							
							<td rel="L230" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L231" class="lines-num"><span id="L231" data-line-number="231"></span></td>
							
							<td rel="L231" class="lines-code chroma"><code class="code-inner">    <span class="nx">percent</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L232" class="lines-num"><span id="L232" data-line-number="232"></span></td>
							
							<td rel="L232" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L233" class="lines-num"><span id="L233" data-line-number="233"></span></td>
							
							<td rel="L233" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L234" class="lines-num"><span id="L234" data-line-number="234"></span></td>
							
							<td rel="L234" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILevel</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L235" class="lines-num"><span id="L235" data-line-number="235"></span></td>
							
							<td rel="L235" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L236" class="lines-num"><span id="L236" data-line-number="236"></span></td>
							
							<td rel="L236" class="lines-code chroma"><code class="code-inner">    <span class="nx">exp_table</span>: <span class="kt">IExpTable</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L237" class="lines-num"><span id="L237" data-line-number="237"></span></td>
							
							<td rel="L237" class="lines-code chroma"><code class="code-inner">    <span class="nx">trade_level</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L238" class="lines-num"><span id="L238" data-line-number="238"></span></td>
							
							<td rel="L238" class="lines-code chroma"><code class="code-inner">    <span class="nx">savage_level</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L239" class="lines-num"><span id="L239" data-line-number="239"></span></td>
							
							<td rel="L239" class="lines-code chroma"><code class="code-inner">    <span class="nx">clan_level</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L240" class="lines-num"><span id="L240" data-line-number="240"></span></td>
							
							<td rel="L240" class="lines-code chroma"><code class="code-inner">    <span class="nx">mastering1</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L241" class="lines-num"><span id="L241" data-line-number="241"></span></td>
							
							<td rel="L241" class="lines-code chroma"><code class="code-inner">    <span class="nx">mastering2</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L242" class="lines-num"><span id="L242" data-line-number="242"></span></td>
							
							<td rel="L242" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L243" class="lines-num"><span id="L243" data-line-number="243"></span></td>
							
							<td rel="L243" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L244" class="lines-num"><span id="L244" data-line-number="244"></span></td>
							
							<td rel="L244" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IExpTable</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L245" class="lines-num"><span id="L245" data-line-number="245"></span></td>
							
							<td rel="L245" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L246" class="lines-num"><span id="L246" data-line-number="246"></span></td>
							
							<td rel="L246" class="lines-code chroma"><code class="code-inner">    <span class="nx">exp</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L247" class="lines-num"><span id="L247" data-line-number="247"></span></td>
							
							<td rel="L247" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L248" class="lines-num"><span id="L248" data-line-number="248"></span></td>
							
							<td rel="L248" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L249" class="lines-num"><span id="L249" data-line-number="249"></span></td>
							
							<td rel="L249" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILootAttempt</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L250" class="lines-num"><span id="L250" data-line-number="250"></span></td>
							
							<td rel="L250" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L251" class="lines-num"><span id="L251" data-line-number="251"></span></td>
							
							<td rel="L251" class="lines-code chroma"><code class="code-inner">    <span class="nx">k_exp</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L252" class="lines-num"><span id="L252" data-line-number="252"></span></td>
							
							<td rel="L252" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L253" class="lines-num"><span id="L253" data-line-number="253"></span></td>
							
							<td rel="L253" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L254" class="lines-num"><span id="L254" data-line-number="254"></span></td>
							
							<td rel="L254" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IArmor</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L255" class="lines-num"><span id="L255" data-line-number="255"></span></td>
							
							<td rel="L255" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L256" class="lines-num"><span id="L256" data-line-number="256"></span></td>
							
							<td rel="L256" class="lines-code chroma"><code class="code-inner">    <span class="kr">class</span><span class="o">:</span> <span class="nx">IClass</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L257" class="lines-num"><span id="L257" data-line-number="257"></span></td>
							
							<td rel="L257" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L258" class="lines-num"><span id="L258" data-line-number="258"></span></td>
							
							<td rel="L258" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L259" class="lines-num"><span id="L259" data-line-number="259"></span></td>
							
							<td rel="L259" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IClass</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L260" class="lines-num"><span id="L260" data-line-number="260"></span></td>
							
							<td rel="L260" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L261" class="lines-num"><span id="L261" data-line-number="261"></span></td>
							
							<td rel="L261" class="lines-code chroma"><code class="code-inner">    <span class="nx">resistance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L262" class="lines-num"><span id="L262" data-line-number="262"></span></td>
							
							<td rel="L262" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L263" class="lines-num"><span id="L263" data-line-number="263"></span></td>
							
							<td rel="L263" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L264" class="lines-num"><span id="L264" data-line-number="264"></span></td>
							
							<td rel="L264" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMastering</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L265" class="lines-num"><span id="L265" data-line-number="265"></span></td>
							
							<td rel="L265" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L266" class="lines-num"><span id="L266" data-line-number="266"></span></td>
							
							<td rel="L266" class="lines-code chroma"><code class="code-inner">    <span class="nx">Name</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L267" class="lines-num"><span id="L267" data-line-number="267"></span></td>
							
							<td rel="L267" class="lines-code chroma"><code class="code-inner">    <span class="nx">Templates</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L268" class="lines-num"><span id="L268" data-line-number="268"></span></td>
							
							<td rel="L268" class="lines-code chroma"><code class="code-inner">    <span class="nx">Level2</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L269" class="lines-num"><span id="L269" data-line-number="269"></span></td>
							
							<td rel="L269" class="lines-code chroma"><code class="code-inner">    <span class="nx">Level3</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L270" class="lines-num"><span id="L270" data-line-number="270"></span></td>
							
							<td rel="L270" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L271" class="lines-num"><span id="L271" data-line-number="271"></span></td>
							
							<td rel="L271" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L272" class="lines-num"><span id="L272" data-line-number="272"></span></td>
							
							<td rel="L272" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICustomization</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L273" class="lines-num"><span id="L273" data-line-number="273"></span></td>
							
							<td rel="L273" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L274" class="lines-num"><span id="L274" data-line-number="274"></span></td>
							
							<td rel="L274" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavageHead</span>: <span class="kt">ISavageHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L275" class="lines-num"><span id="L275" data-line-number="275"></span></td>
							
							<td rel="L275" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavageBody</span>: <span class="kt">ISavageBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L276" class="lines-num"><span id="L276" data-line-number="276"></span></td>
							
							<td rel="L276" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavageFeet</span>: <span class="kt">ISavageFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L277" class="lines-num"><span id="L277" data-line-number="277"></span></td>
							
							<td rel="L277" class="lines-code chroma"><code class="code-inner">    <span class="nx">CustomizationVoice</span>: <span class="kt">ICustomizationVoice</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L278" class="lines-num"><span id="L278" data-line-number="278"></span></td>
							
							<td rel="L278" class="lines-code chroma"><code class="code-inner">    <span class="nx">BodyParts</span>: <span class="kt">IBodyParts</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L279" class="lines-num"><span id="L279" data-line-number="279"></span></td>
							
							<td rel="L279" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L280" class="lines-num"><span id="L280" data-line-number="280"></span></td>
							
							<td rel="L280" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L281" class="lines-num"><span id="L281" data-line-number="281"></span></td>
							
							<td rel="L281" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISavageHead</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L282" class="lines-num"><span id="L282" data-line-number="282"></span></td>
							
							<td rel="L282" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L283" class="lines-num"><span id="L283" data-line-number="283"></span></td>
							
							<td rel="L283" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_head_1</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L284" class="lines-num"><span id="L284" data-line-number="284"></span></td>
							
							<td rel="L284" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_head_2</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L285" class="lines-num"><span id="L285" data-line-number="285"></span></td>
							
							<td rel="L285" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_head_3</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L286" class="lines-num"><span id="L286" data-line-number="286"></span></td>
							
							<td rel="L286" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wild_Dealmaker_head</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L287" class="lines-num"><span id="L287" data-line-number="287"></span></td>
							
							<td rel="L287" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wild_Killa_head</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L288" class="lines-num"><span id="L288" data-line-number="288"></span></td>
							
							<td rel="L288" class="lines-code chroma"><code class="code-inner">    <span class="nx">bear_head</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L289" class="lines-num"><span id="L289" data-line-number="289"></span></td>
							
							<td rel="L289" class="lines-code chroma"><code class="code-inner">    <span class="nx">bear_head_1</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L290" class="lines-num"><span id="L290" data-line-number="290"></span></td>
							
							<td rel="L290" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_head_1</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L291" class="lines-num"><span id="L291" data-line-number="291"></span></td>
							
							<td rel="L291" class="lines-code chroma"><code class="code-inner">    <span class="nx">Head_BOSS_Glukhar</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L292" class="lines-num"><span id="L292" data-line-number="292"></span></td>
							
							<td rel="L292" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wild_Head_nonMesh</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L293" class="lines-num"><span id="L293" data-line-number="293"></span></td>
							
							<td rel="L293" class="lines-code chroma"><code class="code-inner">    <span class="nx">Head_BOSS_Sanitar</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L294" class="lines-num"><span id="L294" data-line-number="294"></span></td>
							
							<td rel="L294" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_head_drozd</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L295" class="lines-num"><span id="L295" data-line-number="295"></span></td>
							
							<td rel="L295" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_head_misha</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L296" class="lines-num"><span id="L296" data-line-number="296"></span></td>
							
							<td rel="L296" class="lines-code chroma"><code class="code-inner">    <span class="nx">head_cultist_01</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L297" class="lines-num"><span id="L297" data-line-number="297"></span></td>
							
							<td rel="L297" class="lines-code chroma"><code class="code-inner">    <span class="nx">head_cultist_02</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L298" class="lines-num"><span id="L298" data-line-number="298"></span></td>
							
							<td rel="L298" class="lines-code chroma"><code class="code-inner">    <span class="nx">head_cultist_03</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L299" class="lines-num"><span id="L299" data-line-number="299"></span></td>
							
							<td rel="L299" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultUsecHead</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L300" class="lines-num"><span id="L300" data-line-number="300"></span></td>
							
							<td rel="L300" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_head_3</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L301" class="lines-num"><span id="L301" data-line-number="301"></span></td>
							
							<td rel="L301" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_head_4</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L302" class="lines-num"><span id="L302" data-line-number="302"></span></td>
							
							<td rel="L302" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_head_5</span>: <span class="kt">IWildHead</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L303" class="lines-num"><span id="L303" data-line-number="303"></span></td>
							
							<td rel="L303" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L304" class="lines-num"><span id="L304" data-line-number="304"></span></td>
							
							<td rel="L304" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L305" class="lines-num"><span id="L305" data-line-number="305"></span></td>
							
							<td rel="L305" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWildHead</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L306" class="lines-num"><span id="L306" data-line-number="306"></span></td>
							
							<td rel="L306" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L307" class="lines-num"><span id="L307" data-line-number="307"></span></td>
							
							<td rel="L307" class="lines-code chroma"><code class="code-inner">    <span class="nx">head</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L308" class="lines-num"><span id="L308" data-line-number="308"></span></td>
							
							<td rel="L308" class="lines-code chroma"><code class="code-inner">    <span class="nx">isNotRandom</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L309" class="lines-num"><span id="L309" data-line-number="309"></span></td>
							
							<td rel="L309" class="lines-code chroma"><code class="code-inner">    <span class="nx">NotRandom</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L310" class="lines-num"><span id="L310" data-line-number="310"></span></td>
							
							<td rel="L310" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L311" class="lines-num"><span id="L311" data-line-number="311"></span></td>
							
							<td rel="L311" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L312" class="lines-num"><span id="L312" data-line-number="312"></span></td>
							
							<td rel="L312" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISavageBody</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L313" class="lines-num"><span id="L313" data-line-number="313"></span></td>
							
							<td rel="L313" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L314" class="lines-num"><span id="L314" data-line-number="314"></span></td>
							
							<td rel="L314" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L315" class="lines-num"><span id="L315" data-line-number="315"></span></td>
							
							<td rel="L315" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_1</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L316" class="lines-num"><span id="L316" data-line-number="316"></span></td>
							
							<td rel="L316" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_2</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L317" class="lines-num"><span id="L317" data-line-number="317"></span></td>
							
							<td rel="L317" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_3</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L318" class="lines-num"><span id="L318" data-line-number="318"></span></td>
							
							<td rel="L318" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wild_Dealmaker_body</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L319" class="lines-num"><span id="L319" data-line-number="319"></span></td>
							
							<td rel="L319" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_security_body_1</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L320" class="lines-num"><span id="L320" data-line-number="320"></span></td>
							
							<td rel="L320" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_security_body_2</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L321" class="lines-num"><span id="L321" data-line-number="321"></span></td>
							
							<td rel="L321" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_Killa_body</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L322" class="lines-num"><span id="L322" data-line-number="322"></span></td>
							
							<td rel="L322" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_pmcBot_body</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L323" class="lines-num"><span id="L323" data-line-number="323"></span></td>
							
							<td rel="L323" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_Shturman_body</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L324" class="lines-num"><span id="L324" data-line-number="324"></span></td>
							
							<td rel="L324" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_Gluhar_body</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L325" class="lines-num"><span id="L325" data-line-number="325"></span></td>
							
							<td rel="L325" class="lines-code chroma"><code class="code-inner">    <span class="nx">Tshirt_security_TshirtTatu_01</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L326" class="lines-num"><span id="L326" data-line-number="326"></span></td>
							
							<td rel="L326" class="lines-code chroma"><code class="code-inner">    <span class="nx">Tshirt_security_TshirtTatu_02</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L327" class="lines-num"><span id="L327" data-line-number="327"></span></td>
							
							<td rel="L327" class="lines-code chroma"><code class="code-inner">    <span class="nx">Top_security_Husky</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L328" class="lines-num"><span id="L328" data-line-number="328"></span></td>
							
							<td rel="L328" class="lines-code chroma"><code class="code-inner">    <span class="nx">Top_security_Gorka4</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L329" class="lines-num"><span id="L329" data-line-number="329"></span></td>
							
							<td rel="L329" class="lines-code chroma"><code class="code-inner">    <span class="nx">scav_kit_upper_meteor</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L330" class="lines-num"><span id="L330" data-line-number="330"></span></td>
							
							<td rel="L330" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_russia1</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L331" class="lines-num"><span id="L331" data-line-number="331"></span></td>
							
							<td rel="L331" class="lines-code chroma"><code class="code-inner">    <span class="nx">Top_BOSS_Sanitar</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L332" class="lines-num"><span id="L332" data-line-number="332"></span></td>
							
							<td rel="L332" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_motocross</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L333" class="lines-num"><span id="L333" data-line-number="333"></span></td>
							
							<td rel="L333" class="lines-code chroma"><code class="code-inner">    <span class="nx">top_cultist_01</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L334" class="lines-num"><span id="L334" data-line-number="334"></span></td>
							
							<td rel="L334" class="lines-code chroma"><code class="code-inner">    <span class="nx">top_cultist_02</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L335" class="lines-num"><span id="L335" data-line-number="335"></span></td>
							
							<td rel="L335" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_rainparka</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L336" class="lines-num"><span id="L336" data-line-number="336"></span></td>
							
							<td rel="L336" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_underarmour</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L337" class="lines-num"><span id="L337" data-line-number="337"></span></td>
							
							<td rel="L337" class="lines-code chroma"><code class="code-inner">    <span class="nx">top_boss_tagilla</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L338" class="lines-num"><span id="L338" data-line-number="338"></span></td>
							
							<td rel="L338" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultUsecBody</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L339" class="lines-num"><span id="L339" data-line-number="339"></span></td>
							
							<td rel="L339" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_acu</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L340" class="lines-num"><span id="L340" data-line-number="340"></span></td>
							
							<td rel="L340" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_commando</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L341" class="lines-num"><span id="L341" data-line-number="341"></span></td>
							
							<td rel="L341" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_aggressor</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L342" class="lines-num"><span id="L342" data-line-number="342"></span></td>
							
							<td rel="L342" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_hoody</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L343" class="lines-num"><span id="L343" data-line-number="343"></span></td>
							
							<td rel="L343" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_pcuironsight</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L344" class="lines-num"><span id="L344" data-line-number="344"></span></td>
							
							<td rel="L344" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_top_beltstaff</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L345" class="lines-num"><span id="L345" data-line-number="345"></span></td>
							
							<td rel="L345" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_flexion</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L346" class="lines-num"><span id="L346" data-line-number="346"></span></td>
							
							<td rel="L346" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_tier3</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L347" class="lines-num"><span id="L347" data-line-number="347"></span></td>
							
							<td rel="L347" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_pcsmulticam</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L348" class="lines-num"><span id="L348" data-line-number="348"></span></td>
							
							<td rel="L348" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_tier_2</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L349" class="lines-num"><span id="L349" data-line-number="349"></span></td>
							
							<td rel="L349" class="lines-code chroma"><code class="code-inner">    <span class="nx">usec_upper_infiltrator</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L350" class="lines-num"><span id="L350" data-line-number="350"></span></td>
							
							<td rel="L350" class="lines-code chroma"><code class="code-inner">    <span class="nx">user_upper_NightPatrol</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L351" class="lines-num"><span id="L351" data-line-number="351"></span></td>
							
							<td rel="L351" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_body_bomber</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L352" class="lines-num"><span id="L352" data-line-number="352"></span></td>
							
							<td rel="L352" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_top_yellowcoat</span>: <span class="kt">IWildBody</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L353" class="lines-num"><span id="L353" data-line-number="353"></span></td>
							
							<td rel="L353" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L354" class="lines-num"><span id="L354" data-line-number="354"></span></td>
							
							<td rel="L354" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L355" class="lines-num"><span id="L355" data-line-number="355"></span></td>
							
							<td rel="L355" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWildBody</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L356" class="lines-num"><span id="L356" data-line-number="356"></span></td>
							
							<td rel="L356" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L357" class="lines-num"><span id="L357" data-line-number="357"></span></td>
							
							<td rel="L357" class="lines-code chroma"><code class="code-inner">    <span class="nx">body</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L358" class="lines-num"><span id="L358" data-line-number="358"></span></td>
							
							<td rel="L358" class="lines-code chroma"><code class="code-inner">    <span class="nx">hands</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L359" class="lines-num"><span id="L359" data-line-number="359"></span></td>
							
							<td rel="L359" class="lines-code chroma"><code class="code-inner">    <span class="nx">isNotRandom</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L360" class="lines-num"><span id="L360" data-line-number="360"></span></td>
							
							<td rel="L360" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L361" class="lines-num"><span id="L361" data-line-number="361"></span></td>
							
							<td rel="L361" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L362" class="lines-num"><span id="L362" data-line-number="362"></span></td>
							
							<td rel="L362" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISavageFeet</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L363" class="lines-num"><span id="L363" data-line-number="363"></span></td>
							
							<td rel="L363" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L364" class="lines-num"><span id="L364" data-line-number="364"></span></td>
							
							<td rel="L364" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L365" class="lines-num"><span id="L365" data-line-number="365"></span></td>
							
							<td rel="L365" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_1</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L366" class="lines-num"><span id="L366" data-line-number="366"></span></td>
							
							<td rel="L366" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_2</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L367" class="lines-num"><span id="L367" data-line-number="367"></span></td>
							
							<td rel="L367" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wild_Dealmaker_feet</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L368" class="lines-num"><span id="L368" data-line-number="368"></span></td>
							
							<td rel="L368" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_security_feet_1</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L369" class="lines-num"><span id="L369" data-line-number="369"></span></td>
							
							<td rel="L369" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wild_Killa_feet</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L370" class="lines-num"><span id="L370" data-line-number="370"></span></td>
							
							<td rel="L370" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_pmcBot_feet</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L371" class="lines-num"><span id="L371" data-line-number="371"></span></td>
							
							<td rel="L371" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pants_BOSS_Glukhar</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L372" class="lines-num"><span id="L372" data-line-number="372"></span></td>
							
							<td rel="L372" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pants_BOSS_Shturman</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L373" class="lines-num"><span id="L373" data-line-number="373"></span></td>
							
							<td rel="L373" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pants_security_Gorka4</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L374" class="lines-num"><span id="L374" data-line-number="374"></span></td>
							
							<td rel="L374" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pants_security_Flora</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L375" class="lines-num"><span id="L375" data-line-number="375"></span></td>
							
							<td rel="L375" class="lines-code chroma"><code class="code-inner">    <span class="nx">scav_kit_lower_sklon</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L376" class="lines-num"><span id="L376" data-line-number="376"></span></td>
							
							<td rel="L376" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pants_BOSS_Sanitar</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L377" class="lines-num"><span id="L377" data-line-number="377"></span></td>
							
							<td rel="L377" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_sweatpants</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L378" class="lines-num"><span id="L378" data-line-number="378"></span></td>
							
							<td rel="L378" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_wasatch</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L379" class="lines-num"><span id="L379" data-line-number="379"></span></td>
							
							<td rel="L379" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_slimPants</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L380" class="lines-num"><span id="L380" data-line-number="380"></span></td>
							
							<td rel="L380" class="lines-code chroma"><code class="code-inner">    <span class="nx">pants_cultist_01</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L381" class="lines-num"><span id="L381" data-line-number="381"></span></td>
							
							<td rel="L381" class="lines-code chroma"><code class="code-inner">    <span class="nx">pants_cultist_02</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L382" class="lines-num"><span id="L382" data-line-number="382"></span></td>
							
							<td rel="L382" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_scavelite_taclite</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L383" class="lines-num"><span id="L383" data-line-number="383"></span></td>
							
							<td rel="L383" class="lines-code chroma"><code class="code-inner">    <span class="nx">pants_boss_tagilla</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L384" class="lines-num"><span id="L384" data-line-number="384"></span></td>
							
							<td rel="L384" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_feet_bomber</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L385" class="lines-num"><span id="L385" data-line-number="385"></span></td>
							
							<td rel="L385" class="lines-code chroma"><code class="code-inner">    <span class="nx">wild_pants_yellowcoat</span>: <span class="kt">IWildFeet</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L386" class="lines-num"><span id="L386" data-line-number="386"></span></td>
							
							<td rel="L386" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L387" class="lines-num"><span id="L387" data-line-number="387"></span></td>
							
							<td rel="L387" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L388" class="lines-num"><span id="L388" data-line-number="388"></span></td>
							
							<td rel="L388" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWildFeet</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L389" class="lines-num"><span id="L389" data-line-number="389"></span></td>
							
							<td rel="L389" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L390" class="lines-num"><span id="L390" data-line-number="390"></span></td>
							
							<td rel="L390" class="lines-code chroma"><code class="code-inner">    <span class="nx">feet</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L391" class="lines-num"><span id="L391" data-line-number="391"></span></td>
							
							<td rel="L391" class="lines-code chroma"><code class="code-inner">    <span class="nx">isNotRandom</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L392" class="lines-num"><span id="L392" data-line-number="392"></span></td>
							
							<td rel="L392" class="lines-code chroma"><code class="code-inner">    <span class="nx">NotRandom</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L393" class="lines-num"><span id="L393" data-line-number="393"></span></td>
							
							<td rel="L393" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L394" class="lines-num"><span id="L394" data-line-number="394"></span></td>
							
							<td rel="L394" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L395" class="lines-num"><span id="L395" data-line-number="395"></span></td>
							
							<td rel="L395" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICustomizationVoice</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L396" class="lines-num"><span id="L396" data-line-number="396"></span></td>
							
							<td rel="L396" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L397" class="lines-num"><span id="L397" data-line-number="397"></span></td>
							
							<td rel="L397" class="lines-code chroma"><code class="code-inner">    <span class="nx">voice</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L398" class="lines-num"><span id="L398" data-line-number="398"></span></td>
							
							<td rel="L398" class="lines-code chroma"><code class="code-inner">    <span class="nx">side</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L399" class="lines-num"><span id="L399" data-line-number="399"></span></td>
							
							<td rel="L399" class="lines-code chroma"><code class="code-inner">    <span class="nx">isNotRandom</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L400" class="lines-num"><span id="L400" data-line-number="400"></span></td>
							
							<td rel="L400" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L401" class="lines-num"><span id="L401" data-line-number="401"></span></td>
							
							<td rel="L401" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L402" class="lines-num"><span id="L402" data-line-number="402"></span></td>
							
							<td rel="L402" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBodyParts</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L403" class="lines-num"><span id="L403" data-line-number="403"></span></td>
							
							<td rel="L403" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L404" class="lines-num"><span id="L404" data-line-number="404"></span></td>
							
							<td rel="L404" class="lines-code chroma"><code class="code-inner">    <span class="nx">Head</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L405" class="lines-num"><span id="L405" data-line-number="405"></span></td>
							
							<td rel="L405" class="lines-code chroma"><code class="code-inner">    <span class="nx">Body</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L406" class="lines-num"><span id="L406" data-line-number="406"></span></td>
							
							<td rel="L406" class="lines-code chroma"><code class="code-inner">    <span class="nx">Feet</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L407" class="lines-num"><span id="L407" data-line-number="407"></span></td>
							
							<td rel="L407" class="lines-code chroma"><code class="code-inner">    <span class="nx">Hands</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L408" class="lines-num"><span id="L408" data-line-number="408"></span></td>
							
							<td rel="L408" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L409" class="lines-num"><span id="L409" data-line-number="409"></span></td>
							
							<td rel="L409" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L410" class="lines-num"><span id="L410" data-line-number="410"></span></td>
							
							<td rel="L410" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IArmorMaterials</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L411" class="lines-num"><span id="L411" data-line-number="411"></span></td>
							
							<td rel="L411" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L412" class="lines-num"><span id="L412" data-line-number="412"></span></td>
							
							<td rel="L412" class="lines-code chroma"><code class="code-inner">    <span class="nx">UHMWPE</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L413" class="lines-num"><span id="L413" data-line-number="413"></span></td>
							
							<td rel="L413" class="lines-code chroma"><code class="code-inner">    <span class="nx">Aramid</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L414" class="lines-num"><span id="L414" data-line-number="414"></span></td>
							
							<td rel="L414" class="lines-code chroma"><code class="code-inner">    <span class="nx">Combined</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L415" class="lines-num"><span id="L415" data-line-number="415"></span></td>
							
							<td rel="L415" class="lines-code chroma"><code class="code-inner">    <span class="nx">Titan</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L416" class="lines-num"><span id="L416" data-line-number="416"></span></td>
							
							<td rel="L416" class="lines-code chroma"><code class="code-inner">    <span class="nx">Aluminium</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L417" class="lines-num"><span id="L417" data-line-number="417"></span></td>
							
							<td rel="L417" class="lines-code chroma"><code class="code-inner">    <span class="nx">ArmoredSteel</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L418" class="lines-num"><span id="L418" data-line-number="418"></span></td>
							
							<td rel="L418" class="lines-code chroma"><code class="code-inner">    <span class="nx">Ceramic</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L419" class="lines-num"><span id="L419" data-line-number="419"></span></td>
							
							<td rel="L419" class="lines-code chroma"><code class="code-inner">    <span class="nx">Glass</span>: <span class="kt">IArmorType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L420" class="lines-num"><span id="L420" data-line-number="420"></span></td>
							
							<td rel="L420" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L421" class="lines-num"><span id="L421" data-line-number="421"></span></td>
							
							<td rel="L421" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L422" class="lines-num"><span id="L422" data-line-number="422"></span></td>
							
							<td rel="L422" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IArmorType</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L423" class="lines-num"><span id="L423" data-line-number="423"></span></td>
							
							<td rel="L423" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L424" class="lines-num"><span id="L424" data-line-number="424"></span></td>
							
							<td rel="L424" class="lines-code chroma"><code class="code-inner">    <span class="nx">Destructibility</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L425" class="lines-num"><span id="L425" data-line-number="425"></span></td>
							
							<td rel="L425" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinRepairDegradation</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L426" class="lines-num"><span id="L426" data-line-number="426"></span></td>
							
							<td rel="L426" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxRepairDegradation</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L427" class="lines-num"><span id="L427" data-line-number="427"></span></td>
							
							<td rel="L427" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExplosionDestructibility</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L428" class="lines-num"><span id="L428" data-line-number="428"></span></td>
							
							<td rel="L428" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinRepairKitDegradation</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L429" class="lines-num"><span id="L429" data-line-number="429"></span></td>
							
							<td rel="L429" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxRepairKitDegradation</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L430" class="lines-num"><span id="L430" data-line-number="430"></span></td>
							
							<td rel="L430" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L431" class="lines-num"><span id="L431" data-line-number="431"></span></td>
							
							<td rel="L431" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L432" class="lines-num"><span id="L432" data-line-number="432"></span></td>
							
							<td rel="L432" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHealth</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L433" class="lines-num"><span id="L433" data-line-number="433"></span></td>
							
							<td rel="L433" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L434" class="lines-num"><span id="L434" data-line-number="434"></span></td>
							
							<td rel="L434" class="lines-code chroma"><code class="code-inner">    <span class="nx">Falling</span>: <span class="kt">IFalling</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L435" class="lines-num"><span id="L435" data-line-number="435"></span></td>
							
							<td rel="L435" class="lines-code chroma"><code class="code-inner">    <span class="nx">Effects</span>: <span class="kt">IEffects</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L436" class="lines-num"><span id="L436" data-line-number="436"></span></td>
							
							<td rel="L436" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealPrice</span>: <span class="kt">IHealPrice</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L437" class="lines-num"><span id="L437" data-line-number="437"></span></td>
							
							<td rel="L437" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProfileHealthSettings</span>: <span class="kt">IProfileHealthSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L438" class="lines-num"><span id="L438" data-line-number="438"></span></td>
							
							<td rel="L438" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L439" class="lines-num"><span id="L439" data-line-number="439"></span></td>
							
							<td rel="L439" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L440" class="lines-num"><span id="L440" data-line-number="440"></span></td>
							
							<td rel="L440" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IFalling</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L441" class="lines-num"><span id="L441" data-line-number="441"></span></td>
							
							<td rel="L441" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L442" class="lines-num"><span id="L442" data-line-number="442"></span></td>
							
							<td rel="L442" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamagePerMeter</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L443" class="lines-num"><span id="L443" data-line-number="443"></span></td>
							
							<td rel="L443" class="lines-code chroma"><code class="code-inner">    <span class="nx">SafeHeight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L444" class="lines-num"><span id="L444" data-line-number="444"></span></td>
							
							<td rel="L444" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L445" class="lines-num"><span id="L445" data-line-number="445"></span></td>
							
							<td rel="L445" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L446" class="lines-num"><span id="L446" data-line-number="446"></span></td>
							
							<td rel="L446" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEffects</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L447" class="lines-num"><span id="L447" data-line-number="447"></span></td>
							
							<td rel="L447" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L448" class="lines-num"><span id="L448" data-line-number="448"></span></td>
							
							<td rel="L448" class="lines-code chroma"><code class="code-inner">    <span class="nx">Existence</span>: <span class="kt">IExistence</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L449" class="lines-num"><span id="L449" data-line-number="449"></span></td>
							
							<td rel="L449" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dehydration</span>: <span class="kt">IDehydration</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L450" class="lines-num"><span id="L450" data-line-number="450"></span></td>
							
							<td rel="L450" class="lines-code chroma"><code class="code-inner">    <span class="nx">BreakPart</span>: <span class="kt">IBreakPart</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L451" class="lines-num"><span id="L451" data-line-number="451"></span></td>
							
							<td rel="L451" class="lines-code chroma"><code class="code-inner">    <span class="nx">Contusion</span>: <span class="kt">IContusion</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L452" class="lines-num"><span id="L452" data-line-number="452"></span></td>
							
							<td rel="L452" class="lines-code chroma"><code class="code-inner">    <span class="nx">Disorientation</span>: <span class="kt">IDisorientation</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L453" class="lines-num"><span id="L453" data-line-number="453"></span></td>
							
							<td rel="L453" class="lines-code chroma"><code class="code-inner">    <span class="nx">Exhaustion</span>: <span class="kt">IExhaustion</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L454" class="lines-num"><span id="L454" data-line-number="454"></span></td>
							
							<td rel="L454" class="lines-code chroma"><code class="code-inner">    <span class="nx">LowEdgeHealth</span>: <span class="kt">ILowEdgeHealth</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L455" class="lines-num"><span id="L455" data-line-number="455"></span></td>
							
							<td rel="L455" class="lines-code chroma"><code class="code-inner">    <span class="nx">RadExposure</span>: <span class="kt">IRadExposure</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L456" class="lines-num"><span id="L456" data-line-number="456"></span></td>
							
							<td rel="L456" class="lines-code chroma"><code class="code-inner">    <span class="nx">Stun</span>: <span class="kt">IStun</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L457" class="lines-num"><span id="L457" data-line-number="457"></span></td>
							
							<td rel="L457" class="lines-code chroma"><code class="code-inner">    <span class="nx">Intoxication</span>: <span class="kt">Intoxication</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L458" class="lines-num"><span id="L458" data-line-number="458"></span></td>
							
							<td rel="L458" class="lines-code chroma"><code class="code-inner">    <span class="nx">Regeneration</span>: <span class="kt">IRegeneration</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L459" class="lines-num"><span id="L459" data-line-number="459"></span></td>
							
							<td rel="L459" class="lines-code chroma"><code class="code-inner">    <span class="nx">Wound</span>: <span class="kt">IWound</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L460" class="lines-num"><span id="L460" data-line-number="460"></span></td>
							
							<td rel="L460" class="lines-code chroma"><code class="code-inner">    <span class="nx">Berserk</span>: <span class="kt">IBerserk</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L461" class="lines-num"><span id="L461" data-line-number="461"></span></td>
							
							<td rel="L461" class="lines-code chroma"><code class="code-inner">    <span class="nx">Flash</span>: <span class="kt">IFlash</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L462" class="lines-num"><span id="L462" data-line-number="462"></span></td>
							
							<td rel="L462" class="lines-code chroma"><code class="code-inner">    <span class="nx">MedEffect</span>: <span class="kt">IMedEffect</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L463" class="lines-num"><span id="L463" data-line-number="463"></span></td>
							
							<td rel="L463" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pain</span>: <span class="kt">IPain</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L464" class="lines-num"><span id="L464" data-line-number="464"></span></td>
							
							<td rel="L464" class="lines-code chroma"><code class="code-inner">    <span class="nx">PainKiller</span>: <span class="kt">IPainKiller</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L465" class="lines-num"><span id="L465" data-line-number="465"></span></td>
							
							<td rel="L465" class="lines-code chroma"><code class="code-inner">    <span class="nx">SandingScreen</span>: <span class="kt">ISandingScreen</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L466" class="lines-num"><span id="L466" data-line-number="466"></span></td>
							
							<td rel="L466" class="lines-code chroma"><code class="code-inner">    <span class="nx">MildMusclePain</span>: <span class="kt">IMusclePainEffect</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L467" class="lines-num"><span id="L467" data-line-number="467"></span></td>
							
							<td rel="L467" class="lines-code chroma"><code class="code-inner">    <span class="nx">SevereMusclePain</span>: <span class="kt">IMusclePainEffect</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L468" class="lines-num"><span id="L468" data-line-number="468"></span></td>
							
							<td rel="L468" class="lines-code chroma"><code class="code-inner">    <span class="nx">Stimulator</span>: <span class="kt">IStimulator</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L469" class="lines-num"><span id="L469" data-line-number="469"></span></td>
							
							<td rel="L469" class="lines-code chroma"><code class="code-inner">    <span class="nx">Tremor</span>: <span class="kt">ITremor</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L470" class="lines-num"><span id="L470" data-line-number="470"></span></td>
							
							<td rel="L470" class="lines-code chroma"><code class="code-inner">    <span class="nx">ChronicStaminaFatigue</span>: <span class="kt">IChronicStaminaFatigue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L471" class="lines-num"><span id="L471" data-line-number="471"></span></td>
							
							<td rel="L471" class="lines-code chroma"><code class="code-inner">    <span class="nx">Fracture</span>: <span class="kt">IFracture</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L472" class="lines-num"><span id="L472" data-line-number="472"></span></td>
							
							<td rel="L472" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeavyBleeding</span>: <span class="kt">IHeavyBleeding</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L473" class="lines-num"><span id="L473" data-line-number="473"></span></td>
							
							<td rel="L473" class="lines-code chroma"><code class="code-inner">    <span class="nx">LightBleeding</span>: <span class="kt">ILightBleeding</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L474" class="lines-num"><span id="L474" data-line-number="474"></span></td>
							
							<td rel="L474" class="lines-code chroma"><code class="code-inner">    <span class="nx">BodyTemperature</span>: <span class="kt">IBodyTemperature</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L475" class="lines-num"><span id="L475" data-line-number="475"></span></td>
							
							<td rel="L475" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L476" class="lines-num"><span id="L476" data-line-number="476"></span></td>
							
							<td rel="L476" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L477" class="lines-num"><span id="L477" data-line-number="477"></span></td>
							
							<td rel="L477" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IExistence</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L478" class="lines-num"><span id="L478" data-line-number="478"></span></td>
							
							<td rel="L478" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L479" class="lines-num"><span id="L479" data-line-number="479"></span></td>
							
							<td rel="L479" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L480" class="lines-num"><span id="L480" data-line-number="480"></span></td>
							
							<td rel="L480" class="lines-code chroma"><code class="code-inner">    <span class="nx">HydrationLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L481" class="lines-num"><span id="L481" data-line-number="481"></span></td>
							
							<td rel="L481" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyDamage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L482" class="lines-num"><span id="L482" data-line-number="482"></span></td>
							
							<td rel="L482" class="lines-code chroma"><code class="code-inner">    <span class="nx">HydrationDamage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L483" class="lines-num"><span id="L483" data-line-number="483"></span></td>
							
							<td rel="L483" class="lines-code chroma"><code class="code-inner">    <span class="nx">DestroyedStomachEnergyTimeFactor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L484" class="lines-num"><span id="L484" data-line-number="484"></span></td>
							
							<td rel="L484" class="lines-code chroma"><code class="code-inner">    <span class="nx">DestroyedStomachHydrationTimeFactor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L485" class="lines-num"><span id="L485" data-line-number="485"></span></td>
							
							<td rel="L485" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L486" class="lines-num"><span id="L486" data-line-number="486"></span></td>
							
							<td rel="L486" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L487" class="lines-num"><span id="L487" data-line-number="487"></span></td>
							
							<td rel="L487" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IDehydration</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L488" class="lines-num"><span id="L488" data-line-number="488"></span></td>
							
							<td rel="L488" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L489" class="lines-num"><span id="L489" data-line-number="489"></span></td>
							
							<td rel="L489" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L490" class="lines-num"><span id="L490" data-line-number="490"></span></td>
							
							<td rel="L490" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L491" class="lines-num"><span id="L491" data-line-number="491"></span></td>
							
							<td rel="L491" class="lines-code chroma"><code class="code-inner">    <span class="nx">BleedingHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L492" class="lines-num"><span id="L492" data-line-number="492"></span></td>
							
							<td rel="L492" class="lines-code chroma"><code class="code-inner">    <span class="nx">BleedingLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L493" class="lines-num"><span id="L493" data-line-number="493"></span></td>
							
							<td rel="L493" class="lines-code chroma"><code class="code-inner">    <span class="nx">BleedingLifeTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L494" class="lines-num"><span id="L494" data-line-number="494"></span></td>
							
							<td rel="L494" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageOnStrongDehydration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L495" class="lines-num"><span id="L495" data-line-number="495"></span></td>
							
							<td rel="L495" class="lines-code chroma"><code class="code-inner">    <span class="nx">StrongDehydrationLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L496" class="lines-num"><span id="L496" data-line-number="496"></span></td>
							
							<td rel="L496" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L497" class="lines-num"><span id="L497" data-line-number="497"></span></td>
							
							<td rel="L497" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L498" class="lines-num"><span id="L498" data-line-number="498"></span></td>
							
							<td rel="L498" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBreakPart</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L499" class="lines-num"><span id="L499" data-line-number="499"></span></td>
							
							<td rel="L499" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L500" class="lines-num"><span id="L500" data-line-number="500"></span></td>
							
							<td rel="L500" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L501" class="lines-num"><span id="L501" data-line-number="501"></span></td>
							
							<td rel="L501" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L502" class="lines-num"><span id="L502" data-line-number="502"></span></td>
							
							<td rel="L502" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealExperience</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L503" class="lines-num"><span id="L503" data-line-number="503"></span></td>
							
							<td rel="L503" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L504" class="lines-num"><span id="L504" data-line-number="504"></span></td>
							
							<td rel="L504" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L505" class="lines-num"><span id="L505" data-line-number="505"></span></td>
							
							<td rel="L505" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovePrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L506" class="lines-num"><span id="L506" data-line-number="506"></span></td>
							
							<td rel="L506" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovedAfterDeath</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L507" class="lines-num"><span id="L507" data-line-number="507"></span></td>
							
							<td rel="L507" class="lines-code chroma"><code class="code-inner">    <span class="nx">BulletHitProbability</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L508" class="lines-num"><span id="L508" data-line-number="508"></span></td>
							
							<td rel="L508" class="lines-code chroma"><code class="code-inner">    <span class="nx">FallingProbability</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L509" class="lines-num"><span id="L509" data-line-number="509"></span></td>
							
							<td rel="L509" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L510" class="lines-num"><span id="L510" data-line-number="510"></span></td>
							
							<td rel="L510" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L511" class="lines-num"><span id="L511" data-line-number="511"></span></td>
							
							<td rel="L511" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IContusion</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L512" class="lines-num"><span id="L512" data-line-number="512"></span></td>
							
							<td rel="L512" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L513" class="lines-num"><span id="L513" data-line-number="513"></span></td>
							
							<td rel="L513" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dummy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L514" class="lines-num"><span id="L514" data-line-number="514"></span></td>
							
							<td rel="L514" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L515" class="lines-num"><span id="L515" data-line-number="515"></span></td>
							
							<td rel="L515" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L516" class="lines-num"><span id="L516" data-line-number="516"></span></td>
							
							<td rel="L516" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IDisorientation</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L517" class="lines-num"><span id="L517" data-line-number="517"></span></td>
							
							<td rel="L517" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L518" class="lines-num"><span id="L518" data-line-number="518"></span></td>
							
							<td rel="L518" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dummy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L519" class="lines-num"><span id="L519" data-line-number="519"></span></td>
							
							<td rel="L519" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L520" class="lines-num"><span id="L520" data-line-number="520"></span></td>
							
							<td rel="L520" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L521" class="lines-num"><span id="L521" data-line-number="521"></span></td>
							
							<td rel="L521" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IExhaustion</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L522" class="lines-num"><span id="L522" data-line-number="522"></span></td>
							
							<td rel="L522" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L523" class="lines-num"><span id="L523" data-line-number="523"></span></td>
							
							<td rel="L523" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L524" class="lines-num"><span id="L524" data-line-number="524"></span></td>
							
							<td rel="L524" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L525" class="lines-num"><span id="L525" data-line-number="525"></span></td>
							
							<td rel="L525" class="lines-code chroma"><code class="code-inner">    <span class="nx">Damage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L526" class="lines-num"><span id="L526" data-line-number="526"></span></td>
							
							<td rel="L526" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L527" class="lines-num"><span id="L527" data-line-number="527"></span></td>
							
							<td rel="L527" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L528" class="lines-num"><span id="L528" data-line-number="528"></span></td>
							
							<td rel="L528" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L529" class="lines-num"><span id="L529" data-line-number="529"></span></td>
							
							<td rel="L529" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILowEdgeHealth</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L530" class="lines-num"><span id="L530" data-line-number="530"></span></td>
							
							<td rel="L530" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L531" class="lines-num"><span id="L531" data-line-number="531"></span></td>
							
							<td rel="L531" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L532" class="lines-num"><span id="L532" data-line-number="532"></span></td>
							
							<td rel="L532" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L533" class="lines-num"><span id="L533" data-line-number="533"></span></td>
							
							<td rel="L533" class="lines-code chroma"><code class="code-inner">    <span class="nx">StartCommonHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L534" class="lines-num"><span id="L534" data-line-number="534"></span></td>
							
							<td rel="L534" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L535" class="lines-num"><span id="L535" data-line-number="535"></span></td>
							
							<td rel="L535" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L536" class="lines-num"><span id="L536" data-line-number="536"></span></td>
							
							<td rel="L536" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRadExposure</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L537" class="lines-num"><span id="L537" data-line-number="537"></span></td>
							
							<td rel="L537" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L538" class="lines-num"><span id="L538" data-line-number="538"></span></td>
							
							<td rel="L538" class="lines-code chroma"><code class="code-inner">    <span class="nx">Damage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L539" class="lines-num"><span id="L539" data-line-number="539"></span></td>
							
							<td rel="L539" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L540" class="lines-num"><span id="L540" data-line-number="540"></span></td>
							
							<td rel="L540" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L541" class="lines-num"><span id="L541" data-line-number="541"></span></td>
							
							<td rel="L541" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L542" class="lines-num"><span id="L542" data-line-number="542"></span></td>
							
							<td rel="L542" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStun</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L543" class="lines-num"><span id="L543" data-line-number="543"></span></td>
							
							<td rel="L543" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L544" class="lines-num"><span id="L544" data-line-number="544"></span></td>
							
							<td rel="L544" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dummy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L545" class="lines-num"><span id="L545" data-line-number="545"></span></td>
							
							<td rel="L545" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L546" class="lines-num"><span id="L546" data-line-number="546"></span></td>
							
							<td rel="L546" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L547" class="lines-num"><span id="L547" data-line-number="547"></span></td>
							
							<td rel="L547" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Intoxication</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L548" class="lines-num"><span id="L548" data-line-number="548"></span></td>
							
							<td rel="L548" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L549" class="lines-num"><span id="L549" data-line-number="549"></span></td>
							
							<td rel="L549" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L550" class="lines-num"><span id="L550" data-line-number="550"></span></td>
							
							<td rel="L550" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L551" class="lines-num"><span id="L551" data-line-number="551"></span></td>
							
							<td rel="L551" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L552" class="lines-num"><span id="L552" data-line-number="552"></span></td>
							
							<td rel="L552" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L553" class="lines-num"><span id="L553" data-line-number="553"></span></td>
							
							<td rel="L553" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L554" class="lines-num"><span id="L554" data-line-number="554"></span></td>
							
							<td rel="L554" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L555" class="lines-num"><span id="L555" data-line-number="555"></span></td>
							
							<td rel="L555" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovedAfterDeath</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L556" class="lines-num"><span id="L556" data-line-number="556"></span></td>
							
							<td rel="L556" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealExperience</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L557" class="lines-num"><span id="L557" data-line-number="557"></span></td>
							
							<td rel="L557" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovePrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L558" class="lines-num"><span id="L558" data-line-number="558"></span></td>
							
							<td rel="L558" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L559" class="lines-num"><span id="L559" data-line-number="559"></span></td>
							
							<td rel="L559" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L560" class="lines-num"><span id="L560" data-line-number="560"></span></td>
							
							<td rel="L560" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRegeneration</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L561" class="lines-num"><span id="L561" data-line-number="561"></span></td>
							
							<td rel="L561" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L562" class="lines-num"><span id="L562" data-line-number="562"></span></td>
							
							<td rel="L562" class="lines-code chroma"><code class="code-inner">    <span class="nx">LoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L563" class="lines-num"><span id="L563" data-line-number="563"></span></td>
							
							<td rel="L563" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinimumHealthPercentage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L564" class="lines-num"><span id="L564" data-line-number="564"></span></td>
							
							<td rel="L564" class="lines-code chroma"><code class="code-inner">    <span class="nx">Energy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L565" class="lines-num"><span id="L565" data-line-number="565"></span></td>
							
							<td rel="L565" class="lines-code chroma"><code class="code-inner">    <span class="nx">Hydration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L566" class="lines-num"><span id="L566" data-line-number="566"></span></td>
							
							<td rel="L566" class="lines-code chroma"><code class="code-inner">    <span class="nx">BodyHealth</span>: <span class="kt">IBodyHealth</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L567" class="lines-num"><span id="L567" data-line-number="567"></span></td>
							
							<td rel="L567" class="lines-code chroma"><code class="code-inner">    <span class="nx">Influences</span>: <span class="kt">IInfluences</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L568" class="lines-num"><span id="L568" data-line-number="568"></span></td>
							
							<td rel="L568" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L569" class="lines-num"><span id="L569" data-line-number="569"></span></td>
							
							<td rel="L569" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L570" class="lines-num"><span id="L570" data-line-number="570"></span></td>
							
							<td rel="L570" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBodyHealth</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L571" class="lines-num"><span id="L571" data-line-number="571"></span></td>
							
							<td rel="L571" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L572" class="lines-num"><span id="L572" data-line-number="572"></span></td>
							
							<td rel="L572" class="lines-code chroma"><code class="code-inner">    <span class="nx">Head</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L573" class="lines-num"><span id="L573" data-line-number="573"></span></td>
							
							<td rel="L573" class="lines-code chroma"><code class="code-inner">    <span class="nx">Chest</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L574" class="lines-num"><span id="L574" data-line-number="574"></span></td>
							
							<td rel="L574" class="lines-code chroma"><code class="code-inner">    <span class="nx">Stomach</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L575" class="lines-num"><span id="L575" data-line-number="575"></span></td>
							
							<td rel="L575" class="lines-code chroma"><code class="code-inner">    <span class="nx">LeftArm</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L576" class="lines-num"><span id="L576" data-line-number="576"></span></td>
							
							<td rel="L576" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightArm</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L577" class="lines-num"><span id="L577" data-line-number="577"></span></td>
							
							<td rel="L577" class="lines-code chroma"><code class="code-inner">    <span class="nx">LeftLeg</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L578" class="lines-num"><span id="L578" data-line-number="578"></span></td>
							
							<td rel="L578" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightLeg</span>: <span class="kt">IBodyHealthValue</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L579" class="lines-num"><span id="L579" data-line-number="579"></span></td>
							
							<td rel="L579" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L580" class="lines-num"><span id="L580" data-line-number="580"></span></td>
							
							<td rel="L580" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L581" class="lines-num"><span id="L581" data-line-number="581"></span></td>
							
							<td rel="L581" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBodyHealthValue</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L582" class="lines-num"><span id="L582" data-line-number="582"></span></td>
							
							<td rel="L582" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L583" class="lines-num"><span id="L583" data-line-number="583"></span></td>
							
							<td rel="L583" class="lines-code chroma"><code class="code-inner">    <span class="nx">Value</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L584" class="lines-num"><span id="L584" data-line-number="584"></span></td>
							
							<td rel="L584" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L585" class="lines-num"><span id="L585" data-line-number="585"></span></td>
							
							<td rel="L585" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L586" class="lines-num"><span id="L586" data-line-number="586"></span></td>
							
							<td rel="L586" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IInfluences</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L587" class="lines-num"><span id="L587" data-line-number="587"></span></td>
							
							<td rel="L587" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L588" class="lines-num"><span id="L588" data-line-number="588"></span></td>
							
							<td rel="L588" class="lines-code chroma"><code class="code-inner">    <span class="nx">LightBleeding</span>: <span class="kt">IInfluence</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L589" class="lines-num"><span id="L589" data-line-number="589"></span></td>
							
							<td rel="L589" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeavyBleeding</span>: <span class="kt">IInfluence</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L590" class="lines-num"><span id="L590" data-line-number="590"></span></td>
							
							<td rel="L590" class="lines-code chroma"><code class="code-inner">    <span class="nx">Fracture</span>: <span class="kt">IInfluence</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L591" class="lines-num"><span id="L591" data-line-number="591"></span></td>
							
							<td rel="L591" class="lines-code chroma"><code class="code-inner">    <span class="nx">RadExposure</span>: <span class="kt">IInfluence</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L592" class="lines-num"><span id="L592" data-line-number="592"></span></td>
							
							<td rel="L592" class="lines-code chroma"><code class="code-inner">    <span class="nx">Intoxication</span>: <span class="kt">IInfluence</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L593" class="lines-num"><span id="L593" data-line-number="593"></span></td>
							
							<td rel="L593" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L594" class="lines-num"><span id="L594" data-line-number="594"></span></td>
							
							<td rel="L594" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L595" class="lines-num"><span id="L595" data-line-number="595"></span></td>
							
							<td rel="L595" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IInfluence</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L596" class="lines-num"><span id="L596" data-line-number="596"></span></td>
							
							<td rel="L596" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L597" class="lines-num"><span id="L597" data-line-number="597"></span></td>
							
							<td rel="L597" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthSlowDownPercentage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L598" class="lines-num"><span id="L598" data-line-number="598"></span></td>
							
							<td rel="L598" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergySlowDownPercentage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L599" class="lines-num"><span id="L599" data-line-number="599"></span></td>
							
							<td rel="L599" class="lines-code chroma"><code class="code-inner">    <span class="nx">HydrationSlowDownPercentage</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L600" class="lines-num"><span id="L600" data-line-number="600"></span></td>
							
							<td rel="L600" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L601" class="lines-num"><span id="L601" data-line-number="601"></span></td>
							
							<td rel="L601" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L602" class="lines-num"><span id="L602" data-line-number="602"></span></td>
							
							<td rel="L602" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWound</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L603" class="lines-num"><span id="L603" data-line-number="603"></span></td>
							
							<td rel="L603" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L604" class="lines-num"><span id="L604" data-line-number="604"></span></td>
							
							<td rel="L604" class="lines-code chroma"><code class="code-inner">    <span class="nx">WorkingTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L605" class="lines-num"><span id="L605" data-line-number="605"></span></td>
							
							<td rel="L605" class="lines-code chroma"><code class="code-inner">    <span class="nx">ThresholdMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L606" class="lines-num"><span id="L606" data-line-number="606"></span></td>
							
							<td rel="L606" class="lines-code chroma"><code class="code-inner">    <span class="nx">ThresholdMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L607" class="lines-num"><span id="L607" data-line-number="607"></span></td>
							
							<td rel="L607" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L608" class="lines-num"><span id="L608" data-line-number="608"></span></td>
							
							<td rel="L608" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L609" class="lines-num"><span id="L609" data-line-number="609"></span></td>
							
							<td rel="L609" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBerserk</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L610" class="lines-num"><span id="L610" data-line-number="610"></span></td>
							
							<td rel="L610" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L611" class="lines-num"><span id="L611" data-line-number="611"></span></td>
							
							<td rel="L611" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L612" class="lines-num"><span id="L612" data-line-number="612"></span></td>
							
							<td rel="L612" class="lines-code chroma"><code class="code-inner">    <span class="nx">WorkingTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L613" class="lines-num"><span id="L613" data-line-number="613"></span></td>
							
							<td rel="L613" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L614" class="lines-num"><span id="L614" data-line-number="614"></span></td>
							
							<td rel="L614" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L615" class="lines-num"><span id="L615" data-line-number="615"></span></td>
							
							<td rel="L615" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L616" class="lines-num"><span id="L616" data-line-number="616"></span></td>
							
							<td rel="L616" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IFlash</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L617" class="lines-num"><span id="L617" data-line-number="617"></span></td>
							
							<td rel="L617" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L618" class="lines-num"><span id="L618" data-line-number="618"></span></td>
							
							<td rel="L618" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dummy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L619" class="lines-num"><span id="L619" data-line-number="619"></span></td>
							
							<td rel="L619" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L620" class="lines-num"><span id="L620" data-line-number="620"></span></td>
							
							<td rel="L620" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L621" class="lines-num"><span id="L621" data-line-number="621"></span></td>
							
							<td rel="L621" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMedEffect</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L622" class="lines-num"><span id="L622" data-line-number="622"></span></td>
							
							<td rel="L622" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L623" class="lines-num"><span id="L623" data-line-number="623"></span></td>
							
							<td rel="L623" class="lines-code chroma"><code class="code-inner">    <span class="nx">LoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L624" class="lines-num"><span id="L624" data-line-number="624"></span></td>
							
							<td rel="L624" class="lines-code chroma"><code class="code-inner">    <span class="nx">StartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L625" class="lines-num"><span id="L625" data-line-number="625"></span></td>
							
							<td rel="L625" class="lines-code chroma"><code class="code-inner">    <span class="nx">DrinkStartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L626" class="lines-num"><span id="L626" data-line-number="626"></span></td>
							
							<td rel="L626" class="lines-code chroma"><code class="code-inner">    <span class="nx">FoodStartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L627" class="lines-num"><span id="L627" data-line-number="627"></span></td>
							
							<td rel="L627" class="lines-code chroma"><code class="code-inner">    <span class="nx">DrugsStartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L628" class="lines-num"><span id="L628" data-line-number="628"></span></td>
							
							<td rel="L628" class="lines-code chroma"><code class="code-inner">    <span class="nx">MedKitStartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L629" class="lines-num"><span id="L629" data-line-number="629"></span></td>
							
							<td rel="L629" class="lines-code chroma"><code class="code-inner">    <span class="nx">MedicalStartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L630" class="lines-num"><span id="L630" data-line-number="630"></span></td>
							
							<td rel="L630" class="lines-code chroma"><code class="code-inner">    <span class="nx">StimulatorStartDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L631" class="lines-num"><span id="L631" data-line-number="631"></span></td>
							
							<td rel="L631" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L632" class="lines-num"><span id="L632" data-line-number="632"></span></td>
							
							<td rel="L632" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L633" class="lines-num"><span id="L633" data-line-number="633"></span></td>
							
							<td rel="L633" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IPain</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L634" class="lines-num"><span id="L634" data-line-number="634"></span></td>
							
							<td rel="L634" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L635" class="lines-num"><span id="L635" data-line-number="635"></span></td>
							
							<td rel="L635" class="lines-code chroma"><code class="code-inner">    <span class="nx">TremorDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L636" class="lines-num"><span id="L636" data-line-number="636"></span></td>
							
							<td rel="L636" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealExperience</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L637" class="lines-num"><span id="L637" data-line-number="637"></span></td>
							
							<td rel="L637" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L638" class="lines-num"><span id="L638" data-line-number="638"></span></td>
							
							<td rel="L638" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L639" class="lines-num"><span id="L639" data-line-number="639"></span></td>
							
							<td rel="L639" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IPainKiller</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L640" class="lines-num"><span id="L640" data-line-number="640"></span></td>
							
							<td rel="L640" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L641" class="lines-num"><span id="L641" data-line-number="641"></span></td>
							
							<td rel="L641" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dummy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L642" class="lines-num"><span id="L642" data-line-number="642"></span></td>
							
							<td rel="L642" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L643" class="lines-num"><span id="L643" data-line-number="643"></span></td>
							
							<td rel="L643" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L644" class="lines-num"><span id="L644" data-line-number="644"></span></td>
							
							<td rel="L644" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISandingScreen</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L645" class="lines-num"><span id="L645" data-line-number="645"></span></td>
							
							<td rel="L645" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L646" class="lines-num"><span id="L646" data-line-number="646"></span></td>
							
							<td rel="L646" class="lines-code chroma"><code class="code-inner">    <span class="nx">Dummy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L647" class="lines-num"><span id="L647" data-line-number="647"></span></td>
							
							<td rel="L647" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L648" class="lines-num"><span id="L648" data-line-number="648"></span></td>
							
							<td rel="L648" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L649" class="lines-num"><span id="L649" data-line-number="649"></span></td>
							
							<td rel="L649" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMusclePainEffect</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L650" class="lines-num"><span id="L650" data-line-number="650"></span></td>
							
							<td rel="L650" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L651" class="lines-num"><span id="L651" data-line-number="651"></span></td>
							
							<td rel="L651" class="lines-code chroma"><code class="code-inner">    <span class="nx">GymEffectivity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L652" class="lines-num"><span id="L652" data-line-number="652"></span></td>
							
							<td rel="L652" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L653" class="lines-num"><span id="L653" data-line-number="653"></span></td>
							
							<td rel="L653" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L654" class="lines-num"><span id="L654" data-line-number="654"></span></td>
							
							<td rel="L654" class="lines-code chroma"><code class="code-inner">    <span class="nx">TraumaChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L655" class="lines-num"><span id="L655" data-line-number="655"></span></td>
							
							<td rel="L655" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L656" class="lines-num"><span id="L656" data-line-number="656"></span></td>
							
							<td rel="L656" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L657" class="lines-num"><span id="L657" data-line-number="657"></span></td>
							
							<td rel="L657" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStimulator</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L658" class="lines-num"><span id="L658" data-line-number="658"></span></td>
							
							<td rel="L658" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L659" class="lines-num"><span id="L659" data-line-number="659"></span></td>
							
							<td rel="L659" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L660" class="lines-num"><span id="L660" data-line-number="660"></span></td>
							
							<td rel="L660" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs</span>: <span class="kt">IBuffs</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L661" class="lines-num"><span id="L661" data-line-number="661"></span></td>
							
							<td rel="L661" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L662" class="lines-num"><span id="L662" data-line-number="662"></span></td>
							
							<td rel="L662" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L663" class="lines-num"><span id="L663" data-line-number="663"></span></td>
							
							<td rel="L663" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBuffs</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L664" class="lines-num"><span id="L664" data-line-number="664"></span></td>
							
							<td rel="L664" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L665" class="lines-num"><span id="L665" data-line-number="665"></span></td>
							
							<td rel="L665" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffsSJ1TGLabs</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L666" class="lines-num"><span id="L666" data-line-number="666"></span></td>
							
							<td rel="L666" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffsSJ6TGLabs</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L667" class="lines-num"><span id="L667" data-line-number="667"></span></td>
							
							<td rel="L667" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffsPropital</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L668" class="lines-num"><span id="L668" data-line-number="668"></span></td>
							
							<td rel="L668" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffsZagustin</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L669" class="lines-num"><span id="L669" data-line-number="669"></span></td>
							
							<td rel="L669" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffseTGchange</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L670" class="lines-num"><span id="L670" data-line-number="670"></span></td>
							
							<td rel="L670" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffsAdrenaline</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L671" class="lines-num"><span id="L671" data-line-number="671"></span></td>
							
							<td rel="L671" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffsGoldenStarBalm</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L672" class="lines-num"><span id="L672" data-line-number="672"></span></td>
							
							<td rel="L672" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_aquamari</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L673" class="lines-num"><span id="L673" data-line-number="673"></span></td>
							
							<td rel="L673" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_maxenergy</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L674" class="lines-num"><span id="L674" data-line-number="674"></span></td>
							
							<td rel="L674" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_milk</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L675" class="lines-num"><span id="L675" data-line-number="675"></span></td>
							
							<td rel="L675" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_tarcola</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L676" class="lines-num"><span id="L676" data-line-number="676"></span></td>
							
							<td rel="L676" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_hotrod</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L677" class="lines-num"><span id="L677" data-line-number="677"></span></td>
							
							<td rel="L677" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_juice_army</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L678" class="lines-num"><span id="L678" data-line-number="678"></span></td>
							
							<td rel="L678" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_water</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L679" class="lines-num"><span id="L679" data-line-number="679"></span></td>
							
							<td rel="L679" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_borodinskiye</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L680" class="lines-num"><span id="L680" data-line-number="680"></span></td>
							
							<td rel="L680" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_condensed_milk</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L681" class="lines-num"><span id="L681" data-line-number="681"></span></td>
							
							<td rel="L681" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_emelya</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L682" class="lines-num"><span id="L682" data-line-number="682"></span></td>
							
							<td rel="L682" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_mayonez</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L683" class="lines-num"><span id="L683" data-line-number="683"></span></td>
							
							<td rel="L683" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_mre</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L684" class="lines-num"><span id="L684" data-line-number="684"></span></td>
							
							<td rel="L684" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_sugar</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L685" class="lines-num"><span id="L685" data-line-number="685"></span></td>
							
							<td rel="L685" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_vodka</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L686" class="lines-num"><span id="L686" data-line-number="686"></span></td>
							
							<td rel="L686" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_jack</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L687" class="lines-num"><span id="L687" data-line-number="687"></span></td>
							
							<td rel="L687" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_moonshine</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L688" class="lines-num"><span id="L688" data-line-number="688"></span></td>
							
							<td rel="L688" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_purewater</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L689" class="lines-num"><span id="L689" data-line-number="689"></span></td>
							
							<td rel="L689" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_3bTG</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L690" class="lines-num"><span id="L690" data-line-number="690"></span></td>
							
							<td rel="L690" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_AHF1M</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L691" class="lines-num"><span id="L691" data-line-number="691"></span></td>
							
							<td rel="L691" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_L1</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L692" class="lines-num"><span id="L692" data-line-number="692"></span></td>
							
							<td rel="L692" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_MULE</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L693" class="lines-num"><span id="L693" data-line-number="693"></span></td>
							
							<td rel="L693" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_Meldonin</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L694" class="lines-num"><span id="L694" data-line-number="694"></span></td>
							
							<td rel="L694" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_Obdolbos</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L695" class="lines-num"><span id="L695" data-line-number="695"></span></td>
							
							<td rel="L695" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_P22</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L696" class="lines-num"><span id="L696" data-line-number="696"></span></td>
							
							<td rel="L696" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_KultistsToxin</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L697" class="lines-num"><span id="L697" data-line-number="697"></span></td>
							
							<td rel="L697" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_BodyTemperature</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L698" class="lines-num"><span id="L698" data-line-number="698"></span></td>
							
							<td rel="L698" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_Antidote</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L699" class="lines-num"><span id="L699" data-line-number="699"></span></td>
							
							<td rel="L699" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_melee_bleed</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L700" class="lines-num"><span id="L700" data-line-number="700"></span></td>
							
							<td rel="L700" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_melee_blunt</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L701" class="lines-num"><span id="L701" data-line-number="701"></span></td>
							
							<td rel="L701" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_hultafors</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L702" class="lines-num"><span id="L702" data-line-number="702"></span></td>
							
							<td rel="L702" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_drink_vodka_BAD</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L703" class="lines-num"><span id="L703" data-line-number="703"></span></td>
							
							<td rel="L703" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_alyonka</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L704" class="lines-num"><span id="L704" data-line-number="704"></span></td>
							
							<td rel="L704" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_food_slippers</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L705" class="lines-num"><span id="L705" data-line-number="705"></span></td>
							
							<td rel="L705" class="lines-code chroma"><code class="code-inner">    <span class="nx">Buffs_knife</span>: <span class="kt">IBuff</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L706" class="lines-num"><span id="L706" data-line-number="706"></span></td>
							
							<td rel="L706" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L707" class="lines-num"><span id="L707" data-line-number="707"></span></td>
							
							<td rel="L707" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L708" class="lines-num"><span id="L708" data-line-number="708"></span></td>
							
							<td rel="L708" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBuff</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L709" class="lines-num"><span id="L709" data-line-number="709"></span></td>
							
							<td rel="L709" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L710" class="lines-num"><span id="L710" data-line-number="710"></span></td>
							
							<td rel="L710" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffType</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L711" class="lines-num"><span id="L711" data-line-number="711"></span></td>
							
							<td rel="L711" class="lines-code chroma"><code class="code-inner">    <span class="nx">Chance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L712" class="lines-num"><span id="L712" data-line-number="712"></span></td>
							
							<td rel="L712" class="lines-code chroma"><code class="code-inner">    <span class="nx">Delay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L713" class="lines-num"><span id="L713" data-line-number="713"></span></td>
							
							<td rel="L713" class="lines-code chroma"><code class="code-inner">    <span class="nx">Duration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L714" class="lines-num"><span id="L714" data-line-number="714"></span></td>
							
							<td rel="L714" class="lines-code chroma"><code class="code-inner">    <span class="nx">Value</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L715" class="lines-num"><span id="L715" data-line-number="715"></span></td>
							
							<td rel="L715" class="lines-code chroma"><code class="code-inner">    <span class="nx">AbsoluteValue</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L716" class="lines-num"><span id="L716" data-line-number="716"></span></td>
							
							<td rel="L716" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillName</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L717" class="lines-num"><span id="L717" data-line-number="717"></span></td>
							
							<td rel="L717" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L718" class="lines-num"><span id="L718" data-line-number="718"></span></td>
							
							<td rel="L718" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L719" class="lines-num"><span id="L719" data-line-number="719"></span></td>
							
							<td rel="L719" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ITremor</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L720" class="lines-num"><span id="L720" data-line-number="720"></span></td>
							
							<td rel="L720" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L721" class="lines-num"><span id="L721" data-line-number="721"></span></td>
							
							<td rel="L721" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L722" class="lines-num"><span id="L722" data-line-number="722"></span></td>
							
							<td rel="L722" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L723" class="lines-num"><span id="L723" data-line-number="723"></span></td>
							
							<td rel="L723" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L724" class="lines-num"><span id="L724" data-line-number="724"></span></td>
							
							<td rel="L724" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L725" class="lines-num"><span id="L725" data-line-number="725"></span></td>
							
							<td rel="L725" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IChronicStaminaFatigue</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L726" class="lines-num"><span id="L726" data-line-number="726"></span></td>
							
							<td rel="L726" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L727" class="lines-num"><span id="L727" data-line-number="727"></span></td>
							
							<td rel="L727" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L728" class="lines-num"><span id="L728" data-line-number="728"></span></td>
							
							<td rel="L728" class="lines-code chroma"><code class="code-inner">    <span class="nx">WorkingTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L729" class="lines-num"><span id="L729" data-line-number="729"></span></td>
							
							<td rel="L729" class="lines-code chroma"><code class="code-inner">    <span class="nx">TicksEvery</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L730" class="lines-num"><span id="L730" data-line-number="730"></span></td>
							
							<td rel="L730" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyRatePerStack</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L731" class="lines-num"><span id="L731" data-line-number="731"></span></td>
							
							<td rel="L731" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L732" class="lines-num"><span id="L732" data-line-number="732"></span></td>
							
							<td rel="L732" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L733" class="lines-num"><span id="L733" data-line-number="733"></span></td>
							
							<td rel="L733" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IFracture</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L734" class="lines-num"><span id="L734" data-line-number="734"></span></td>
							
							<td rel="L734" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L735" class="lines-num"><span id="L735" data-line-number="735"></span></td>
							
							<td rel="L735" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L736" class="lines-num"><span id="L736" data-line-number="736"></span></td>
							
							<td rel="L736" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L737" class="lines-num"><span id="L737" data-line-number="737"></span></td>
							
							<td rel="L737" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealExperience</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L738" class="lines-num"><span id="L738" data-line-number="738"></span></td>
							
							<td rel="L738" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L739" class="lines-num"><span id="L739" data-line-number="739"></span></td>
							
							<td rel="L739" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L740" class="lines-num"><span id="L740" data-line-number="740"></span></td>
							
							<td rel="L740" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovePrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L741" class="lines-num"><span id="L741" data-line-number="741"></span></td>
							
							<td rel="L741" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovedAfterDeath</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L742" class="lines-num"><span id="L742" data-line-number="742"></span></td>
							
							<td rel="L742" class="lines-code chroma"><code class="code-inner">    <span class="nx">BulletHitProbability</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L743" class="lines-num"><span id="L743" data-line-number="743"></span></td>
							
							<td rel="L743" class="lines-code chroma"><code class="code-inner">    <span class="nx">FallingProbability</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L744" class="lines-num"><span id="L744" data-line-number="744"></span></td>
							
							<td rel="L744" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L745" class="lines-num"><span id="L745" data-line-number="745"></span></td>
							
							<td rel="L745" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L746" class="lines-num"><span id="L746" data-line-number="746"></span></td>
							
							<td rel="L746" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHeavyBleeding</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L747" class="lines-num"><span id="L747" data-line-number="747"></span></td>
							
							<td rel="L747" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L748" class="lines-num"><span id="L748" data-line-number="748"></span></td>
							
							<td rel="L748" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L749" class="lines-num"><span id="L749" data-line-number="749"></span></td>
							
							<td rel="L749" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L750" class="lines-num"><span id="L750" data-line-number="750"></span></td>
							
							<td rel="L750" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageEnergy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L751" class="lines-num"><span id="L751" data-line-number="751"></span></td>
							
							<td rel="L751" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L752" class="lines-num"><span id="L752" data-line-number="752"></span></td>
							
							<td rel="L752" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L753" class="lines-num"><span id="L753" data-line-number="753"></span></td>
							
							<td rel="L753" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L754" class="lines-num"><span id="L754" data-line-number="754"></span></td>
							
							<td rel="L754" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageHealthDehydrated</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L755" class="lines-num"><span id="L755" data-line-number="755"></span></td>
							
							<td rel="L755" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthLoopTimeDehydrated</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L756" class="lines-num"><span id="L756" data-line-number="756"></span></td>
							
							<td rel="L756" class="lines-code chroma"><code class="code-inner">    <span class="nx">LifeTimeDehydrated</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L757" class="lines-num"><span id="L757" data-line-number="757"></span></td>
							
							<td rel="L757" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteVitalityDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L758" class="lines-num"><span id="L758" data-line-number="758"></span></td>
							
							<td rel="L758" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealExperience</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L759" class="lines-num"><span id="L759" data-line-number="759"></span></td>
							
							<td rel="L759" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L760" class="lines-num"><span id="L760" data-line-number="760"></span></td>
							
							<td rel="L760" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L761" class="lines-num"><span id="L761" data-line-number="761"></span></td>
							
							<td rel="L761" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovePrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L762" class="lines-num"><span id="L762" data-line-number="762"></span></td>
							
							<td rel="L762" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovedAfterDeath</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L763" class="lines-num"><span id="L763" data-line-number="763"></span></td>
							
							<td rel="L763" class="lines-code chroma"><code class="code-inner">    <span class="nx">Probability</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L764" class="lines-num"><span id="L764" data-line-number="764"></span></td>
							
							<td rel="L764" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L765" class="lines-num"><span id="L765" data-line-number="765"></span></td>
							
							<td rel="L765" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L766" class="lines-num"><span id="L766" data-line-number="766"></span></td>
							
							<td rel="L766" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IProbability</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L767" class="lines-num"><span id="L767" data-line-number="767"></span></td>
							
							<td rel="L767" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L768" class="lines-num"><span id="L768" data-line-number="768"></span></td>
							
							<td rel="L768" class="lines-code chroma"><code class="code-inner">    <span class="nx">FunctionType</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L769" class="lines-num"><span id="L769" data-line-number="769"></span></td>
							
							<td rel="L769" class="lines-code chroma"><code class="code-inner">    <span class="nx">K</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L770" class="lines-num"><span id="L770" data-line-number="770"></span></td>
							
							<td rel="L770" class="lines-code chroma"><code class="code-inner">    <span class="nx">B</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L771" class="lines-num"><span id="L771" data-line-number="771"></span></td>
							
							<td rel="L771" class="lines-code chroma"><code class="code-inner">    <span class="nx">Threshold</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L772" class="lines-num"><span id="L772" data-line-number="772"></span></td>
							
							<td rel="L772" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L773" class="lines-num"><span id="L773" data-line-number="773"></span></td>
							
							<td rel="L773" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L774" class="lines-num"><span id="L774" data-line-number="774"></span></td>
							
							<td rel="L774" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILightBleeding</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L775" class="lines-num"><span id="L775" data-line-number="775"></span></td>
							
							<td rel="L775" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L776" class="lines-num"><span id="L776" data-line-number="776"></span></td>
							
							<td rel="L776" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultDelay</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L777" class="lines-num"><span id="L777" data-line-number="777"></span></td>
							
							<td rel="L777" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L778" class="lines-num"><span id="L778" data-line-number="778"></span></td>
							
							<td rel="L778" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageEnergy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L779" class="lines-num"><span id="L779" data-line-number="779"></span></td>
							
							<td rel="L779" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageHealth</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L780" class="lines-num"><span id="L780" data-line-number="780"></span></td>
							
							<td rel="L780" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L781" class="lines-num"><span id="L781" data-line-number="781"></span></td>
							
							<td rel="L781" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthLoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L782" class="lines-num"><span id="L782" data-line-number="782"></span></td>
							
							<td rel="L782" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageHealthDehydrated</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L783" class="lines-num"><span id="L783" data-line-number="783"></span></td>
							
							<td rel="L783" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthLoopTimeDehydrated</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L784" class="lines-num"><span id="L784" data-line-number="784"></span></td>
							
							<td rel="L784" class="lines-code chroma"><code class="code-inner">    <span class="nx">LifeTimeDehydrated</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L785" class="lines-num"><span id="L785" data-line-number="785"></span></td>
							
							<td rel="L785" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteVitalityDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L786" class="lines-num"><span id="L786" data-line-number="786"></span></td>
							
							<td rel="L786" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealExperience</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L787" class="lines-num"><span id="L787" data-line-number="787"></span></td>
							
							<td rel="L787" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L788" class="lines-num"><span id="L788" data-line-number="788"></span></td>
							
							<td rel="L788" class="lines-code chroma"><code class="code-inner">    <span class="nx">OfflineDurationMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L789" class="lines-num"><span id="L789" data-line-number="789"></span></td>
							
							<td rel="L789" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovePrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L790" class="lines-num"><span id="L790" data-line-number="790"></span></td>
							
							<td rel="L790" class="lines-code chroma"><code class="code-inner">    <span class="nx">RemovedAfterDeath</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L791" class="lines-num"><span id="L791" data-line-number="791"></span></td>
							
							<td rel="L791" class="lines-code chroma"><code class="code-inner">    <span class="nx">Probability</span>: <span class="kt">IProbability</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L792" class="lines-num"><span id="L792" data-line-number="792"></span></td>
							
							<td rel="L792" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L793" class="lines-num"><span id="L793" data-line-number="793"></span></td>
							
							<td rel="L793" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L794" class="lines-num"><span id="L794" data-line-number="794"></span></td>
							
							<td rel="L794" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBodyTemperature</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L795" class="lines-num"><span id="L795" data-line-number="795"></span></td>
							
							<td rel="L795" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L796" class="lines-num"><span id="L796" data-line-number="796"></span></td>
							
							<td rel="L796" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultBuildUpTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L797" class="lines-num"><span id="L797" data-line-number="797"></span></td>
							
							<td rel="L797" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultResidueTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L798" class="lines-num"><span id="L798" data-line-number="798"></span></td>
							
							<td rel="L798" class="lines-code chroma"><code class="code-inner">    <span class="nx">LoopTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L799" class="lines-num"><span id="L799" data-line-number="799"></span></td>
							
							<td rel="L799" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L800" class="lines-num"><span id="L800" data-line-number="800"></span></td>
							
							<td rel="L800" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L801" class="lines-num"><span id="L801" data-line-number="801"></span></td>
							
							<td rel="L801" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHealPrice</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L802" class="lines-num"><span id="L802" data-line-number="802"></span></td>
							
							<td rel="L802" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L803" class="lines-num"><span id="L803" data-line-number="803"></span></td>
							
							<td rel="L803" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthPointPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L804" class="lines-num"><span id="L804" data-line-number="804"></span></td>
							
							<td rel="L804" class="lines-code chroma"><code class="code-inner">    <span class="nx">HydrationPointPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L805" class="lines-num"><span id="L805" data-line-number="805"></span></td>
							
							<td rel="L805" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyPointPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L806" class="lines-num"><span id="L806" data-line-number="806"></span></td>
							
							<td rel="L806" class="lines-code chroma"><code class="code-inner">    <span class="nx">TrialLevels</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L807" class="lines-num"><span id="L807" data-line-number="807"></span></td>
							
							<td rel="L807" class="lines-code chroma"><code class="code-inner">    <span class="nx">TrialRaids</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L808" class="lines-num"><span id="L808" data-line-number="808"></span></td>
							
							<td rel="L808" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L809" class="lines-num"><span id="L809" data-line-number="809"></span></td>
							
							<td rel="L809" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L810" class="lines-num"><span id="L810" data-line-number="810"></span></td>
							
							<td rel="L810" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IProfileHealthSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L811" class="lines-num"><span id="L811" data-line-number="811"></span></td>
							
							<td rel="L811" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L812" class="lines-num"><span id="L812" data-line-number="812"></span></td>
							
							<td rel="L812" class="lines-code chroma"><code class="code-inner">    <span class="nx">BodyPartsSettings</span>: <span class="kt">IBodyPartsSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L813" class="lines-num"><span id="L813" data-line-number="813"></span></td>
							
							<td rel="L813" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthFactorsSettings</span>: <span class="kt">IHealthFactorsSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L814" class="lines-num"><span id="L814" data-line-number="814"></span></td>
							
							<td rel="L814" class="lines-code chroma"><code class="code-inner">    <span class="nx">DefaultStimulatorBuff</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L815" class="lines-num"><span id="L815" data-line-number="815"></span></td>
							
							<td rel="L815" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L816" class="lines-num"><span id="L816" data-line-number="816"></span></td>
							
							<td rel="L816" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L817" class="lines-num"><span id="L817" data-line-number="817"></span></td>
							
							<td rel="L817" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBodyPartsSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L818" class="lines-num"><span id="L818" data-line-number="818"></span></td>
							
							<td rel="L818" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L819" class="lines-num"><span id="L819" data-line-number="819"></span></td>
							
							<td rel="L819" class="lines-code chroma"><code class="code-inner">    <span class="nx">Head</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L820" class="lines-num"><span id="L820" data-line-number="820"></span></td>
							
							<td rel="L820" class="lines-code chroma"><code class="code-inner">    <span class="nx">Chest</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L821" class="lines-num"><span id="L821" data-line-number="821"></span></td>
							
							<td rel="L821" class="lines-code chroma"><code class="code-inner">    <span class="nx">Stomach</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L822" class="lines-num"><span id="L822" data-line-number="822"></span></td>
							
							<td rel="L822" class="lines-code chroma"><code class="code-inner">    <span class="nx">LeftArm</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L823" class="lines-num"><span id="L823" data-line-number="823"></span></td>
							
							<td rel="L823" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightArm</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L824" class="lines-num"><span id="L824" data-line-number="824"></span></td>
							
							<td rel="L824" class="lines-code chroma"><code class="code-inner">    <span class="nx">LeftLeg</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L825" class="lines-num"><span id="L825" data-line-number="825"></span></td>
							
							<td rel="L825" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightLeg</span>: <span class="kt">IBodyPartsSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L826" class="lines-num"><span id="L826" data-line-number="826"></span></td>
							
							<td rel="L826" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L827" class="lines-num"><span id="L827" data-line-number="827"></span></td>
							
							<td rel="L827" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L828" class="lines-num"><span id="L828" data-line-number="828"></span></td>
							
							<td rel="L828" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBodyPartsSetting</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L829" class="lines-num"><span id="L829" data-line-number="829"></span></td>
							
							<td rel="L829" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L830" class="lines-num"><span id="L830" data-line-number="830"></span></td>
							
							<td rel="L830" class="lines-code chroma"><code class="code-inner">    <span class="nx">Minimum</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L831" class="lines-num"><span id="L831" data-line-number="831"></span></td>
							
							<td rel="L831" class="lines-code chroma"><code class="code-inner">    <span class="nx">Maximum</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L832" class="lines-num"><span id="L832" data-line-number="832"></span></td>
							
							<td rel="L832" class="lines-code chroma"><code class="code-inner">    <span class="nx">Default</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L833" class="lines-num"><span id="L833" data-line-number="833"></span></td>
							
							<td rel="L833" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnvironmentDamageMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L834" class="lines-num"><span id="L834" data-line-number="834"></span></td>
							
							<td rel="L834" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverDamageReceivedMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L835" class="lines-num"><span id="L835" data-line-number="835"></span></td>
							
							<td rel="L835" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L836" class="lines-num"><span id="L836" data-line-number="836"></span></td>
							
							<td rel="L836" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L837" class="lines-num"><span id="L837" data-line-number="837"></span></td>
							
							<td rel="L837" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHealthFactorsSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L838" class="lines-num"><span id="L838" data-line-number="838"></span></td>
							
							<td rel="L838" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L839" class="lines-num"><span id="L839" data-line-number="839"></span></td>
							
							<td rel="L839" class="lines-code chroma"><code class="code-inner">    <span class="nx">Energy</span>: <span class="kt">IHealthFactorSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L840" class="lines-num"><span id="L840" data-line-number="840"></span></td>
							
							<td rel="L840" class="lines-code chroma"><code class="code-inner">    <span class="nx">Hydration</span>: <span class="kt">IHealthFactorSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L841" class="lines-num"><span id="L841" data-line-number="841"></span></td>
							
							<td rel="L841" class="lines-code chroma"><code class="code-inner">    <span class="nx">Temperature</span>: <span class="kt">IHealthFactorSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L842" class="lines-num"><span id="L842" data-line-number="842"></span></td>
							
							<td rel="L842" class="lines-code chroma"><code class="code-inner">    <span class="nx">Poisoning</span>: <span class="kt">IHealthFactorSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L843" class="lines-num"><span id="L843" data-line-number="843"></span></td>
							
							<td rel="L843" class="lines-code chroma"><code class="code-inner">    <span class="nx">Radiation</span>: <span class="kt">IHealthFactorSetting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L844" class="lines-num"><span id="L844" data-line-number="844"></span></td>
							
							<td rel="L844" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L845" class="lines-num"><span id="L845" data-line-number="845"></span></td>
							
							<td rel="L845" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L846" class="lines-num"><span id="L846" data-line-number="846"></span></td>
							
							<td rel="L846" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHealthFactorSetting</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L847" class="lines-num"><span id="L847" data-line-number="847"></span></td>
							
							<td rel="L847" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L848" class="lines-num"><span id="L848" data-line-number="848"></span></td>
							
							<td rel="L848" class="lines-code chroma"><code class="code-inner">    <span class="nx">Minimum</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L849" class="lines-num"><span id="L849" data-line-number="849"></span></td>
							
							<td rel="L849" class="lines-code chroma"><code class="code-inner">    <span class="nx">Maximum</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L850" class="lines-num"><span id="L850" data-line-number="850"></span></td>
							
							<td rel="L850" class="lines-code chroma"><code class="code-inner">    <span class="nx">Default</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L851" class="lines-num"><span id="L851" data-line-number="851"></span></td>
							
							<td rel="L851" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L852" class="lines-num"><span id="L852" data-line-number="852"></span></td>
							
							<td rel="L852" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L853" class="lines-num"><span id="L853" data-line-number="853"></span></td>
							
							<td rel="L853" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRating</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L854" class="lines-num"><span id="L854" data-line-number="854"></span></td>
							
							<td rel="L854" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L855" class="lines-num"><span id="L855" data-line-number="855"></span></td>
							
							<td rel="L855" class="lines-code chroma"><code class="code-inner">    <span class="nx">levelRequired</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L856" class="lines-num"><span id="L856" data-line-number="856"></span></td>
							
							<td rel="L856" class="lines-code chroma"><code class="code-inner">    <span class="nx">limit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L857" class="lines-num"><span id="L857" data-line-number="857"></span></td>
							
							<td rel="L857" class="lines-code chroma"><code class="code-inner">    <span class="nx">categories</span>: <span class="kt">ICategories</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L858" class="lines-num"><span id="L858" data-line-number="858"></span></td>
							
							<td rel="L858" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L859" class="lines-num"><span id="L859" data-line-number="859"></span></td>
							
							<td rel="L859" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L860" class="lines-num"><span id="L860" data-line-number="860"></span></td>
							
							<td rel="L860" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICategories</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L861" class="lines-num"><span id="L861" data-line-number="861"></span></td>
							
							<td rel="L861" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L862" class="lines-num"><span id="L862" data-line-number="862"></span></td>
							
							<td rel="L862" class="lines-code chroma"><code class="code-inner">    <span class="nx">experience</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L863" class="lines-num"><span id="L863" data-line-number="863"></span></td>
							
							<td rel="L863" class="lines-code chroma"><code class="code-inner">    <span class="nx">kd</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L864" class="lines-num"><span id="L864" data-line-number="864"></span></td>
							
							<td rel="L864" class="lines-code chroma"><code class="code-inner">    <span class="nx">surviveRatio</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L865" class="lines-num"><span id="L865" data-line-number="865"></span></td>
							
							<td rel="L865" class="lines-code chroma"><code class="code-inner">    <span class="nx">avgEarnings</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L866" class="lines-num"><span id="L866" data-line-number="866"></span></td>
							
							<td rel="L866" class="lines-code chroma"><code class="code-inner">    <span class="nx">pmcKills</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L867" class="lines-num"><span id="L867" data-line-number="867"></span></td>
							
							<td rel="L867" class="lines-code chroma"><code class="code-inner">    <span class="nx">raidCount</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L868" class="lines-num"><span id="L868" data-line-number="868"></span></td>
							
							<td rel="L868" class="lines-code chroma"><code class="code-inner">    <span class="nx">longestShot</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L869" class="lines-num"><span id="L869" data-line-number="869"></span></td>
							
							<td rel="L869" class="lines-code chroma"><code class="code-inner">    <span class="nx">timeOnline</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L870" class="lines-num"><span id="L870" data-line-number="870"></span></td>
							
							<td rel="L870" class="lines-code chroma"><code class="code-inner">    <span class="nx">inventoryFullCost</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L871" class="lines-num"><span id="L871" data-line-number="871"></span></td>
							
							<td rel="L871" class="lines-code chroma"><code class="code-inner">    <span class="nx">ragFairStanding</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L872" class="lines-num"><span id="L872" data-line-number="872"></span></td>
							
							<td rel="L872" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L873" class="lines-num"><span id="L873" data-line-number="873"></span></td>
							
							<td rel="L873" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L874" class="lines-num"><span id="L874" data-line-number="874"></span></td>
							
							<td rel="L874" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ITournament</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L875" class="lines-num"><span id="L875" data-line-number="875"></span></td>
							
							<td rel="L875" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L876" class="lines-num"><span id="L876" data-line-number="876"></span></td>
							
							<td rel="L876" class="lines-code chroma"><code class="code-inner">    <span class="nx">categories</span>: <span class="kt">ITournamentCategories</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L877" class="lines-num"><span id="L877" data-line-number="877"></span></td>
							
							<td rel="L877" class="lines-code chroma"><code class="code-inner">    <span class="nx">limit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L878" class="lines-num"><span id="L878" data-line-number="878"></span></td>
							
							<td rel="L878" class="lines-code chroma"><code class="code-inner">    <span class="nx">levelRequired</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L879" class="lines-num"><span id="L879" data-line-number="879"></span></td>
							
							<td rel="L879" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L880" class="lines-num"><span id="L880" data-line-number="880"></span></td>
							
							<td rel="L880" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L881" class="lines-num"><span id="L881" data-line-number="881"></span></td>
							
							<td rel="L881" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ITournamentCategories</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L882" class="lines-num"><span id="L882" data-line-number="882"></span></td>
							
							<td rel="L882" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L883" class="lines-num"><span id="L883" data-line-number="883"></span></td>
							
							<td rel="L883" class="lines-code chroma"><code class="code-inner">    <span class="nx">dogtags</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L884" class="lines-num"><span id="L884" data-line-number="884"></span></td>
							
							<td rel="L884" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L885" class="lines-num"><span id="L885" data-line-number="885"></span></td>
							
							<td rel="L885" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L886" class="lines-num"><span id="L886" data-line-number="886"></span></td>
							
							<td rel="L886" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRagFair</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L887" class="lines-num"><span id="L887" data-line-number="887"></span></td>
							
							<td rel="L887" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L888" class="lines-num"><span id="L888" data-line-number="888"></span></td>
							
							<td rel="L888" class="lines-code chroma"><code class="code-inner">    <span class="nx">enabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L889" class="lines-num"><span id="L889" data-line-number="889"></span></td>
							
							<td rel="L889" class="lines-code chroma"><code class="code-inner">    <span class="nx">priceStabilizerEnabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L890" class="lines-num"><span id="L890" data-line-number="890"></span></td>
							
							<td rel="L890" class="lines-code chroma"><code class="code-inner">    <span class="nx">includePveTraderSales</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L891" class="lines-num"><span id="L891" data-line-number="891"></span></td>
							
							<td rel="L891" class="lines-code chroma"><code class="code-inner">    <span class="nx">priceStabilizerStartIntervalInHours</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L892" class="lines-num"><span id="L892" data-line-number="892"></span></td>
							
							<td rel="L892" class="lines-code chroma"><code class="code-inner">    <span class="nx">minUserLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L893" class="lines-num"><span id="L893" data-line-number="893"></span></td>
							
							<td rel="L893" class="lines-code chroma"><code class="code-inner">    <span class="nx">communityTax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L894" class="lines-num"><span id="L894" data-line-number="894"></span></td>
							
							<td rel="L894" class="lines-code chroma"><code class="code-inner">    <span class="nx">communityItemTax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L895" class="lines-num"><span id="L895" data-line-number="895"></span></td>
							
							<td rel="L895" class="lines-code chroma"><code class="code-inner">    <span class="nx">communityRequirementTax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L896" class="lines-num"><span id="L896" data-line-number="896"></span></td>
							
							<td rel="L896" class="lines-code chroma"><code class="code-inner">    <span class="nx">offerPriorityCost</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L897" class="lines-num"><span id="L897" data-line-number="897"></span></td>
							
							<td rel="L897" class="lines-code chroma"><code class="code-inner">    <span class="nx">offerDurationTimeInHour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L898" class="lines-num"><span id="L898" data-line-number="898"></span></td>
							
							<td rel="L898" class="lines-code chroma"><code class="code-inner">    <span class="nx">offerDurationTimeInHourAfterRemove</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L899" class="lines-num"><span id="L899" data-line-number="899"></span></td>
							
							<td rel="L899" class="lines-code chroma"><code class="code-inner">    <span class="nx">priorityTimeModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L900" class="lines-num"><span id="L900" data-line-number="900"></span></td>
							
							<td rel="L900" class="lines-code chroma"><code class="code-inner">    <span class="nx">maxRenewOfferTimeInHour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L901" class="lines-num"><span id="L901" data-line-number="901"></span></td>
							
							<td rel="L901" class="lines-code chroma"><code class="code-inner">    <span class="nx">renewPricePerHour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L902" class="lines-num"><span id="L902" data-line-number="902"></span></td>
							
							<td rel="L902" class="lines-code chroma"><code class="code-inner">    <span class="nx">maxActiveOfferCount</span>: <span class="kt">IMaxActiveOfferCount</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L903" class="lines-num"><span id="L903" data-line-number="903"></span></td>
							
							<td rel="L903" class="lines-code chroma"><code class="code-inner">    <span class="nx">balancerRemovePriceCoefficient</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L904" class="lines-num"><span id="L904" data-line-number="904"></span></td>
							
							<td rel="L904" class="lines-code chroma"><code class="code-inner">    <span class="nx">balancerMinPriceCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L905" class="lines-num"><span id="L905" data-line-number="905"></span></td>
							
							<td rel="L905" class="lines-code chroma"><code class="code-inner">    <span class="nx">balancerAveragePriceCoefficient</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L906" class="lines-num"><span id="L906" data-line-number="906"></span></td>
							
							<td rel="L906" class="lines-code chroma"><code class="code-inner">    <span class="nx">delaySinceOfferAdd</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L907" class="lines-num"><span id="L907" data-line-number="907"></span></td>
							
							<td rel="L907" class="lines-code chroma"><code class="code-inner">    <span class="nx">uniqueBuyerTimeoutInDays</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L908" class="lines-num"><span id="L908" data-line-number="908"></span></td>
							
							<td rel="L908" class="lines-code chroma"><code class="code-inner">    <span class="nx">ratingSumForIncrease</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L909" class="lines-num"><span id="L909" data-line-number="909"></span></td>
							
							<td rel="L909" class="lines-code chroma"><code class="code-inner">    <span class="nx">ratingIncreaseCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L910" class="lines-num"><span id="L910" data-line-number="910"></span></td>
							
							<td rel="L910" class="lines-code chroma"><code class="code-inner">    <span class="nx">ratingSumForDecrease</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L911" class="lines-num"><span id="L911" data-line-number="911"></span></td>
							
							<td rel="L911" class="lines-code chroma"><code class="code-inner">    <span class="nx">ratingDecreaseCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L912" class="lines-num"><span id="L912" data-line-number="912"></span></td>
							
							<td rel="L912" class="lines-code chroma"><code class="code-inner">    <span class="nx">maxSumForIncreaseRatingPerOneSale</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L913" class="lines-num"><span id="L913" data-line-number="913"></span></td>
							
							<td rel="L913" class="lines-code chroma"><code class="code-inner">    <span class="nx">maxSumForDecreaseRatingPerOneSale</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L914" class="lines-num"><span id="L914" data-line-number="914"></span></td>
							
							<td rel="L914" class="lines-code chroma"><code class="code-inner">    <span class="nx">maxSumForRarity</span>: <span class="kt">IMaxSumForRarity</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L915" class="lines-num"><span id="L915" data-line-number="915"></span></td>
							
							<td rel="L915" class="lines-code chroma"><code class="code-inner">    <span class="nx">ChangePriceCoef</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L916" class="lines-num"><span id="L916" data-line-number="916"></span></td>
							
							<td rel="L916" class="lines-code chroma"><code class="code-inner">    <span class="nx">balancerUserItemSaleCooldownEnabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L917" class="lines-num"><span id="L917" data-line-number="917"></span></td>
							
							<td rel="L917" class="lines-code chroma"><code class="code-inner">    <span class="nx">balancerUserItemSaleCooldown</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L918" class="lines-num"><span id="L918" data-line-number="918"></span></td>
							
							<td rel="L918" class="lines-code chroma"><code class="code-inner">    <span class="nx">youSellOfferMaxStorageTimeInHour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L919" class="lines-num"><span id="L919" data-line-number="919"></span></td>
							
							<td rel="L919" class="lines-code chroma"><code class="code-inner">    <span class="nx">yourOfferDidNotSellMaxStorageTimeInHour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L920" class="lines-num"><span id="L920" data-line-number="920"></span></td>
							
							<td rel="L920" class="lines-code chroma"><code class="code-inner">    <span class="nx">isOnlyFoundInRaidAllowed</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L921" class="lines-num"><span id="L921" data-line-number="921"></span></td>
							
							<td rel="L921" class="lines-code chroma"><code class="code-inner">    <span class="nx">sellInOnePiece</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L922" class="lines-num"><span id="L922" data-line-number="922"></span></td>
							
							<td rel="L922" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L923" class="lines-num"><span id="L923" data-line-number="923"></span></td>
							
							<td rel="L923" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L924" class="lines-num"><span id="L924" data-line-number="924"></span></td>
							
							<td rel="L924" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMaxActiveOfferCount</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L925" class="lines-num"><span id="L925" data-line-number="925"></span></td>
							
							<td rel="L925" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L926" class="lines-num"><span id="L926" data-line-number="926"></span></td>
							
							<td rel="L926" class="lines-code chroma"><code class="code-inner">    <span class="kr">from</span><span class="o">:</span> <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L927" class="lines-num"><span id="L927" data-line-number="927"></span></td>
							
							<td rel="L927" class="lines-code chroma"><code class="code-inner">    <span class="nx">to</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L928" class="lines-num"><span id="L928" data-line-number="928"></span></td>
							
							<td rel="L928" class="lines-code chroma"><code class="code-inner">    <span class="nx">count</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L929" class="lines-num"><span id="L929" data-line-number="929"></span></td>
							
							<td rel="L929" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L930" class="lines-num"><span id="L930" data-line-number="930"></span></td>
							
							<td rel="L930" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L931" class="lines-num"><span id="L931" data-line-number="931"></span></td>
							
							<td rel="L931" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMaxSumForRarity</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L932" class="lines-num"><span id="L932" data-line-number="932"></span></td>
							
							<td rel="L932" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L933" class="lines-num"><span id="L933" data-line-number="933"></span></td>
							
							<td rel="L933" class="lines-code chroma"><code class="code-inner">    <span class="nx">Common</span>: <span class="kt">IRarityMaxSum</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L934" class="lines-num"><span id="L934" data-line-number="934"></span></td>
							
							<td rel="L934" class="lines-code chroma"><code class="code-inner">    <span class="nx">Rare</span>: <span class="kt">IRarityMaxSum</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L935" class="lines-num"><span id="L935" data-line-number="935"></span></td>
							
							<td rel="L935" class="lines-code chroma"><code class="code-inner">    <span class="nx">Superrare</span>: <span class="kt">IRarityMaxSum</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L936" class="lines-num"><span id="L936" data-line-number="936"></span></td>
							
							<td rel="L936" class="lines-code chroma"><code class="code-inner">    <span class="nx">Not_exist</span>: <span class="kt">IRarityMaxSum</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L937" class="lines-num"><span id="L937" data-line-number="937"></span></td>
							
							<td rel="L937" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L938" class="lines-num"><span id="L938" data-line-number="938"></span></td>
							
							<td rel="L938" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L939" class="lines-num"><span id="L939" data-line-number="939"></span></td>
							
							<td rel="L939" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRarityMaxSum</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L940" class="lines-num"><span id="L940" data-line-number="940"></span></td>
							
							<td rel="L940" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L941" class="lines-num"><span id="L941" data-line-number="941"></span></td>
							
							<td rel="L941" class="lines-code chroma"><code class="code-inner">    <span class="nx">value</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L942" class="lines-num"><span id="L942" data-line-number="942"></span></td>
							
							<td rel="L942" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L943" class="lines-num"><span id="L943" data-line-number="943"></span></td>
							
							<td rel="L943" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L944" class="lines-num"><span id="L944" data-line-number="944"></span></td>
							
							<td rel="L944" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHandbook</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L945" class="lines-num"><span id="L945" data-line-number="945"></span></td>
							
							<td rel="L945" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L946" class="lines-num"><span id="L946" data-line-number="946"></span></td>
							
							<td rel="L946" class="lines-code chroma"><code class="code-inner">    <span class="nx">defaultCategory</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L947" class="lines-num"><span id="L947" data-line-number="947"></span></td>
							
							<td rel="L947" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L948" class="lines-num"><span id="L948" data-line-number="948"></span></td>
							
							<td rel="L948" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L949" class="lines-num"><span id="L949" data-line-number="949"></span></td>
							
							<td rel="L949" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStamina</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L950" class="lines-num"><span id="L950" data-line-number="950"></span></td>
							
							<td rel="L950" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L951" class="lines-num"><span id="L951" data-line-number="951"></span></td>
							
							<td rel="L951" class="lines-code chroma"><code class="code-inner">    <span class="nx">Capacity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L952" class="lines-num"><span id="L952" data-line-number="952"></span></td>
							
							<td rel="L952" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintDrainRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L953" class="lines-num"><span id="L953" data-line-number="953"></span></td>
							
							<td rel="L953" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseRestorationRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L954" class="lines-num"><span id="L954" data-line-number="954"></span></td>
							
							<td rel="L954" class="lines-code chroma"><code class="code-inner">    <span class="nx">JumpConsumption</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L955" class="lines-num"><span id="L955" data-line-number="955"></span></td>
							
							<td rel="L955" class="lines-code chroma"><code class="code-inner">    <span class="nx">GrenadeHighThrow</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L956" class="lines-num"><span id="L956" data-line-number="956"></span></td>
							
							<td rel="L956" class="lines-code chroma"><code class="code-inner">    <span class="nx">GrenadeLowThrow</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L957" class="lines-num"><span id="L957" data-line-number="957"></span></td>
							
							<td rel="L957" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimDrainRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L958" class="lines-num"><span id="L958" data-line-number="958"></span></td>
							
							<td rel="L958" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimRangeFinderDrainRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L959" class="lines-num"><span id="L959" data-line-number="959"></span></td>
							
							<td rel="L959" class="lines-code chroma"><code class="code-inner">    <span class="nx">OxygenCapacity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L960" class="lines-num"><span id="L960" data-line-number="960"></span></td>
							
							<td rel="L960" class="lines-code chroma"><code class="code-inner">    <span class="nx">OxygenRestoration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L961" class="lines-num"><span id="L961" data-line-number="961"></span></td>
							
							<td rel="L961" class="lines-code chroma"><code class="code-inner">    <span class="nx">WalkOverweightLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L962" class="lines-num"><span id="L962" data-line-number="962"></span></td>
							
							<td rel="L962" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseOverweightLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L963" class="lines-num"><span id="L963" data-line-number="963"></span></td>
							
							<td rel="L963" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintOverweightLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L964" class="lines-num"><span id="L964" data-line-number="964"></span></td>
							
							<td rel="L964" class="lines-code chroma"><code class="code-inner">    <span class="nx">WalkSpeedOverweightLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L965" class="lines-num"><span id="L965" data-line-number="965"></span></td>
							
							<td rel="L965" class="lines-code chroma"><code class="code-inner">    <span class="nx">CrouchConsumption</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L966" class="lines-num"><span id="L966" data-line-number="966"></span></td>
							
							<td rel="L966" class="lines-code chroma"><code class="code-inner">    <span class="nx">WalkConsumption</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L967" class="lines-num"><span id="L967" data-line-number="967"></span></td>
							
							<td rel="L967" class="lines-code chroma"><code class="code-inner">    <span class="nx">StandupConsumption</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L968" class="lines-num"><span id="L968" data-line-number="968"></span></td>
							
							<td rel="L968" class="lines-code chroma"><code class="code-inner">    <span class="nx">TransitionSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L969" class="lines-num"><span id="L969" data-line-number="969"></span></td>
							
							<td rel="L969" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintAccelerationLowerLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L970" class="lines-num"><span id="L970" data-line-number="970"></span></td>
							
							<td rel="L970" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintSpeedLowerLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L971" class="lines-num"><span id="L971" data-line-number="971"></span></td>
							
							<td rel="L971" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintSensitivityLowerLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L972" class="lines-num"><span id="L972" data-line-number="972"></span></td>
							
							<td rel="L972" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimConsumptionByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L973" class="lines-num"><span id="L973" data-line-number="973"></span></td>
							
							<td rel="L973" class="lines-code chroma"><code class="code-inner">    <span class="nx">RestorationMultiplierByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L974" class="lines-num"><span id="L974" data-line-number="974"></span></td>
							
							<td rel="L974" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverweightConsumptionByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L975" class="lines-num"><span id="L975" data-line-number="975"></span></td>
							
							<td rel="L975" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimingSpeedMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L976" class="lines-num"><span id="L976" data-line-number="976"></span></td>
							
							<td rel="L976" class="lines-code chroma"><code class="code-inner">    <span class="nx">WalkVisualEffectMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L977" class="lines-num"><span id="L977" data-line-number="977"></span></td>
							
							<td rel="L977" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponFastSwitchConsumption</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L978" class="lines-num"><span id="L978" data-line-number="978"></span></td>
							
							<td rel="L978" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandsCapacity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L979" class="lines-num"><span id="L979" data-line-number="979"></span></td>
							
							<td rel="L979" class="lines-code chroma"><code class="code-inner">    <span class="nx">HandsRestoration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L980" class="lines-num"><span id="L980" data-line-number="980"></span></td>
							
							<td rel="L980" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProneConsumption</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L981" class="lines-num"><span id="L981" data-line-number="981"></span></td>
							
							<td rel="L981" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseHoldBreathConsumption</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L982" class="lines-num"><span id="L982" data-line-number="982"></span></td>
							
							<td rel="L982" class="lines-code chroma"><code class="code-inner">    <span class="nx">SoundRadius</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L983" class="lines-num"><span id="L983" data-line-number="983"></span></td>
							
							<td rel="L983" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExhaustedMeleeSpeed</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L984" class="lines-num"><span id="L984" data-line-number="984"></span></td>
							
							<td rel="L984" class="lines-code chroma"><code class="code-inner">    <span class="nx">FatigueRestorationRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L985" class="lines-num"><span id="L985" data-line-number="985"></span></td>
							
							<td rel="L985" class="lines-code chroma"><code class="code-inner">    <span class="nx">FatigueAmountToCreateEffect</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L986" class="lines-num"><span id="L986" data-line-number="986"></span></td>
							
							<td rel="L986" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExhaustedMeleeDamageMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L987" class="lines-num"><span id="L987" data-line-number="987"></span></td>
							
							<td rel="L987" class="lines-code chroma"><code class="code-inner">    <span class="nx">FallDamageMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L988" class="lines-num"><span id="L988" data-line-number="988"></span></td>
							
							<td rel="L988" class="lines-code chroma"><code class="code-inner">    <span class="nx">SafeHeightOverweight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L989" class="lines-num"><span id="L989" data-line-number="989"></span></td>
							
							<td rel="L989" class="lines-code chroma"><code class="code-inner">    <span class="nx">SitToStandConsumption</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L990" class="lines-num"><span id="L990" data-line-number="990"></span></td>
							
							<td rel="L990" class="lines-code chroma"><code class="code-inner">    <span class="nx">StaminaExhaustionCausesJiggle</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L991" class="lines-num"><span id="L991" data-line-number="991"></span></td>
							
							<td rel="L991" class="lines-code chroma"><code class="code-inner">    <span class="nx">StaminaExhaustionStartsBreathSound</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L992" class="lines-num"><span id="L992" data-line-number="992"></span></td>
							
							<td rel="L992" class="lines-code chroma"><code class="code-inner">    <span class="nx">StaminaExhaustionRocksCamera</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L993" class="lines-num"><span id="L993" data-line-number="993"></span></td>
							
							<td rel="L993" class="lines-code chroma"><code class="code-inner">    <span class="nx">HoldBreathStaminaMultiplier</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L994" class="lines-num"><span id="L994" data-line-number="994"></span></td>
							
							<td rel="L994" class="lines-code chroma"><code class="code-inner">    <span class="nx">PoseLevelIncreaseSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L995" class="lines-num"><span id="L995" data-line-number="995"></span></td>
							
							<td rel="L995" class="lines-code chroma"><code class="code-inner">    <span class="nx">PoseLevelDecreaseSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L996" class="lines-num"><span id="L996" data-line-number="996"></span></td>
							
							<td rel="L996" class="lines-code chroma"><code class="code-inner">    <span class="nx">PoseLevelConsumptionPerNotch</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L997" class="lines-num"><span id="L997" data-line-number="997"></span></td>
							
							<td rel="L997" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L998" class="lines-num"><span id="L998" data-line-number="998"></span></td>
							
							<td rel="L998" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L999" class="lines-num"><span id="L999" data-line-number="999"></span></td>
							
							<td rel="L999" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStaminaRestoration</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1000" class="lines-num"><span id="L1000" data-line-number="1000"></span></td>
							
							<td rel="L1000" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1001" class="lines-num"><span id="L1001" data-line-number="1001"></span></td>
							
							<td rel="L1001" class="lines-code chroma"><code class="code-inner">    <span class="nx">LowerLeftPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1002" class="lines-num"><span id="L1002" data-line-number="1002"></span></td>
							
							<td rel="L1002" class="lines-code chroma"><code class="code-inner">    <span class="nx">LowerRightPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1003" class="lines-num"><span id="L1003" data-line-number="1003"></span></td>
							
							<td rel="L1003" class="lines-code chroma"><code class="code-inner">    <span class="nx">LeftPlatoPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1004" class="lines-num"><span id="L1004" data-line-number="1004"></span></td>
							
							<td rel="L1004" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightPlatoPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1005" class="lines-num"><span id="L1005" data-line-number="1005"></span></td>
							
							<td rel="L1005" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1006" class="lines-num"><span id="L1006" data-line-number="1006"></span></td>
							
							<td rel="L1006" class="lines-code chroma"><code class="code-inner">    <span class="nx">ZeroValue</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1007" class="lines-num"><span id="L1007" data-line-number="1007"></span></td>
							
							<td rel="L1007" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1008" class="lines-num"><span id="L1008" data-line-number="1008"></span></td>
							
							<td rel="L1008" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1009" class="lines-num"><span id="L1009" data-line-number="1009"></span></td>
							
							<td rel="L1009" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStaminaDrain</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1010" class="lines-num"><span id="L1010" data-line-number="1010"></span></td>
							
							<td rel="L1010" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1011" class="lines-num"><span id="L1011" data-line-number="1011"></span></td>
							
							<td rel="L1011" class="lines-code chroma"><code class="code-inner">    <span class="nx">LowerLeftPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1012" class="lines-num"><span id="L1012" data-line-number="1012"></span></td>
							
							<td rel="L1012" class="lines-code chroma"><code class="code-inner">    <span class="nx">LowerRightPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1013" class="lines-num"><span id="L1013" data-line-number="1013"></span></td>
							
							<td rel="L1013" class="lines-code chroma"><code class="code-inner">    <span class="nx">LeftPlatoPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1014" class="lines-num"><span id="L1014" data-line-number="1014"></span></td>
							
							<td rel="L1014" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightPlatoPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1015" class="lines-num"><span id="L1015" data-line-number="1015"></span></td>
							
							<td rel="L1015" class="lines-code chroma"><code class="code-inner">    <span class="nx">RightLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1016" class="lines-num"><span id="L1016" data-line-number="1016"></span></td>
							
							<td rel="L1016" class="lines-code chroma"><code class="code-inner">    <span class="nx">ZeroValue</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1017" class="lines-num"><span id="L1017" data-line-number="1017"></span></td>
							
							<td rel="L1017" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1018" class="lines-num"><span id="L1018" data-line-number="1018"></span></td>
							
							<td rel="L1018" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1019" class="lines-num"><span id="L1019" data-line-number="1019"></span></td>
							
							<td rel="L1019" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRequirementReferences</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1020" class="lines-num"><span id="L1020" data-line-number="1020"></span></td>
							
							<td rel="L1020" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1021" class="lines-num"><span id="L1021" data-line-number="1021"></span></td>
							
							<td rel="L1021" class="lines-code chroma"><code class="code-inner">    <span class="nx">Alpinist</span>: <span class="kt">IAlpinist</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1022" class="lines-num"><span id="L1022" data-line-number="1022"></span></td>
							
							<td rel="L1022" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1023" class="lines-num"><span id="L1023" data-line-number="1023"></span></td>
							
							<td rel="L1023" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1024" class="lines-num"><span id="L1024" data-line-number="1024"></span></td>
							
							<td rel="L1024" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IAlpinist</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1025" class="lines-num"><span id="L1025" data-line-number="1025"></span></td>
							
							<td rel="L1025" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1026" class="lines-num"><span id="L1026" data-line-number="1026"></span></td>
							
							<td rel="L1026" class="lines-code chroma"><code class="code-inner">    <span class="nx">Requirement</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1027" class="lines-num"><span id="L1027" data-line-number="1027"></span></td>
							
							<td rel="L1027" class="lines-code chroma"><code class="code-inner">    <span class="nx">Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1028" class="lines-num"><span id="L1028" data-line-number="1028"></span></td>
							
							<td rel="L1028" class="lines-code chroma"><code class="code-inner">    <span class="nx">Count</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1029" class="lines-num"><span id="L1029" data-line-number="1029"></span></td>
							
							<td rel="L1029" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequiredSlot</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1030" class="lines-num"><span id="L1030" data-line-number="1030"></span></td>
							
							<td rel="L1030" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequirementTip</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1031" class="lines-num"><span id="L1031" data-line-number="1031"></span></td>
							
							<td rel="L1031" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1032" class="lines-num"><span id="L1032" data-line-number="1032"></span></td>
							
							<td rel="L1032" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1033" class="lines-num"><span id="L1033" data-line-number="1033"></span></td>
							
							<td rel="L1033" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRestrictionsInRaid</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1034" class="lines-num"><span id="L1034" data-line-number="1034"></span></td>
							
							<td rel="L1034" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1035" class="lines-num"><span id="L1035" data-line-number="1035"></span></td>
							
							<td rel="L1035" class="lines-code chroma"><code class="code-inner">    <span class="nx">TemplateId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1036" class="lines-num"><span id="L1036" data-line-number="1036"></span></td>
							
							<td rel="L1036" class="lines-code chroma"><code class="code-inner">    <span class="nx">Value</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1037" class="lines-num"><span id="L1037" data-line-number="1037"></span></td>
							
							<td rel="L1037" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1038" class="lines-num"><span id="L1038" data-line-number="1038"></span></td>
							
							<td rel="L1038" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1039" class="lines-num"><span id="L1039" data-line-number="1039"></span></td>
							
							<td rel="L1039" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IFavoriteItemsSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1040" class="lines-num"><span id="L1040" data-line-number="1040"></span></td>
							
							<td rel="L1040" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1041" class="lines-num"><span id="L1041" data-line-number="1041"></span></td>
							
							<td rel="L1041" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponStandMaxItemsCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1042" class="lines-num"><span id="L1042" data-line-number="1042"></span></td>
							
							<td rel="L1042" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaceOfFameMaxItemsCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1043" class="lines-num"><span id="L1043" data-line-number="1043"></span></td>
							
							<td rel="L1043" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1044" class="lines-num"><span id="L1044" data-line-number="1044"></span></td>
							
							<td rel="L1044" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1045" class="lines-num"><span id="L1045" data-line-number="1045"></span></td>
							
							<td rel="L1045" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IVaultingSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1046" class="lines-num"><span id="L1046" data-line-number="1046"></span></td>
							
							<td rel="L1046" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1047" class="lines-num"><span id="L1047" data-line-number="1047"></span></td>
							
							<td rel="L1047" class="lines-code chroma"><code class="code-inner">    <span class="nx">IsActive</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1048" class="lines-num"><span id="L1048" data-line-number="1048"></span></td>
							
							<td rel="L1048" class="lines-code chroma"><code class="code-inner">    <span class="nx">VaultingInputTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1049" class="lines-num"><span id="L1049" data-line-number="1049"></span></td>
							
							<td rel="L1049" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridSettings</span>: <span class="kt">IVaultingGridSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1050" class="lines-num"><span id="L1050" data-line-number="1050"></span></td>
							
							<td rel="L1050" class="lines-code chroma"><code class="code-inner">    <span class="nx">MovesSettings</span>: <span class="kt">IVaultingMovesSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1051" class="lines-num"><span id="L1051" data-line-number="1051"></span></td>
							
							<td rel="L1051" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1052" class="lines-num"><span id="L1052" data-line-number="1052"></span></td>
							
							<td rel="L1052" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1053" class="lines-num"><span id="L1053" data-line-number="1053"></span></td>
							
							<td rel="L1053" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IVaultingGridSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1054" class="lines-num"><span id="L1054" data-line-number="1054"></span></td>
							
							<td rel="L1054" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1055" class="lines-num"><span id="L1055" data-line-number="1055"></span></td>
							
							<td rel="L1055" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridSizeX</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1056" class="lines-num"><span id="L1056" data-line-number="1056"></span></td>
							
							<td rel="L1056" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridSizeY</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1057" class="lines-num"><span id="L1057" data-line-number="1057"></span></td>
							
							<td rel="L1057" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridSizeZ</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1058" class="lines-num"><span id="L1058" data-line-number="1058"></span></td>
							
							<td rel="L1058" class="lines-code chroma"><code class="code-inner">    <span class="nx">SteppingLengthX</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1059" class="lines-num"><span id="L1059" data-line-number="1059"></span></td>
							
							<td rel="L1059" class="lines-code chroma"><code class="code-inner">    <span class="nx">SteppingLengthY</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1060" class="lines-num"><span id="L1060" data-line-number="1060"></span></td>
							
							<td rel="L1060" class="lines-code chroma"><code class="code-inner">    <span class="nx">SteppingLengthZ</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1061" class="lines-num"><span id="L1061" data-line-number="1061"></span></td>
							
							<td rel="L1061" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridOffsetX</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1062" class="lines-num"><span id="L1062" data-line-number="1062"></span></td>
							
							<td rel="L1062" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridOffsetY</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1063" class="lines-num"><span id="L1063" data-line-number="1063"></span></td>
							
							<td rel="L1063" class="lines-code chroma"><code class="code-inner">    <span class="nx">GridOffsetZ</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1064" class="lines-num"><span id="L1064" data-line-number="1064"></span></td>
							
							<td rel="L1064" class="lines-code chroma"><code class="code-inner">    <span class="nx">OffsetFactor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1065" class="lines-num"><span id="L1065" data-line-number="1065"></span></td>
							
							<td rel="L1065" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1066" class="lines-num"><span id="L1066" data-line-number="1066"></span></td>
							
							<td rel="L1066" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1067" class="lines-num"><span id="L1067" data-line-number="1067"></span></td>
							
							<td rel="L1067" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IVaultingMovesSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1068" class="lines-num"><span id="L1068" data-line-number="1068"></span></td>
							
							<td rel="L1068" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1069" class="lines-num"><span id="L1069" data-line-number="1069"></span></td>
							
							<td rel="L1069" class="lines-code chroma"><code class="code-inner">    <span class="nx">VaultSettings</span>: <span class="kt">IVaultingSubMoveSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1070" class="lines-num"><span id="L1070" data-line-number="1070"></span></td>
							
							<td rel="L1070" class="lines-code chroma"><code class="code-inner">    <span class="nx">ClimbSettings</span>: <span class="kt">IVaultingSubMoveSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1071" class="lines-num"><span id="L1071" data-line-number="1071"></span></td>
							
							<td rel="L1071" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1072" class="lines-num"><span id="L1072" data-line-number="1072"></span></td>
							
							<td rel="L1072" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1073" class="lines-num"><span id="L1073" data-line-number="1073"></span></td>
							
							<td rel="L1073" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IVaultingSubMoveSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1074" class="lines-num"><span id="L1074" data-line-number="1074"></span></td>
							
							<td rel="L1074" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1075" class="lines-num"><span id="L1075" data-line-number="1075"></span></td>
							
							<td rel="L1075" class="lines-code chroma"><code class="code-inner">    <span class="nx">IsActive</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1076" class="lines-num"><span id="L1076" data-line-number="1076"></span></td>
							
							<td rel="L1076" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxWithoutHandHeight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1077" class="lines-num"><span id="L1077" data-line-number="1077"></span></td>
							
							<td rel="L1077" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpeedRange</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1078" class="lines-num"><span id="L1078" data-line-number="1078"></span></td>
							
							<td rel="L1078" class="lines-code chroma"><code class="code-inner">    <span class="nx">MoveRestrictions</span>: <span class="kt">IMoveRestrictions</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1079" class="lines-num"><span id="L1079" data-line-number="1079"></span></td>
							
							<td rel="L1079" class="lines-code chroma"><code class="code-inner">    <span class="nx">AutoMoveRestrictions</span>: <span class="kt">IMoveRestrictions</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1080" class="lines-num"><span id="L1080" data-line-number="1080"></span></td>
							
							<td rel="L1080" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1081" class="lines-num"><span id="L1081" data-line-number="1081"></span></td>
							
							<td rel="L1081" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1082" class="lines-num"><span id="L1082" data-line-number="1082"></span></td>
							
							<td rel="L1082" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMoveRestrictions</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1083" class="lines-num"><span id="L1083" data-line-number="1083"></span></td>
							
							<td rel="L1083" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1084" class="lines-num"><span id="L1084" data-line-number="1084"></span></td>
							
							<td rel="L1084" class="lines-code chroma"><code class="code-inner">    <span class="nx">IsActive</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1085" class="lines-num"><span id="L1085" data-line-number="1085"></span></td>
							
							<td rel="L1085" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinDistantToInteract</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1086" class="lines-num"><span id="L1086" data-line-number="1086"></span></td>
							
							<td rel="L1086" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinHeight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1087" class="lines-num"><span id="L1087" data-line-number="1087"></span></td>
							
							<td rel="L1087" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxHeight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1088" class="lines-num"><span id="L1088" data-line-number="1088"></span></td>
							
							<td rel="L1088" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinLength</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1089" class="lines-num"><span id="L1089" data-line-number="1089"></span></td>
							
							<td rel="L1089" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxLength</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1090" class="lines-num"><span id="L1090" data-line-number="1090"></span></td>
							
							<td rel="L1090" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1091" class="lines-num"><span id="L1091" data-line-number="1091"></span></td>
							
							<td rel="L1091" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1092" class="lines-num"><span id="L1092" data-line-number="1092"></span></td>
							
							<td rel="L1092" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBTRSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1093" class="lines-num"><span id="L1093" data-line-number="1093"></span></td>
							
							<td rel="L1093" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1094" class="lines-num"><span id="L1094" data-line-number="1094"></span></td>
							
							<td rel="L1094" class="lines-code chroma"><code class="code-inner">    <span class="nx">LocationsWithBTR</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1095" class="lines-num"><span id="L1095" data-line-number="1095"></span></td>
							
							<td rel="L1095" class="lines-code chroma"><code class="code-inner">    <span class="nx">BasePriceTaxi</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1096" class="lines-num"><span id="L1096" data-line-number="1096"></span></td>
							
							<td rel="L1096" class="lines-code chroma"><code class="code-inner">    <span class="nx">AddPriceTaxi</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1097" class="lines-num"><span id="L1097" data-line-number="1097"></span></td>
							
							<td rel="L1097" class="lines-code chroma"><code class="code-inner">    <span class="nx">CleanUpPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1098" class="lines-num"><span id="L1098" data-line-number="1098"></span></td>
							
							<td rel="L1098" class="lines-code chroma"><code class="code-inner">    <span class="nx">DeliveryPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1099" class="lines-num"><span id="L1099" data-line-number="1099"></span></td>
							
							<td rel="L1099" class="lines-code chroma"><code class="code-inner">    <span class="nx">ModDeliveryCost</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1100" class="lines-num"><span id="L1100" data-line-number="1100"></span></td>
							
							<td rel="L1100" class="lines-code chroma"><code class="code-inner">    <span class="nx">BearPriceMod</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1101" class="lines-num"><span id="L1101" data-line-number="1101"></span></td>
							
							<td rel="L1101" class="lines-code chroma"><code class="code-inner">    <span class="nx">UsecPriceMod</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1102" class="lines-num"><span id="L1102" data-line-number="1102"></span></td>
							
							<td rel="L1102" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScavPriceMod</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1103" class="lines-num"><span id="L1103" data-line-number="1103"></span></td>
							
							<td rel="L1103" class="lines-code chroma"><code class="code-inner">    <span class="nx">CoefficientDiscountCharisma</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1104" class="lines-num"><span id="L1104" data-line-number="1104"></span></td>
							
							<td rel="L1104" class="lines-code chroma"><code class="code-inner">    <span class="nx">DeliveryMinPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1105" class="lines-num"><span id="L1105" data-line-number="1105"></span></td>
							
							<td rel="L1105" class="lines-code chroma"><code class="code-inner">    <span class="nx">TaxiMinPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1106" class="lines-num"><span id="L1106" data-line-number="1106"></span></td>
							
							<td rel="L1106" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotCoverMinPrice</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1107" class="lines-num"><span id="L1107" data-line-number="1107"></span></td>
							
							<td rel="L1107" class="lines-code chroma"><code class="code-inner">    <span class="nx">MapsConfigs</span>: <span class="kt">Record</span><span class="p">&lt;</span><span class="nt">string</span><span class="err">,</span> <span class="na">IBtrMapConfig</span><span class="p"></span><span class="p">&gt;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1108" class="lines-num"><span id="L1108" data-line-number="1108"></span></td>
							
							<td rel="L1108" class="lines-code chroma"><code class="code-inner">    <span class="nx">DiameterWheel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1109" class="lines-num"><span id="L1109" data-line-number="1109"></span></td>
							
							<td rel="L1109" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeightWheel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1110" class="lines-num"><span id="L1110" data-line-number="1110"></span></td>
							
							<td rel="L1110" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeightWheelMaxPosLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1111" class="lines-num"><span id="L1111" data-line-number="1111"></span></td>
							
							<td rel="L1111" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeightWheelMinPosLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1112" class="lines-num"><span id="L1112" data-line-number="1112"></span></td>
							
							<td rel="L1112" class="lines-code chroma"><code class="code-inner">    <span class="nx">SnapToSurfaceWheelsSpeed</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1113" class="lines-num"><span id="L1113" data-line-number="1113"></span></td>
							
							<td rel="L1113" class="lines-code chroma"><code class="code-inner">    <span class="nx">CheckSurfaceForWheelsTimer</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1114" class="lines-num"><span id="L1114" data-line-number="1114"></span></td>
							
							<td rel="L1114" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeightWheelOffset</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1115" class="lines-num"><span id="L1115" data-line-number="1115"></span></td>
							
							<td rel="L1115" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1116" class="lines-num"><span id="L1116" data-line-number="1116"></span></td>
							
							<td rel="L1116" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1117" class="lines-num"><span id="L1117" data-line-number="1117"></span></td>
							
							<td rel="L1117" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBtrMapConfig</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1118" class="lines-num"><span id="L1118" data-line-number="1118"></span></td>
							
							<td rel="L1118" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1119" class="lines-num"><span id="L1119" data-line-number="1119"></span></td>
							
							<td rel="L1119" class="lines-code chroma"><code class="code-inner">    <span class="nx">mapID</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1120" class="lines-num"><span id="L1120" data-line-number="1120"></span></td>
							
							<td rel="L1120" class="lines-code chroma"><code class="code-inner">    <span class="nx">pathsConfigurations</span>: <span class="kt">IBtrMapConfig</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1121" class="lines-num"><span id="L1121" data-line-number="1121"></span></td>
							
							<td rel="L1121" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1122" class="lines-num"><span id="L1122" data-line-number="1122"></span></td>
							
							<td rel="L1122" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1123" class="lines-num"><span id="L1123" data-line-number="1123"></span></td>
							
							<td rel="L1123" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBtrMapConfig</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1124" class="lines-num"><span id="L1124" data-line-number="1124"></span></td>
							
							<td rel="L1124" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1125" class="lines-num"><span id="L1125" data-line-number="1125"></span></td>
							
							<td rel="L1125" class="lines-code chroma"><code class="code-inner">    <span class="nx">id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1126" class="lines-num"><span id="L1126" data-line-number="1126"></span></td>
							
							<td rel="L1126" class="lines-code chroma"><code class="code-inner">    <span class="nx">enterPoint</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1127" class="lines-num"><span id="L1127" data-line-number="1127"></span></td>
							
							<td rel="L1127" class="lines-code chroma"><code class="code-inner">    <span class="nx">exitPoint</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1128" class="lines-num"><span id="L1128" data-line-number="1128"></span></td>
							
							<td rel="L1128" class="lines-code chroma"><code class="code-inner">    <span class="nx">pathPoints</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1129" class="lines-num"><span id="L1129" data-line-number="1129"></span></td>
							
							<td rel="L1129" class="lines-code chroma"><code class="code-inner">    <span class="nx">once</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1130" class="lines-num"><span id="L1130" data-line-number="1130"></span></td>
							
							<td rel="L1130" class="lines-code chroma"><code class="code-inner">    <span class="nx">circle</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1131" class="lines-num"><span id="L1131" data-line-number="1131"></span></td>
							
							<td rel="L1131" class="lines-code chroma"><code class="code-inner">    <span class="nx">circleCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1132" class="lines-num"><span id="L1132" data-line-number="1132"></span></td>
							
							<td rel="L1132" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1133" class="lines-num"><span id="L1133" data-line-number="1133"></span></td>
							
							<td rel="L1133" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1134" class="lines-num"><span id="L1134" data-line-number="1134"></span></td>
							
							<td rel="L1134" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISquadSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1135" class="lines-num"><span id="L1135" data-line-number="1135"></span></td>
							
							<td rel="L1135" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1136" class="lines-num"><span id="L1136" data-line-number="1136"></span></td>
							
							<td rel="L1136" class="lines-code chroma"><code class="code-inner">    <span class="nx">CountOfRequestsToOnePlayer</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1137" class="lines-num"><span id="L1137" data-line-number="1137"></span></td>
							
							<td rel="L1137" class="lines-code chroma"><code class="code-inner">    <span class="nx">SecondsForExpiredRequest</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1138" class="lines-num"><span id="L1138" data-line-number="1138"></span></td>
							
							<td rel="L1138" class="lines-code chroma"><code class="code-inner">    <span class="nx">SendRequestDelaySeconds</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1139" class="lines-num"><span id="L1139" data-line-number="1139"></span></td>
							
							<td rel="L1139" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1140" class="lines-num"><span id="L1140" data-line-number="1140"></span></td>
							
							<td rel="L1140" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1141" class="lines-num"><span id="L1141" data-line-number="1141"></span></td>
							
							<td rel="L1141" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IInsurance</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1142" class="lines-num"><span id="L1142" data-line-number="1142"></span></td>
							
							<td rel="L1142" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1143" class="lines-num"><span id="L1143" data-line-number="1143"></span></td>
							
							<td rel="L1143" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxStorageTimeInHour</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1144" class="lines-num"><span id="L1144" data-line-number="1144"></span></td>
							
							<td rel="L1144" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1145" class="lines-num"><span id="L1145" data-line-number="1145"></span></td>
							
							<td rel="L1145" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1146" class="lines-num"><span id="L1146" data-line-number="1146"></span></td>
							
							<td rel="L1146" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISkillsSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1147" class="lines-num"><span id="L1147" data-line-number="1147"></span></td>
							
							<td rel="L1147" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1148" class="lines-num"><span id="L1148" data-line-number="1148"></span></td>
							
							<td rel="L1148" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgressRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1149" class="lines-num"><span id="L1149" data-line-number="1149"></span></td>
							
							<td rel="L1149" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponSkillProgressRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1150" class="lines-num"><span id="L1150" data-line-number="1150"></span></td>
							
							<td rel="L1150" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponSkillRecoilBonusPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1151" class="lines-num"><span id="L1151" data-line-number="1151"></span></td>
							
							<td rel="L1151" class="lines-code chroma"><code class="code-inner">    <span class="nx">HideoutManagement</span>: <span class="kt">IHideoutManagement</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1152" class="lines-num"><span id="L1152" data-line-number="1152"></span></td>
							
							<td rel="L1152" class="lines-code chroma"><code class="code-inner">    <span class="nx">Crafting</span>: <span class="kt">ICrafting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1153" class="lines-num"><span id="L1153" data-line-number="1153"></span></td>
							
							<td rel="L1153" class="lines-code chroma"><code class="code-inner">    <span class="nx">Metabolism</span>: <span class="kt">IMetabolism</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1154" class="lines-num"><span id="L1154" data-line-number="1154"></span></td>
							
							<td rel="L1154" class="lines-code chroma"><code class="code-inner">    <span class="nx">Immunity</span>: <span class="kt">Immunity</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1155" class="lines-num"><span id="L1155" data-line-number="1155"></span></td>
							
							<td rel="L1155" class="lines-code chroma"><code class="code-inner">    <span class="nx">Endurance</span>: <span class="kt">IEndurance</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1156" class="lines-num"><span id="L1156" data-line-number="1156"></span></td>
							
							<td rel="L1156" class="lines-code chroma"><code class="code-inner">    <span class="nx">Strength</span>: <span class="kt">IStrength</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1157" class="lines-num"><span id="L1157" data-line-number="1157"></span></td>
							
							<td rel="L1157" class="lines-code chroma"><code class="code-inner">    <span class="nx">Vitality</span>: <span class="kt">IVitality</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1158" class="lines-num"><span id="L1158" data-line-number="1158"></span></td>
							
							<td rel="L1158" class="lines-code chroma"><code class="code-inner">    <span class="nx">Health</span>: <span class="kt">IHealthSkillProgress</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1159" class="lines-num"><span id="L1159" data-line-number="1159"></span></td>
							
							<td rel="L1159" class="lines-code chroma"><code class="code-inner">    <span class="nx">StressResistance</span>: <span class="kt">IStressResistance</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1160" class="lines-num"><span id="L1160" data-line-number="1160"></span></td>
							
							<td rel="L1160" class="lines-code chroma"><code class="code-inner">    <span class="nx">Throwing</span>: <span class="kt">IThrowing</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1161" class="lines-num"><span id="L1161" data-line-number="1161"></span></td>
							
							<td rel="L1161" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilControl</span>: <span class="kt">IRecoilControl</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1162" class="lines-num"><span id="L1162" data-line-number="1162"></span></td>
							
							<td rel="L1162" class="lines-code chroma"><code class="code-inner">    <span class="nx">Pistol</span>: <span class="kt">IWeaponSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1163" class="lines-num"><span id="L1163" data-line-number="1163"></span></td>
							
							<td rel="L1163" class="lines-code chroma"><code class="code-inner">    <span class="nx">Revolver</span>: <span class="kt">IWeaponSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1164" class="lines-num"><span id="L1164" data-line-number="1164"></span></td>
							
							<td rel="L1164" class="lines-code chroma"><code class="code-inner">    <span class="nx">SMG</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1165" class="lines-num"><span id="L1165" data-line-number="1165"></span></td>
							
							<td rel="L1165" class="lines-code chroma"><code class="code-inner">    <span class="nx">Assault</span>: <span class="kt">IWeaponSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1166" class="lines-num"><span id="L1166" data-line-number="1166"></span></td>
							
							<td rel="L1166" class="lines-code chroma"><code class="code-inner">    <span class="nx">Shotgun</span>: <span class="kt">IWeaponSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1167" class="lines-num"><span id="L1167" data-line-number="1167"></span></td>
							
							<td rel="L1167" class="lines-code chroma"><code class="code-inner">    <span class="nx">Sniper</span>: <span class="kt">IWeaponSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1168" class="lines-num"><span id="L1168" data-line-number="1168"></span></td>
							
							<td rel="L1168" class="lines-code chroma"><code class="code-inner">    <span class="nx">LMG</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1169" class="lines-num"><span id="L1169" data-line-number="1169"></span></td>
							
							<td rel="L1169" class="lines-code chroma"><code class="code-inner">    <span class="nx">HMG</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1170" class="lines-num"><span id="L1170" data-line-number="1170"></span></td>
							
							<td rel="L1170" class="lines-code chroma"><code class="code-inner">    <span class="nx">Launcher</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1171" class="lines-num"><span id="L1171" data-line-number="1171"></span></td>
							
							<td rel="L1171" class="lines-code chroma"><code class="code-inner">    <span class="nx">AttachedLauncher</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1172" class="lines-num"><span id="L1172" data-line-number="1172"></span></td>
							
							<td rel="L1172" class="lines-code chroma"><code class="code-inner">    <span class="nx">Melee</span>: <span class="kt">IMeleeSkill</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1173" class="lines-num"><span id="L1173" data-line-number="1173"></span></td>
							
							<td rel="L1173" class="lines-code chroma"><code class="code-inner">    <span class="nx">DMR</span>: <span class="kt">IWeaponSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1174" class="lines-num"><span id="L1174" data-line-number="1174"></span></td>
							
							<td rel="L1174" class="lines-code chroma"><code class="code-inner">    <span class="nx">BearAssaultoperations</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1175" class="lines-num"><span id="L1175" data-line-number="1175"></span></td>
							
							<td rel="L1175" class="lines-code chroma"><code class="code-inner">    <span class="nx">BearAuthority</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1176" class="lines-num"><span id="L1176" data-line-number="1176"></span></td>
							
							<td rel="L1176" class="lines-code chroma"><code class="code-inner">    <span class="nx">BearAksystems</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1177" class="lines-num"><span id="L1177" data-line-number="1177"></span></td>
							
							<td rel="L1177" class="lines-code chroma"><code class="code-inner">    <span class="nx">BearHeavycaliber</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1178" class="lines-num"><span id="L1178" data-line-number="1178"></span></td>
							
							<td rel="L1178" class="lines-code chroma"><code class="code-inner">    <span class="nx">BearRawpower</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1179" class="lines-num"><span id="L1179" data-line-number="1179"></span></td>
							
							<td rel="L1179" class="lines-code chroma"><code class="code-inner">    <span class="nx">UsecArsystems</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1180" class="lines-num"><span id="L1180" data-line-number="1180"></span></td>
							
							<td rel="L1180" class="lines-code chroma"><code class="code-inner">    <span class="nx">UsecDeepweaponmodding_Settings</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1181" class="lines-num"><span id="L1181" data-line-number="1181"></span></td>
							
							<td rel="L1181" class="lines-code chroma"><code class="code-inner">    <span class="nx">UsecLongrangeoptics_Settings</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1182" class="lines-num"><span id="L1182" data-line-number="1182"></span></td>
							
							<td rel="L1182" class="lines-code chroma"><code class="code-inner">    <span class="nx">UsecNegotiations</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1183" class="lines-num"><span id="L1183" data-line-number="1183"></span></td>
							
							<td rel="L1183" class="lines-code chroma"><code class="code-inner">    <span class="nx">UsecTactics</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1184" class="lines-num"><span id="L1184" data-line-number="1184"></span></td>
							
							<td rel="L1184" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotReload</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1185" class="lines-num"><span id="L1185" data-line-number="1185"></span></td>
							
							<td rel="L1185" class="lines-code chroma"><code class="code-inner">    <span class="nx">CovertMovement</span>: <span class="kt">ICovertMovement</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1186" class="lines-num"><span id="L1186" data-line-number="1186"></span></td>
							
							<td rel="L1186" class="lines-code chroma"><code class="code-inner">    <span class="nx">FieldMedicine</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1187" class="lines-num"><span id="L1187" data-line-number="1187"></span></td>
							
							<td rel="L1187" class="lines-code chroma"><code class="code-inner">    <span class="nx">Search</span>: <span class="kt">ISearch</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1188" class="lines-num"><span id="L1188" data-line-number="1188"></span></td>
							
							<td rel="L1188" class="lines-code chroma"><code class="code-inner">    <span class="nx">Sniping</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1189" class="lines-num"><span id="L1189" data-line-number="1189"></span></td>
							
							<td rel="L1189" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProneMovement</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1190" class="lines-num"><span id="L1190" data-line-number="1190"></span></td>
							
							<td rel="L1190" class="lines-code chroma"><code class="code-inner">    <span class="nx">FirstAid</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1191" class="lines-num"><span id="L1191" data-line-number="1191"></span></td>
							
							<td rel="L1191" class="lines-code chroma"><code class="code-inner">    <span class="nx">LightVests</span>: <span class="kt">IArmorSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1192" class="lines-num"><span id="L1192" data-line-number="1192"></span></td>
							
							<td rel="L1192" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeavyVests</span>: <span class="kt">IArmorSkills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1193" class="lines-num"><span id="L1193" data-line-number="1193"></span></td>
							
							<td rel="L1193" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponModding</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1194" class="lines-num"><span id="L1194" data-line-number="1194"></span></td>
							
							<td rel="L1194" class="lines-code chroma"><code class="code-inner">    <span class="nx">AdvancedModding</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1195" class="lines-num"><span id="L1195" data-line-number="1195"></span></td>
							
							<td rel="L1195" class="lines-code chroma"><code class="code-inner">    <span class="nx">NightOps</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1196" class="lines-num"><span id="L1196" data-line-number="1196"></span></td>
							
							<td rel="L1196" class="lines-code chroma"><code class="code-inner">    <span class="nx">SilentOps</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1197" class="lines-num"><span id="L1197" data-line-number="1197"></span></td>
							
							<td rel="L1197" class="lines-code chroma"><code class="code-inner">    <span class="nx">Lockpicking</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1198" class="lines-num"><span id="L1198" data-line-number="1198"></span></td>
							
							<td rel="L1198" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponTreatment</span>: <span class="kt">IWeaponTreatment</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1199" class="lines-num"><span id="L1199" data-line-number="1199"></span></td>
							
							<td rel="L1199" class="lines-code chroma"><code class="code-inner">    <span class="nx">MagDrills</span>: <span class="kt">IMagDrills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1200" class="lines-num"><span id="L1200" data-line-number="1200"></span></td>
							
							<td rel="L1200" class="lines-code chroma"><code class="code-inner">    <span class="nx">Freetrading</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1201" class="lines-num"><span id="L1201" data-line-number="1201"></span></td>
							
							<td rel="L1201" class="lines-code chroma"><code class="code-inner">    <span class="nx">Auctions</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1202" class="lines-num"><span id="L1202" data-line-number="1202"></span></td>
							
							<td rel="L1202" class="lines-code chroma"><code class="code-inner">    <span class="nx">Cleanoperations</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1203" class="lines-num"><span id="L1203" data-line-number="1203"></span></td>
							
							<td rel="L1203" class="lines-code chroma"><code class="code-inner">    <span class="nx">Barter</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1204" class="lines-num"><span id="L1204" data-line-number="1204"></span></td>
							
							<td rel="L1204" class="lines-code chroma"><code class="code-inner">    <span class="nx">Shadowconnections</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1205" class="lines-num"><span id="L1205" data-line-number="1205"></span></td>
							
							<td rel="L1205" class="lines-code chroma"><code class="code-inner">    <span class="nx">Taskperformance</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1206" class="lines-num"><span id="L1206" data-line-number="1206"></span></td>
							
							<td rel="L1206" class="lines-code chroma"><code class="code-inner">    <span class="nx">Perception</span>: <span class="kt">IPerception</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1207" class="lines-num"><span id="L1207" data-line-number="1207"></span></td>
							
							<td rel="L1207" class="lines-code chroma"><code class="code-inner">    <span class="nx">Intellect</span>: <span class="kt">Intellect</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1208" class="lines-num"><span id="L1208" data-line-number="1208"></span></td>
							
							<td rel="L1208" class="lines-code chroma"><code class="code-inner">    <span class="nx">Attention</span>: <span class="kt">IAttention</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1209" class="lines-num"><span id="L1209" data-line-number="1209"></span></td>
							
							<td rel="L1209" class="lines-code chroma"><code class="code-inner">    <span class="nx">Charisma</span>: <span class="kt">ICharisma</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1210" class="lines-num"><span id="L1210" data-line-number="1210"></span></td>
							
							<td rel="L1210" class="lines-code chroma"><code class="code-inner">    <span class="nx">Memory</span>: <span class="kt">IMemory</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1211" class="lines-num"><span id="L1211" data-line-number="1211"></span></td>
							
							<td rel="L1211" class="lines-code chroma"><code class="code-inner">    <span class="nx">Surgery</span>: <span class="kt">ISurgery</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1212" class="lines-num"><span id="L1212" data-line-number="1212"></span></td>
							
							<td rel="L1212" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimDrills</span>: <span class="kt">IAimDrills</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1213" class="lines-num"><span id="L1213" data-line-number="1213"></span></td>
							
							<td rel="L1213" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSound</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1214" class="lines-num"><span id="L1214" data-line-number="1214"></span></td>
							
							<td rel="L1214" class="lines-code chroma"><code class="code-inner">    <span class="nx">TroubleShooting</span>: <span class="kt">ITroubleShooting</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1215" class="lines-num"><span id="L1215" data-line-number="1215"></span></td>
							
							<td rel="L1215" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1216" class="lines-num"><span id="L1216" data-line-number="1216"></span></td>
							
							<td rel="L1216" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1217" class="lines-num"><span id="L1217" data-line-number="1217"></span></td>
							
							<td rel="L1217" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMeleeSkill</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1218" class="lines-num"><span id="L1218" data-line-number="1218"></span></td>
							
							<td rel="L1218" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1219" class="lines-num"><span id="L1219" data-line-number="1219"></span></td>
							
							<td rel="L1219" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffSettings</span>: <span class="kt">IBuffSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1220" class="lines-num"><span id="L1220" data-line-number="1220"></span></td>
							
							<td rel="L1220" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1221" class="lines-num"><span id="L1221" data-line-number="1221"></span></td>
							
							<td rel="L1221" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1222" class="lines-num"><span id="L1222" data-line-number="1222"></span></td>
							
							<td rel="L1222" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IArmorSkills</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1223" class="lines-num"><span id="L1223" data-line-number="1223"></span></td>
							
							<td rel="L1223" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1224" class="lines-num"><span id="L1224" data-line-number="1224"></span></td>
							
							<td rel="L1224" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffMaxCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1225" class="lines-num"><span id="L1225" data-line-number="1225"></span></td>
							
							<td rel="L1225" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffSettings</span>: <span class="kt">IBuffSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1226" class="lines-num"><span id="L1226" data-line-number="1226"></span></td>
							
							<td rel="L1226" class="lines-code chroma"><code class="code-inner">    <span class="nx">Counters</span>: <span class="kt">IArmorCounters</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1227" class="lines-num"><span id="L1227" data-line-number="1227"></span></td>
							
							<td rel="L1227" class="lines-code chroma"><code class="code-inner">    <span class="nx">MoveSpeedPenaltyReductionHVestsReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1228" class="lines-num"><span id="L1228" data-line-number="1228"></span></td>
							
							<td rel="L1228" class="lines-code chroma"><code class="code-inner">    <span class="nx">RicochetChanceHVestsCurrentDurabilityThreshold</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1229" class="lines-num"><span id="L1229" data-line-number="1229"></span></td>
							
							<td rel="L1229" class="lines-code chroma"><code class="code-inner">    <span class="nx">RicochetChanceHVestsEliteLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1230" class="lines-num"><span id="L1230" data-line-number="1230"></span></td>
							
							<td rel="L1230" class="lines-code chroma"><code class="code-inner">    <span class="nx">RicochetChanceHVestsMaxDurabilityThreshold</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1231" class="lines-num"><span id="L1231" data-line-number="1231"></span></td>
							
							<td rel="L1231" class="lines-code chroma"><code class="code-inner">    <span class="nx">MeleeDamageLVestsReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1232" class="lines-num"><span id="L1232" data-line-number="1232"></span></td>
							
							<td rel="L1232" class="lines-code chroma"><code class="code-inner">    <span class="nx">MoveSpeedPenaltyReductionLVestsReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1233" class="lines-num"><span id="L1233" data-line-number="1233"></span></td>
							
							<td rel="L1233" class="lines-code chroma"><code class="code-inner">    <span class="nx">WearAmountRepairLVestsReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1234" class="lines-num"><span id="L1234" data-line-number="1234"></span></td>
							
							<td rel="L1234" class="lines-code chroma"><code class="code-inner">    <span class="nx">WearChanceRepairLVestsReduceEliteLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1235" class="lines-num"><span id="L1235" data-line-number="1235"></span></td>
							
							<td rel="L1235" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1236" class="lines-num"><span id="L1236" data-line-number="1236"></span></td>
							
							<td rel="L1236" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1237" class="lines-num"><span id="L1237" data-line-number="1237"></span></td>
							
							<td rel="L1237" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IArmorCounters</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1238" class="lines-num"><span id="L1238" data-line-number="1238"></span></td>
							
							<td rel="L1238" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1239" class="lines-num"><span id="L1239" data-line-number="1239"></span></td>
							
							<td rel="L1239" class="lines-code chroma"><code class="code-inner">    <span class="nx">armorDurability</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1240" class="lines-num"><span id="L1240" data-line-number="1240"></span></td>
							
							<td rel="L1240" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1241" class="lines-num"><span id="L1241" data-line-number="1241"></span></td>
							
							<td rel="L1241" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1242" class="lines-num"><span id="L1242" data-line-number="1242"></span></td>
							
							<td rel="L1242" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHideoutManagement</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1243" class="lines-num"><span id="L1243" data-line-number="1243"></span></td>
							
							<td rel="L1243" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1244" class="lines-num"><span id="L1244" data-line-number="1244"></span></td>
							
							<td rel="L1244" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillPointsPerAreaUpgrade</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1245" class="lines-num"><span id="L1245" data-line-number="1245"></span></td>
							
							<td rel="L1245" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillPointsPerCraft</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1246" class="lines-num"><span id="L1246" data-line-number="1246"></span></td>
							
							<td rel="L1246" class="lines-code chroma"><code class="code-inner">    <span class="nx">ConsumptionReductionPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1247" class="lines-num"><span id="L1247" data-line-number="1247"></span></td>
							
							<td rel="L1247" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillBoostPercent</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1248" class="lines-num"><span id="L1248" data-line-number="1248"></span></td>
							
							<td rel="L1248" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillPointsRate</span>: <span class="kt">ISkillPointsRate</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1249" class="lines-num"><span id="L1249" data-line-number="1249"></span></td>
							
							<td rel="L1249" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteSlots</span>: <span class="kt">IEliteSlots</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1250" class="lines-num"><span id="L1250" data-line-number="1250"></span></td>
							
							<td rel="L1250" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1251" class="lines-num"><span id="L1251" data-line-number="1251"></span></td>
							
							<td rel="L1251" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1252" class="lines-num"><span id="L1252" data-line-number="1252"></span></td>
							
							<td rel="L1252" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISkillPointsRate</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1253" class="lines-num"><span id="L1253" data-line-number="1253"></span></td>
							
							<td rel="L1253" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1254" class="lines-num"><span id="L1254" data-line-number="1254"></span></td>
							
							<td rel="L1254" class="lines-code chroma"><code class="code-inner">    <span class="nx">Generator</span>: <span class="kt">ISkillPointRate</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1255" class="lines-num"><span id="L1255" data-line-number="1255"></span></td>
							
							<td rel="L1255" class="lines-code chroma"><code class="code-inner">    <span class="nx">AirFilteringUnit</span>: <span class="kt">ISkillPointRate</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1256" class="lines-num"><span id="L1256" data-line-number="1256"></span></td>
							
							<td rel="L1256" class="lines-code chroma"><code class="code-inner">    <span class="nx">WaterCollector</span>: <span class="kt">ISkillPointRate</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1257" class="lines-num"><span id="L1257" data-line-number="1257"></span></td>
							
							<td rel="L1257" class="lines-code chroma"><code class="code-inner">    <span class="nx">SolarPower</span>: <span class="kt">ISkillPointRate</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1258" class="lines-num"><span id="L1258" data-line-number="1258"></span></td>
							
							<td rel="L1258" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1259" class="lines-num"><span id="L1259" data-line-number="1259"></span></td>
							
							<td rel="L1259" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1260" class="lines-num"><span id="L1260" data-line-number="1260"></span></td>
							
							<td rel="L1260" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISkillPointRate</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1261" class="lines-num"><span id="L1261" data-line-number="1261"></span></td>
							
							<td rel="L1261" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1262" class="lines-num"><span id="L1262" data-line-number="1262"></span></td>
							
							<td rel="L1262" class="lines-code chroma"><code class="code-inner">    <span class="nx">ResourceSpent</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1263" class="lines-num"><span id="L1263" data-line-number="1263"></span></td>
							
							<td rel="L1263" class="lines-code chroma"><code class="code-inner">    <span class="nx">PointsGained</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1264" class="lines-num"><span id="L1264" data-line-number="1264"></span></td>
							
							<td rel="L1264" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1265" class="lines-num"><span id="L1265" data-line-number="1265"></span></td>
							
							<td rel="L1265" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1266" class="lines-num"><span id="L1266" data-line-number="1266"></span></td>
							
							<td rel="L1266" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEliteSlots</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1267" class="lines-num"><span id="L1267" data-line-number="1267"></span></td>
							
							<td rel="L1267" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1268" class="lines-num"><span id="L1268" data-line-number="1268"></span></td>
							
							<td rel="L1268" class="lines-code chroma"><code class="code-inner">    <span class="nx">Generator</span>: <span class="kt">IEliteSlot</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1269" class="lines-num"><span id="L1269" data-line-number="1269"></span></td>
							
							<td rel="L1269" class="lines-code chroma"><code class="code-inner">    <span class="nx">AirFilteringUnit</span>: <span class="kt">IEliteSlot</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1270" class="lines-num"><span id="L1270" data-line-number="1270"></span></td>
							
							<td rel="L1270" class="lines-code chroma"><code class="code-inner">    <span class="nx">WaterCollector</span>: <span class="kt">IEliteSlot</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1271" class="lines-num"><span id="L1271" data-line-number="1271"></span></td>
							
							<td rel="L1271" class="lines-code chroma"><code class="code-inner">    <span class="nx">BitcoinFarm</span>: <span class="kt">IEliteSlot</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1272" class="lines-num"><span id="L1272" data-line-number="1272"></span></td>
							
							<td rel="L1272" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1273" class="lines-num"><span id="L1273" data-line-number="1273"></span></td>
							
							<td rel="L1273" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1274" class="lines-num"><span id="L1274" data-line-number="1274"></span></td>
							
							<td rel="L1274" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEliteSlot</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1275" class="lines-num"><span id="L1275" data-line-number="1275"></span></td>
							
							<td rel="L1275" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1276" class="lines-num"><span id="L1276" data-line-number="1276"></span></td>
							
							<td rel="L1276" class="lines-code chroma"><code class="code-inner">    <span class="nx">Slots</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1277" class="lines-num"><span id="L1277" data-line-number="1277"></span></td>
							
							<td rel="L1277" class="lines-code chroma"><code class="code-inner">    <span class="nx">Container</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1278" class="lines-num"><span id="L1278" data-line-number="1278"></span></td>
							
							<td rel="L1278" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1279" class="lines-num"><span id="L1279" data-line-number="1279"></span></td>
							
							<td rel="L1279" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1280" class="lines-num"><span id="L1280" data-line-number="1280"></span></td>
							
							<td rel="L1280" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICrafting</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1281" class="lines-num"><span id="L1281" data-line-number="1281"></span></td>
							
							<td rel="L1281" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1282" class="lines-num"><span id="L1282" data-line-number="1282"></span></td>
							
							<td rel="L1282" class="lines-code chroma"><code class="code-inner">    <span class="nx">PointsPerCraftingCycle</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1283" class="lines-num"><span id="L1283" data-line-number="1283"></span></td>
							
							<td rel="L1283" class="lines-code chroma"><code class="code-inner">    <span class="nx">CraftingCycleHours</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1284" class="lines-num"><span id="L1284" data-line-number="1284"></span></td>
							
							<td rel="L1284" class="lines-code chroma"><code class="code-inner">    <span class="nx">PointsPerUniqueCraftCycle</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1285" class="lines-num"><span id="L1285" data-line-number="1285"></span></td>
							
							<td rel="L1285" class="lines-code chroma"><code class="code-inner">    <span class="nx">UniqueCraftsPerCycle</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1286" class="lines-num"><span id="L1286" data-line-number="1286"></span></td>
							
							<td rel="L1286" class="lines-code chroma"><code class="code-inner">    <span class="nx">CraftTimeReductionPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1287" class="lines-num"><span id="L1287" data-line-number="1287"></span></td>
							
							<td rel="L1287" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProductionTimeReductionPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1288" class="lines-num"><span id="L1288" data-line-number="1288"></span></td>
							
							<td rel="L1288" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteExtraProductions</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1289" class="lines-num"><span id="L1289" data-line-number="1289"></span></td>
							
							<td rel="L1289" class="lines-code chroma"><code class="code-inner">    <span class="nx">CraftingPointsToInteligence</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1290" class="lines-num"><span id="L1290" data-line-number="1290"></span></td>
							
							<td rel="L1290" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1291" class="lines-num"><span id="L1291" data-line-number="1291"></span></td>
							
							<td rel="L1291" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1292" class="lines-num"><span id="L1292" data-line-number="1292"></span></td>
							
							<td rel="L1292" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMetabolism</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1293" class="lines-num"><span id="L1293" data-line-number="1293"></span></td>
							
							<td rel="L1293" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1294" class="lines-num"><span id="L1294" data-line-number="1294"></span></td>
							
							<td rel="L1294" class="lines-code chroma"><code class="code-inner">    <span class="nx">HydrationRecoveryRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1295" class="lines-num"><span id="L1295" data-line-number="1295"></span></td>
							
							<td rel="L1295" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnergyRecoveryRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1296" class="lines-num"><span id="L1296" data-line-number="1296"></span></td>
							
							<td rel="L1296" class="lines-code chroma"><code class="code-inner">    <span class="nx">IncreasePositiveEffectDurationRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1297" class="lines-num"><span id="L1297" data-line-number="1297"></span></td>
							
							<td rel="L1297" class="lines-code chroma"><code class="code-inner">    <span class="nx">DecreaseNegativeEffectDurationRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1298" class="lines-num"><span id="L1298" data-line-number="1298"></span></td>
							
							<td rel="L1298" class="lines-code chroma"><code class="code-inner">    <span class="nx">DecreasePoisonDurationRate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1299" class="lines-num"><span id="L1299" data-line-number="1299"></span></td>
							
							<td rel="L1299" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1300" class="lines-num"><span id="L1300" data-line-number="1300"></span></td>
							
							<td rel="L1300" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1301" class="lines-num"><span id="L1301" data-line-number="1301"></span></td>
							
							<td rel="L1301" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Immunity</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1302" class="lines-num"><span id="L1302" data-line-number="1302"></span></td>
							
							<td rel="L1302" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1303" class="lines-num"><span id="L1303" data-line-number="1303"></span></td>
							
							<td rel="L1303" class="lines-code chroma"><code class="code-inner">    <span class="nx">ImmunityMiscEffects</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1304" class="lines-num"><span id="L1304" data-line-number="1304"></span></td>
							
							<td rel="L1304" class="lines-code chroma"><code class="code-inner">    <span class="nx">ImmunityPoisonBuff</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1305" class="lines-num"><span id="L1305" data-line-number="1305"></span></td>
							
							<td rel="L1305" class="lines-code chroma"><code class="code-inner">    <span class="nx">ImmunityPainKiller</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1306" class="lines-num"><span id="L1306" data-line-number="1306"></span></td>
							
							<td rel="L1306" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthNegativeEffect</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1307" class="lines-num"><span id="L1307" data-line-number="1307"></span></td>
							
							<td rel="L1307" class="lines-code chroma"><code class="code-inner">    <span class="nx">StimulatorNegativeBuff</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1308" class="lines-num"><span id="L1308" data-line-number="1308"></span></td>
							
							<td rel="L1308" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1309" class="lines-num"><span id="L1309" data-line-number="1309"></span></td>
							
							<td rel="L1309" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1310" class="lines-num"><span id="L1310" data-line-number="1310"></span></td>
							
							<td rel="L1310" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEndurance</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1311" class="lines-num"><span id="L1311" data-line-number="1311"></span></td>
							
							<td rel="L1311" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1312" class="lines-num"><span id="L1312" data-line-number="1312"></span></td>
							
							<td rel="L1312" class="lines-code chroma"><code class="code-inner">    <span class="nx">MovementAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1313" class="lines-num"><span id="L1313" data-line-number="1313"></span></td>
							
							<td rel="L1313" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1314" class="lines-num"><span id="L1314" data-line-number="1314"></span></td>
							
							<td rel="L1314" class="lines-code chroma"><code class="code-inner">    <span class="nx">GainPerFatigueStack</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1315" class="lines-num"><span id="L1315" data-line-number="1315"></span></td>
							
							<td rel="L1315" class="lines-code chroma"><code class="code-inner">    <span class="nx">DependentSkillRatios</span>: <span class="kt">IDependentSkillRatio</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1316" class="lines-num"><span id="L1316" data-line-number="1316"></span></td>
							
							<td rel="L1316" class="lines-code chroma"><code class="code-inner">    <span class="nx">QTELevelMultipliers</span>: <span class="kt">Record</span><span class="p">&lt;</span><span class="nt">string</span><span class="err">,</span> <span class="na">Record</span><span class="err">&lt;</span><span class="na">string</span><span class="err">,</span> <span class="na">number</span><span class="p"></span><span class="p">&gt;</span><span class="o">&gt;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1317" class="lines-num"><span id="L1317" data-line-number="1317"></span></td>
							
							<td rel="L1317" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1318" class="lines-num"><span id="L1318" data-line-number="1318"></span></td>
							
							<td rel="L1318" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1319" class="lines-num"><span id="L1319" data-line-number="1319"></span></td>
							
							<td rel="L1319" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStrength</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1320" class="lines-num"><span id="L1320" data-line-number="1320"></span></td>
							
							<td rel="L1320" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1321" class="lines-num"><span id="L1321" data-line-number="1321"></span></td>
							
							<td rel="L1321" class="lines-code chroma"><code class="code-inner">    <span class="nx">DependentSkillRatios</span>: <span class="kt">IDependentSkillRatio</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1322" class="lines-num"><span id="L1322" data-line-number="1322"></span></td>
							
							<td rel="L1322" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintActionMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1323" class="lines-num"><span id="L1323" data-line-number="1323"></span></td>
							
							<td rel="L1323" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintActionMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1324" class="lines-num"><span id="L1324" data-line-number="1324"></span></td>
							
							<td rel="L1324" class="lines-code chroma"><code class="code-inner">    <span class="nx">MovementActionMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1325" class="lines-num"><span id="L1325" data-line-number="1325"></span></td>
							
							<td rel="L1325" class="lines-code chroma"><code class="code-inner">    <span class="nx">MovementActionMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1326" class="lines-num"><span id="L1326" data-line-number="1326"></span></td>
							
							<td rel="L1326" class="lines-code chroma"><code class="code-inner">    <span class="nx">PushUpMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1327" class="lines-num"><span id="L1327" data-line-number="1327"></span></td>
							
							<td rel="L1327" class="lines-code chroma"><code class="code-inner">    <span class="nx">PushUpMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1328" class="lines-num"><span id="L1328" data-line-number="1328"></span></td>
							
							<td rel="L1328" class="lines-code chroma"><code class="code-inner">    <span class="nx">QTELevelMultipliers</span>: <span class="kt">IQTELevelMultiplier</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1329" class="lines-num"><span id="L1329" data-line-number="1329"></span></td>
							
							<td rel="L1329" class="lines-code chroma"><code class="code-inner">    <span class="nx">FistfightAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1330" class="lines-num"><span id="L1330" data-line-number="1330"></span></td>
							
							<td rel="L1330" class="lines-code chroma"><code class="code-inner">    <span class="nx">ThrowAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1331" class="lines-num"><span id="L1331" data-line-number="1331"></span></td>
							
							<td rel="L1331" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1332" class="lines-num"><span id="L1332" data-line-number="1332"></span></td>
							
							<td rel="L1332" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1333" class="lines-num"><span id="L1333" data-line-number="1333"></span></td>
							
							<td rel="L1333" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IDependentSkillRatio</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1334" class="lines-num"><span id="L1334" data-line-number="1334"></span></td>
							
							<td rel="L1334" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1335" class="lines-num"><span id="L1335" data-line-number="1335"></span></td>
							
							<td rel="L1335" class="lines-code chroma"><code class="code-inner">    <span class="nx">Ratio</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1336" class="lines-num"><span id="L1336" data-line-number="1336"></span></td>
							
							<td rel="L1336" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1337" class="lines-num"><span id="L1337" data-line-number="1337"></span></td>
							
							<td rel="L1337" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1338" class="lines-num"><span id="L1338" data-line-number="1338"></span></td>
							
							<td rel="L1338" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1339" class="lines-num"><span id="L1339" data-line-number="1339"></span></td>
							
							<td rel="L1339" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IQTELevelMultiplier</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1340" class="lines-num"><span id="L1340" data-line-number="1340"></span></td>
							
							<td rel="L1340" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1341" class="lines-num"><span id="L1341" data-line-number="1341"></span></td>
							
							<td rel="L1341" class="lines-code chroma"><code class="code-inner">    <span class="nx">Level</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1342" class="lines-num"><span id="L1342" data-line-number="1342"></span></td>
							
							<td rel="L1342" class="lines-code chroma"><code class="code-inner">    <span class="nx">Multiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1343" class="lines-num"><span id="L1343" data-line-number="1343"></span></td>
							
							<td rel="L1343" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1344" class="lines-num"><span id="L1344" data-line-number="1344"></span></td>
							
							<td rel="L1344" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1345" class="lines-num"><span id="L1345" data-line-number="1345"></span></td>
							
							<td rel="L1345" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IVitality</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1346" class="lines-num"><span id="L1346" data-line-number="1346"></span></td>
							
							<td rel="L1346" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1347" class="lines-num"><span id="L1347" data-line-number="1347"></span></td>
							
							<td rel="L1347" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageTakenAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1348" class="lines-num"><span id="L1348" data-line-number="1348"></span></td>
							
							<td rel="L1348" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthNegativeEffect</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1349" class="lines-num"><span id="L1349" data-line-number="1349"></span></td>
							
							<td rel="L1349" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1350" class="lines-num"><span id="L1350" data-line-number="1350"></span></td>
							
							<td rel="L1350" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1351" class="lines-num"><span id="L1351" data-line-number="1351"></span></td>
							
							<td rel="L1351" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHealthSkillProgress</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1352" class="lines-num"><span id="L1352" data-line-number="1352"></span></td>
							
							<td rel="L1352" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1353" class="lines-num"><span id="L1353" data-line-number="1353"></span></td>
							
							<td rel="L1353" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgress</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1354" class="lines-num"><span id="L1354" data-line-number="1354"></span></td>
							
							<td rel="L1354" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1355" class="lines-num"><span id="L1355" data-line-number="1355"></span></td>
							
							<td rel="L1355" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1356" class="lines-num"><span id="L1356" data-line-number="1356"></span></td>
							
							<td rel="L1356" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IStressResistance</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1357" class="lines-num"><span id="L1357" data-line-number="1357"></span></td>
							
							<td rel="L1357" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1358" class="lines-num"><span id="L1358" data-line-number="1358"></span></td>
							
							<td rel="L1358" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthNegativeEffect</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1359" class="lines-num"><span id="L1359" data-line-number="1359"></span></td>
							
							<td rel="L1359" class="lines-code chroma"><code class="code-inner">    <span class="nx">LowHPDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1360" class="lines-num"><span id="L1360" data-line-number="1360"></span></td>
							
							<td rel="L1360" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1361" class="lines-num"><span id="L1361" data-line-number="1361"></span></td>
							
							<td rel="L1361" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1362" class="lines-num"><span id="L1362" data-line-number="1362"></span></td>
							
							<td rel="L1362" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IThrowing</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1363" class="lines-num"><span id="L1363" data-line-number="1363"></span></td>
							
							<td rel="L1363" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1364" class="lines-num"><span id="L1364" data-line-number="1364"></span></td>
							
							<td rel="L1364" class="lines-code chroma"><code class="code-inner">    <span class="nx">ThrowAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1365" class="lines-num"><span id="L1365" data-line-number="1365"></span></td>
							
							<td rel="L1365" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1366" class="lines-num"><span id="L1366" data-line-number="1366"></span></td>
							
							<td rel="L1366" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1367" class="lines-num"><span id="L1367" data-line-number="1367"></span></td>
							
							<td rel="L1367" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRecoilControl</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1368" class="lines-num"><span id="L1368" data-line-number="1368"></span></td>
							
							<td rel="L1368" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1369" class="lines-num"><span id="L1369" data-line-number="1369"></span></td>
							
							<td rel="L1369" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1370" class="lines-num"><span id="L1370" data-line-number="1370"></span></td>
							
							<td rel="L1370" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilBonusPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1371" class="lines-num"><span id="L1371" data-line-number="1371"></span></td>
							
							<td rel="L1371" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1372" class="lines-num"><span id="L1372" data-line-number="1372"></span></td>
							
							<td rel="L1372" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1373" class="lines-num"><span id="L1373" data-line-number="1373"></span></td>
							
							<td rel="L1373" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWeaponSkills</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1374" class="lines-num"><span id="L1374" data-line-number="1374"></span></td>
							
							<td rel="L1374" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1375" class="lines-num"><span id="L1375" data-line-number="1375"></span></td>
							
							<td rel="L1375" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponReloadAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1376" class="lines-num"><span id="L1376" data-line-number="1376"></span></td>
							
							<td rel="L1376" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponShotAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1377" class="lines-num"><span id="L1377" data-line-number="1377"></span></td>
							
							<td rel="L1377" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponFixAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1378" class="lines-num"><span id="L1378" data-line-number="1378"></span></td>
							
							<td rel="L1378" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponChamberAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1379" class="lines-num"><span id="L1379" data-line-number="1379"></span></td>
							
							<td rel="L1379" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1380" class="lines-num"><span id="L1380" data-line-number="1380"></span></td>
							
							<td rel="L1380" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1381" class="lines-num"><span id="L1381" data-line-number="1381"></span></td>
							
							<td rel="L1381" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICovertMovement</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1382" class="lines-num"><span id="L1382" data-line-number="1382"></span></td>
							
							<td rel="L1382" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1383" class="lines-num"><span id="L1383" data-line-number="1383"></span></td>
							
							<td rel="L1383" class="lines-code chroma"><code class="code-inner">    <span class="nx">MovementAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1384" class="lines-num"><span id="L1384" data-line-number="1384"></span></td>
							
							<td rel="L1384" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1385" class="lines-num"><span id="L1385" data-line-number="1385"></span></td>
							
							<td rel="L1385" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1386" class="lines-num"><span id="L1386" data-line-number="1386"></span></td>
							
							<td rel="L1386" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISearch</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1387" class="lines-num"><span id="L1387" data-line-number="1387"></span></td>
							
							<td rel="L1387" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1388" class="lines-num"><span id="L1388" data-line-number="1388"></span></td>
							
							<td rel="L1388" class="lines-code chroma"><code class="code-inner">    <span class="nx">SearchAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1389" class="lines-num"><span id="L1389" data-line-number="1389"></span></td>
							
							<td rel="L1389" class="lines-code chroma"><code class="code-inner">    <span class="nx">FindAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1390" class="lines-num"><span id="L1390" data-line-number="1390"></span></td>
							
							<td rel="L1390" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1391" class="lines-num"><span id="L1391" data-line-number="1391"></span></td>
							
							<td rel="L1391" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1392" class="lines-num"><span id="L1392" data-line-number="1392"></span></td>
							
							<td rel="L1392" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWeaponTreatment</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1393" class="lines-num"><span id="L1393" data-line-number="1393"></span></td>
							
							<td rel="L1393" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1394" class="lines-num"><span id="L1394" data-line-number="1394"></span></td>
							
							<td rel="L1394" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffMaxCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1395" class="lines-num"><span id="L1395" data-line-number="1395"></span></td>
							
							<td rel="L1395" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffSettings</span>: <span class="kt">IBuffSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1396" class="lines-num"><span id="L1396" data-line-number="1396"></span></td>
							
							<td rel="L1396" class="lines-code chroma"><code class="code-inner">    <span class="nx">Counters</span>: <span class="kt">IWeaponTreatmentCounters</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1397" class="lines-num"><span id="L1397" data-line-number="1397"></span></td>
							
							<td rel="L1397" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurLossReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1398" class="lines-num"><span id="L1398" data-line-number="1398"></span></td>
							
							<td rel="L1398" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillPointsPerRepair</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1399" class="lines-num"><span id="L1399" data-line-number="1399"></span></td>
							
							<td rel="L1399" class="lines-code chroma"><code class="code-inner">    <span class="nx">Filter</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1400" class="lines-num"><span id="L1400" data-line-number="1400"></span></td>
							
							<td rel="L1400" class="lines-code chroma"><code class="code-inner">    <span class="nx">WearAmountRepairGunsReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1401" class="lines-num"><span id="L1401" data-line-number="1401"></span></td>
							
							<td rel="L1401" class="lines-code chroma"><code class="code-inner">    <span class="nx">WearChanceRepairGunsReduceEliteLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1402" class="lines-num"><span id="L1402" data-line-number="1402"></span></td>
							
							<td rel="L1402" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1403" class="lines-num"><span id="L1403" data-line-number="1403"></span></td>
							
							<td rel="L1403" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1404" class="lines-num"><span id="L1404" data-line-number="1404"></span></td>
							
							<td rel="L1404" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IWeaponTreatmentCounters</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1405" class="lines-num"><span id="L1405" data-line-number="1405"></span></td>
							
							<td rel="L1405" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1406" class="lines-num"><span id="L1406" data-line-number="1406"></span></td>
							
							<td rel="L1406" class="lines-code chroma"><code class="code-inner">    <span class="nx">firearmsDurability</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1407" class="lines-num"><span id="L1407" data-line-number="1407"></span></td>
							
							<td rel="L1407" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1408" class="lines-num"><span id="L1408" data-line-number="1408"></span></td>
							
							<td rel="L1408" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1409" class="lines-num"><span id="L1409" data-line-number="1409"></span></td>
							
							<td rel="L1409" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBuffSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1410" class="lines-num"><span id="L1410" data-line-number="1410"></span></td>
							
							<td rel="L1410" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1411" class="lines-num"><span id="L1411" data-line-number="1411"></span></td>
							
							<td rel="L1411" class="lines-code chroma"><code class="code-inner">    <span class="nx">CommonBuffChanceLevelBonus</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1412" class="lines-num"><span id="L1412" data-line-number="1412"></span></td>
							
							<td rel="L1412" class="lines-code chroma"><code class="code-inner">    <span class="nx">CommonBuffMinChanceValue</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1413" class="lines-num"><span id="L1413" data-line-number="1413"></span></td>
							
							<td rel="L1413" class="lines-code chroma"><code class="code-inner">    <span class="nx">CurrentDurabilityLossToRemoveBuff?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1414" class="lines-num"><span id="L1414" data-line-number="1414"></span></td>
							
							<td rel="L1414" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxDurabilityLossToRemoveBuff?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1415" class="lines-num"><span id="L1415" data-line-number="1415"></span></td>
							
							<td rel="L1415" class="lines-code chroma"><code class="code-inner">    <span class="nx">RareBuffChanceCoff</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1416" class="lines-num"><span id="L1416" data-line-number="1416"></span></td>
							
							<td rel="L1416" class="lines-code chroma"><code class="code-inner">    <span class="nx">ReceivedDurabilityMaxPercent</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1417" class="lines-num"><span id="L1417" data-line-number="1417"></span></td>
							
							<td rel="L1417" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1418" class="lines-num"><span id="L1418" data-line-number="1418"></span></td>
							
							<td rel="L1418" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1419" class="lines-num"><span id="L1419" data-line-number="1419"></span></td>
							
							<td rel="L1419" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMagDrills</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1420" class="lines-num"><span id="L1420" data-line-number="1420"></span></td>
							
							<td rel="L1420" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1421" class="lines-num"><span id="L1421" data-line-number="1421"></span></td>
							
							<td rel="L1421" class="lines-code chroma"><code class="code-inner">    <span class="nx">RaidLoadedAmmoAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1422" class="lines-num"><span id="L1422" data-line-number="1422"></span></td>
							
							<td rel="L1422" class="lines-code chroma"><code class="code-inner">    <span class="nx">RaidUnloadedAmmoAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1423" class="lines-num"><span id="L1423" data-line-number="1423"></span></td>
							
							<td rel="L1423" class="lines-code chroma"><code class="code-inner">    <span class="nx">MagazineCheckAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1424" class="lines-num"><span id="L1424" data-line-number="1424"></span></td>
							
							<td rel="L1424" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1425" class="lines-num"><span id="L1425" data-line-number="1425"></span></td>
							
							<td rel="L1425" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1426" class="lines-num"><span id="L1426" data-line-number="1426"></span></td>
							
							<td rel="L1426" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IPerception</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1427" class="lines-num"><span id="L1427" data-line-number="1427"></span></td>
							
							<td rel="L1427" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1428" class="lines-num"><span id="L1428" data-line-number="1428"></span></td>
							
							<td rel="L1428" class="lines-code chroma"><code class="code-inner">    <span class="nx">DependentSkillRatios</span>: <span class="kt">ISkillRatio</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1429" class="lines-num"><span id="L1429" data-line-number="1429"></span></td>
							
							<td rel="L1429" class="lines-code chroma"><code class="code-inner">    <span class="nx">OnlineAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1430" class="lines-num"><span id="L1430" data-line-number="1430"></span></td>
							
							<td rel="L1430" class="lines-code chroma"><code class="code-inner">    <span class="nx">UniqueLoot</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1431" class="lines-num"><span id="L1431" data-line-number="1431"></span></td>
							
							<td rel="L1431" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1432" class="lines-num"><span id="L1432" data-line-number="1432"></span></td>
							
							<td rel="L1432" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1433" class="lines-num"><span id="L1433" data-line-number="1433"></span></td>
							
							<td rel="L1433" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISkillRatio</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1434" class="lines-num"><span id="L1434" data-line-number="1434"></span></td>
							
							<td rel="L1434" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1435" class="lines-num"><span id="L1435" data-line-number="1435"></span></td>
							
							<td rel="L1435" class="lines-code chroma"><code class="code-inner">    <span class="nx">Ratio</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1436" class="lines-num"><span id="L1436" data-line-number="1436"></span></td>
							
							<td rel="L1436" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1437" class="lines-num"><span id="L1437" data-line-number="1437"></span></td>
							
							<td rel="L1437" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1438" class="lines-num"><span id="L1438" data-line-number="1438"></span></td>
							
							<td rel="L1438" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1439" class="lines-num"><span id="L1439" data-line-number="1439"></span></td>
							
							<td rel="L1439" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Intellect</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1440" class="lines-num"><span id="L1440" data-line-number="1440"></span></td>
							
							<td rel="L1440" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1441" class="lines-num"><span id="L1441" data-line-number="1441"></span></td>
							
							<td rel="L1441" class="lines-code chroma"><code class="code-inner">    <span class="nx">Counters</span>: <span class="kt">IIntellectCounters</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1442" class="lines-num"><span id="L1442" data-line-number="1442"></span></td>
							
							<td rel="L1442" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExamineAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1443" class="lines-num"><span id="L1443" data-line-number="1443"></span></td>
							
							<td rel="L1443" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgress</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1444" class="lines-num"><span id="L1444" data-line-number="1444"></span></td>
							
							<td rel="L1444" class="lines-code chroma"><code class="code-inner">    <span class="nx">RepairAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1445" class="lines-num"><span id="L1445" data-line-number="1445"></span></td>
							
							<td rel="L1445" class="lines-code chroma"><code class="code-inner">    <span class="nx">WearAmountReducePerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1446" class="lines-num"><span id="L1446" data-line-number="1446"></span></td>
							
							<td rel="L1446" class="lines-code chroma"><code class="code-inner">    <span class="nx">WearChanceReduceEliteLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1447" class="lines-num"><span id="L1447" data-line-number="1447"></span></td>
							
							<td rel="L1447" class="lines-code chroma"><code class="code-inner">    <span class="nx">RepairPointsCostReduction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1448" class="lines-num"><span id="L1448" data-line-number="1448"></span></td>
							
							<td rel="L1448" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1449" class="lines-num"><span id="L1449" data-line-number="1449"></span></td>
							
							<td rel="L1449" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1450" class="lines-num"><span id="L1450" data-line-number="1450"></span></td>
							
							<td rel="L1450" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IIntellectCounters</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1451" class="lines-num"><span id="L1451" data-line-number="1451"></span></td>
							
							<td rel="L1451" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1452" class="lines-num"><span id="L1452" data-line-number="1452"></span></td>
							
							<td rel="L1452" class="lines-code chroma"><code class="code-inner">    <span class="nx">armorDurability</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1453" class="lines-num"><span id="L1453" data-line-number="1453"></span></td>
							
							<td rel="L1453" class="lines-code chroma"><code class="code-inner">    <span class="nx">firearmsDurability</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1454" class="lines-num"><span id="L1454" data-line-number="1454"></span></td>
							
							<td rel="L1454" class="lines-code chroma"><code class="code-inner">    <span class="nx">meleeWeaponDurability</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1455" class="lines-num"><span id="L1455" data-line-number="1455"></span></td>
							
							<td rel="L1455" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1456" class="lines-num"><span id="L1456" data-line-number="1456"></span></td>
							
							<td rel="L1456" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1457" class="lines-num"><span id="L1457" data-line-number="1457"></span></td>
							
							<td rel="L1457" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISkillCounter</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1458" class="lines-num"><span id="L1458" data-line-number="1458"></span></td>
							
							<td rel="L1458" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1459" class="lines-num"><span id="L1459" data-line-number="1459"></span></td>
							
							<td rel="L1459" class="lines-code chroma"><code class="code-inner">    <span class="nx">divisor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1460" class="lines-num"><span id="L1460" data-line-number="1460"></span></td>
							
							<td rel="L1460" class="lines-code chroma"><code class="code-inner">    <span class="nx">points</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1461" class="lines-num"><span id="L1461" data-line-number="1461"></span></td>
							
							<td rel="L1461" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1462" class="lines-num"><span id="L1462" data-line-number="1462"></span></td>
							
							<td rel="L1462" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1463" class="lines-num"><span id="L1463" data-line-number="1463"></span></td>
							
							<td rel="L1463" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IAttention</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1464" class="lines-num"><span id="L1464" data-line-number="1464"></span></td>
							
							<td rel="L1464" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1465" class="lines-num"><span id="L1465" data-line-number="1465"></span></td>
							
							<td rel="L1465" class="lines-code chroma"><code class="code-inner">    <span class="nx">DependentSkillRatios</span>: <span class="kt">ISkillRatio</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1466" class="lines-num"><span id="L1466" data-line-number="1466"></span></td>
							
							<td rel="L1466" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExamineWithInstruction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1467" class="lines-num"><span id="L1467" data-line-number="1467"></span></td>
							
							<td rel="L1467" class="lines-code chroma"><code class="code-inner">    <span class="nx">FindActionFalse</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1468" class="lines-num"><span id="L1468" data-line-number="1468"></span></td>
							
							<td rel="L1468" class="lines-code chroma"><code class="code-inner">    <span class="nx">FindActionTrue</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1469" class="lines-num"><span id="L1469" data-line-number="1469"></span></td>
							
							<td rel="L1469" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1470" class="lines-num"><span id="L1470" data-line-number="1470"></span></td>
							
							<td rel="L1470" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1471" class="lines-num"><span id="L1471" data-line-number="1471"></span></td>
							
							<td rel="L1471" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICharisma</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1472" class="lines-num"><span id="L1472" data-line-number="1472"></span></td>
							
							<td rel="L1472" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1473" class="lines-num"><span id="L1473" data-line-number="1473"></span></td>
							
							<td rel="L1473" class="lines-code chroma"><code class="code-inner">    <span class="nx">BonusSettings</span>: <span class="kt">IBonusSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1474" class="lines-num"><span id="L1474" data-line-number="1474"></span></td>
							
							<td rel="L1474" class="lines-code chroma"><code class="code-inner">    <span class="nx">Counters</span>: <span class="kt">ICharismaSkillCounters</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1475" class="lines-num"><span id="L1475" data-line-number="1475"></span></td>
							
							<td rel="L1475" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgressInt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1476" class="lines-num"><span id="L1476" data-line-number="1476"></span></td>
							
							<td rel="L1476" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgressAtn</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1477" class="lines-num"><span id="L1477" data-line-number="1477"></span></td>
							
							<td rel="L1477" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgressPer</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1478" class="lines-num"><span id="L1478" data-line-number="1478"></span></td>
							
							<td rel="L1478" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1479" class="lines-num"><span id="L1479" data-line-number="1479"></span></td>
							
							<td rel="L1479" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1480" class="lines-num"><span id="L1480" data-line-number="1480"></span></td>
							
							<td rel="L1480" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ICharismaSkillCounters</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1481" class="lines-num"><span id="L1481" data-line-number="1481"></span></td>
							
							<td rel="L1481" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1482" class="lines-num"><span id="L1482" data-line-number="1482"></span></td>
							
							<td rel="L1482" class="lines-code chroma"><code class="code-inner">    <span class="nx">insuranceCost</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1483" class="lines-num"><span id="L1483" data-line-number="1483"></span></td>
							
							<td rel="L1483" class="lines-code chroma"><code class="code-inner">    <span class="nx">repairCost</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1484" class="lines-num"><span id="L1484" data-line-number="1484"></span></td>
							
							<td rel="L1484" class="lines-code chroma"><code class="code-inner">    <span class="nx">repeatableQuestCompleteCount</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1485" class="lines-num"><span id="L1485" data-line-number="1485"></span></td>
							
							<td rel="L1485" class="lines-code chroma"><code class="code-inner">    <span class="nx">restoredHealthCost</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1486" class="lines-num"><span id="L1486" data-line-number="1486"></span></td>
							
							<td rel="L1486" class="lines-code chroma"><code class="code-inner">    <span class="nx">scavCaseCost</span>: <span class="kt">ISkillCounter</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1487" class="lines-num"><span id="L1487" data-line-number="1487"></span></td>
							
							<td rel="L1487" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1488" class="lines-num"><span id="L1488" data-line-number="1488"></span></td>
							
							<td rel="L1488" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1489" class="lines-num"><span id="L1489" data-line-number="1489"></span></td>
							
							<td rel="L1489" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBonusSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1490" class="lines-num"><span id="L1490" data-line-number="1490"></span></td>
							
							<td rel="L1490" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1491" class="lines-num"><span id="L1491" data-line-number="1491"></span></td>
							
							<td rel="L1491" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteBonusSettings</span>: <span class="kt">IEliteBonusSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1492" class="lines-num"><span id="L1492" data-line-number="1492"></span></td>
							
							<td rel="L1492" class="lines-code chroma"><code class="code-inner">    <span class="nx">LevelBonusSettings</span>: <span class="kt">ILevelBonusSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1493" class="lines-num"><span id="L1493" data-line-number="1493"></span></td>
							
							<td rel="L1493" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1494" class="lines-num"><span id="L1494" data-line-number="1494"></span></td>
							
							<td rel="L1494" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1495" class="lines-num"><span id="L1495" data-line-number="1495"></span></td>
							
							<td rel="L1495" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEliteBonusSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1496" class="lines-num"><span id="L1496" data-line-number="1496"></span></td>
							
							<td rel="L1496" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1497" class="lines-num"><span id="L1497" data-line-number="1497"></span></td>
							
							<td rel="L1497" class="lines-code chroma"><code class="code-inner">    <span class="nx">FenceStandingLossDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1498" class="lines-num"><span id="L1498" data-line-number="1498"></span></td>
							
							<td rel="L1498" class="lines-code chroma"><code class="code-inner">    <span class="nx">RepeatableQuestExtraCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1499" class="lines-num"><span id="L1499" data-line-number="1499"></span></td>
							
							<td rel="L1499" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScavCaseDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1500" class="lines-num"><span id="L1500" data-line-number="1500"></span></td>
							
							<td rel="L1500" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1501" class="lines-num"><span id="L1501" data-line-number="1501"></span></td>
							
							<td rel="L1501" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1502" class="lines-num"><span id="L1502" data-line-number="1502"></span></td>
							
							<td rel="L1502" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILevelBonusSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1503" class="lines-num"><span id="L1503" data-line-number="1503"></span></td>
							
							<td rel="L1503" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1504" class="lines-num"><span id="L1504" data-line-number="1504"></span></td>
							
							<td rel="L1504" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthRestoreDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1505" class="lines-num"><span id="L1505" data-line-number="1505"></span></td>
							
							<td rel="L1505" class="lines-code chroma"><code class="code-inner">    <span class="nx">HealthRestoreTraderDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1506" class="lines-num"><span id="L1506" data-line-number="1506"></span></td>
							
							<td rel="L1506" class="lines-code chroma"><code class="code-inner">    <span class="nx">InsuranceDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1507" class="lines-num"><span id="L1507" data-line-number="1507"></span></td>
							
							<td rel="L1507" class="lines-code chroma"><code class="code-inner">    <span class="nx">InsuranceTraderDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1508" class="lines-num"><span id="L1508" data-line-number="1508"></span></td>
							
							<td rel="L1508" class="lines-code chroma"><code class="code-inner">    <span class="nx">PaidExitDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1509" class="lines-num"><span id="L1509" data-line-number="1509"></span></td>
							
							<td rel="L1509" class="lines-code chroma"><code class="code-inner">    <span class="nx">RepeatableQuestChangeDiscount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1510" class="lines-num"><span id="L1510" data-line-number="1510"></span></td>
							
							<td rel="L1510" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1511" class="lines-num"><span id="L1511" data-line-number="1511"></span></td>
							
							<td rel="L1511" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1512" class="lines-num"><span id="L1512" data-line-number="1512"></span></td>
							
							<td rel="L1512" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMemory</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1513" class="lines-num"><span id="L1513" data-line-number="1513"></span></td>
							
							<td rel="L1513" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1514" class="lines-num"><span id="L1514" data-line-number="1514"></span></td>
							
							<td rel="L1514" class="lines-code chroma"><code class="code-inner">    <span class="nx">AnySkillUp</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1515" class="lines-num"><span id="L1515" data-line-number="1515"></span></td>
							
							<td rel="L1515" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgress</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1516" class="lines-num"><span id="L1516" data-line-number="1516"></span></td>
							
							<td rel="L1516" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1517" class="lines-num"><span id="L1517" data-line-number="1517"></span></td>
							
							<td rel="L1517" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1518" class="lines-num"><span id="L1518" data-line-number="1518"></span></td>
							
							<td rel="L1518" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISurgery</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1519" class="lines-num"><span id="L1519" data-line-number="1519"></span></td>
							
							<td rel="L1519" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1520" class="lines-num"><span id="L1520" data-line-number="1520"></span></td>
							
							<td rel="L1520" class="lines-code chroma"><code class="code-inner">    <span class="nx">SurgeryAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1521" class="lines-num"><span id="L1521" data-line-number="1521"></span></td>
							
							<td rel="L1521" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillProgress</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1522" class="lines-num"><span id="L1522" data-line-number="1522"></span></td>
							
							<td rel="L1522" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1523" class="lines-num"><span id="L1523" data-line-number="1523"></span></td>
							
							<td rel="L1523" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1524" class="lines-num"><span id="L1524" data-line-number="1524"></span></td>
							
							<td rel="L1524" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IAimDrills</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1525" class="lines-num"><span id="L1525" data-line-number="1525"></span></td>
							
							<td rel="L1525" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1526" class="lines-num"><span id="L1526" data-line-number="1526"></span></td>
							
							<td rel="L1526" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponShotAction</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1527" class="lines-num"><span id="L1527" data-line-number="1527"></span></td>
							
							<td rel="L1527" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1528" class="lines-num"><span id="L1528" data-line-number="1528"></span></td>
							
							<td rel="L1528" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1529" class="lines-num"><span id="L1529" data-line-number="1529"></span></td>
							
							<td rel="L1529" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ITroubleShooting</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1530" class="lines-num"><span id="L1530" data-line-number="1530"></span></td>
							
							<td rel="L1530" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1531" class="lines-num"><span id="L1531" data-line-number="1531"></span></td>
							
							<td rel="L1531" class="lines-code chroma"><code class="code-inner">    <span class="nx">MalfRepairSpeedBonusPerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1532" class="lines-num"><span id="L1532" data-line-number="1532"></span></td>
							
							<td rel="L1532" class="lines-code chroma"><code class="code-inner">    <span class="nx">SkillPointsPerMalfFix</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1533" class="lines-num"><span id="L1533" data-line-number="1533"></span></td>
							
							<td rel="L1533" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteDurabilityChanceReduceMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1534" class="lines-num"><span id="L1534" data-line-number="1534"></span></td>
							
							<td rel="L1534" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteAmmoChanceReduceMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1535" class="lines-num"><span id="L1535" data-line-number="1535"></span></td>
							
							<td rel="L1535" class="lines-code chroma"><code class="code-inner">    <span class="nx">EliteMagChanceReduceMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1536" class="lines-num"><span id="L1536" data-line-number="1536"></span></td>
							
							<td rel="L1536" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1537" class="lines-num"><span id="L1537" data-line-number="1537"></span></td>
							
							<td rel="L1537" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1538" class="lines-num"><span id="L1538" data-line-number="1538"></span></td>
							
							<td rel="L1538" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IAiming</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1539" class="lines-num"><span id="L1539" data-line-number="1539"></span></td>
							
							<td rel="L1539" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1540" class="lines-num"><span id="L1540" data-line-number="1540"></span></td>
							
							<td rel="L1540" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProceduralIntensityByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1541" class="lines-num"><span id="L1541" data-line-number="1541"></span></td>
							
							<td rel="L1541" class="lines-code chroma"><code class="code-inner">    <span class="nx">AimProceduralIntensity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1542" class="lines-num"><span id="L1542" data-line-number="1542"></span></td>
							
							<td rel="L1542" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeavyWeight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1543" class="lines-num"><span id="L1543" data-line-number="1543"></span></td>
							
							<td rel="L1543" class="lines-code chroma"><code class="code-inner">    <span class="nx">LightWeight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1544" class="lines-num"><span id="L1544" data-line-number="1544"></span></td>
							
							<td rel="L1544" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxTimeHeavy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1545" class="lines-num"><span id="L1545" data-line-number="1545"></span></td>
							
							<td rel="L1545" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinTimeHeavy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1546" class="lines-num"><span id="L1546" data-line-number="1546"></span></td>
							
							<td rel="L1546" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxTimeLight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1547" class="lines-num"><span id="L1547" data-line-number="1547"></span></td>
							
							<td rel="L1547" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinTimeLight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1548" class="lines-num"><span id="L1548" data-line-number="1548"></span></td>
							
							<td rel="L1548" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilScaling</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1549" class="lines-num"><span id="L1549" data-line-number="1549"></span></td>
							
							<td rel="L1549" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilDamping</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1550" class="lines-num"><span id="L1550" data-line-number="1550"></span></td>
							
							<td rel="L1550" class="lines-code chroma"><code class="code-inner">    <span class="nx">CameraSnapGlobalMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1551" class="lines-num"><span id="L1551" data-line-number="1551"></span></td>
							
							<td rel="L1551" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilXIntensityByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1552" class="lines-num"><span id="L1552" data-line-number="1552"></span></td>
							
							<td rel="L1552" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilYIntensityByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1553" class="lines-num"><span id="L1553" data-line-number="1553"></span></td>
							
							<td rel="L1553" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilZIntensityByPose</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1554" class="lines-num"><span id="L1554" data-line-number="1554"></span></td>
							
							<td rel="L1554" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilCrank</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1555" class="lines-num"><span id="L1555" data-line-number="1555"></span></td>
							
							<td rel="L1555" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilHandDamping</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1556" class="lines-num"><span id="L1556" data-line-number="1556"></span></td>
							
							<td rel="L1556" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilConvergenceMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1557" class="lines-num"><span id="L1557" data-line-number="1557"></span></td>
							
							<td rel="L1557" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilVertBonus</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1558" class="lines-num"><span id="L1558" data-line-number="1558"></span></td>
							
							<td rel="L1558" class="lines-code chroma"><code class="code-inner">    <span class="nx">RecoilBackBonus</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1559" class="lines-num"><span id="L1559" data-line-number="1559"></span></td>
							
							<td rel="L1559" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1560" class="lines-num"><span id="L1560" data-line-number="1560"></span></td>
							
							<td rel="L1560" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1561" class="lines-num"><span id="L1561" data-line-number="1561"></span></td>
							
							<td rel="L1561" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IMalfunction</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1562" class="lines-num"><span id="L1562" data-line-number="1562"></span></td>
							
							<td rel="L1562" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1563" class="lines-num"><span id="L1563" data-line-number="1563"></span></td>
							
							<td rel="L1563" class="lines-code chroma"><code class="code-inner">    <span class="nx">AmmoMalfChanceMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1564" class="lines-num"><span id="L1564" data-line-number="1564"></span></td>
							
							<td rel="L1564" class="lines-code chroma"><code class="code-inner">    <span class="nx">MagazineMalfChanceMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1565" class="lines-num"><span id="L1565" data-line-number="1565"></span></td>
							
							<td rel="L1565" class="lines-code chroma"><code class="code-inner">    <span class="nx">MalfRepairHardSlideMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1566" class="lines-num"><span id="L1566" data-line-number="1566"></span></td>
							
							<td rel="L1566" class="lines-code chroma"><code class="code-inner">    <span class="nx">MalfRepairOneHandBrokenMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1567" class="lines-num"><span id="L1567" data-line-number="1567"></span></td>
							
							<td rel="L1567" class="lines-code chroma"><code class="code-inner">    <span class="nx">MalfRepairTwoHandsBrokenMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1568" class="lines-num"><span id="L1568" data-line-number="1568"></span></td>
							
							<td rel="L1568" class="lines-code chroma"><code class="code-inner">    <span class="nx">AllowMalfForBots</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1569" class="lines-num"><span id="L1569" data-line-number="1569"></span></td>
							
							<td rel="L1569" class="lines-code chroma"><code class="code-inner">    <span class="nx">ShowGlowAttemptsCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1570" class="lines-num"><span id="L1570" data-line-number="1570"></span></td>
							
							<td rel="L1570" class="lines-code chroma"><code class="code-inner">    <span class="nx">OutToIdleSpeedMultForPistol</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1571" class="lines-num"><span id="L1571" data-line-number="1571"></span></td>
							
							<td rel="L1571" class="lines-code chroma"><code class="code-inner">    <span class="nx">IdleToOutSpeedMultOnMalf</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1572" class="lines-num"><span id="L1572" data-line-number="1572"></span></td>
							
							<td rel="L1572" class="lines-code chroma"><code class="code-inner">    <span class="nx">TimeToQuickdrawPistol</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1573" class="lines-num"><span id="L1573" data-line-number="1573"></span></td>
							
							<td rel="L1573" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurRangeToIgnoreMalfs</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1574" class="lines-num"><span id="L1574" data-line-number="1574"></span></td>
							
							<td rel="L1574" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurFeedWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1575" class="lines-num"><span id="L1575" data-line-number="1575"></span></td>
							
							<td rel="L1575" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurMisfireWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1576" class="lines-num"><span id="L1576" data-line-number="1576"></span></td>
							
							<td rel="L1576" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurJamWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1577" class="lines-num"><span id="L1577" data-line-number="1577"></span></td>
							
							<td rel="L1577" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurSoftSlideWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1578" class="lines-num"><span id="L1578" data-line-number="1578"></span></td>
							
							<td rel="L1578" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurHardSlideMinWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1579" class="lines-num"><span id="L1579" data-line-number="1579"></span></td>
							
							<td rel="L1579" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurHardSlideMaxWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1580" class="lines-num"><span id="L1580" data-line-number="1580"></span></td>
							
							<td rel="L1580" class="lines-code chroma"><code class="code-inner">    <span class="nx">AmmoMisfireWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1581" class="lines-num"><span id="L1581" data-line-number="1581"></span></td>
							
							<td rel="L1581" class="lines-code chroma"><code class="code-inner">    <span class="nx">AmmoFeedWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1582" class="lines-num"><span id="L1582" data-line-number="1582"></span></td>
							
							<td rel="L1582" class="lines-code chroma"><code class="code-inner">    <span class="nx">AmmoJamWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1583" class="lines-num"><span id="L1583" data-line-number="1583"></span></td>
							
							<td rel="L1583" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatFeedWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1584" class="lines-num"><span id="L1584" data-line-number="1584"></span></td>
							
							<td rel="L1584" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatJamWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1585" class="lines-num"><span id="L1585" data-line-number="1585"></span></td>
							
							<td rel="L1585" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatSoftSlideWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1586" class="lines-num"><span id="L1586" data-line-number="1586"></span></td>
							
							<td rel="L1586" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatHardSlideMinWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1587" class="lines-num"><span id="L1587" data-line-number="1587"></span></td>
							
							<td rel="L1587" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatHardSlideMaxWt</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1588" class="lines-num"><span id="L1588" data-line-number="1588"></span></td>
							
							<td rel="L1588" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1589" class="lines-num"><span id="L1589" data-line-number="1589"></span></td>
							
							<td rel="L1589" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1590" class="lines-num"><span id="L1590" data-line-number="1590"></span></td>
							
							<td rel="L1590" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IOverheat</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1591" class="lines-num"><span id="L1591" data-line-number="1591"></span></td>
							
							<td rel="L1591" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1592" class="lines-num"><span id="L1592" data-line-number="1592"></span></td>
							
							<td rel="L1592" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1593" class="lines-num"><span id="L1593" data-line-number="1593"></span></td>
							
							<td rel="L1593" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1594" class="lines-num"><span id="L1594" data-line-number="1594"></span></td>
							
							<td rel="L1594" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatProblemsStart</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1595" class="lines-num"><span id="L1595" data-line-number="1595"></span></td>
							
							<td rel="L1595" class="lines-code chroma"><code class="code-inner">    <span class="nx">ModHeatFactor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1596" class="lines-num"><span id="L1596" data-line-number="1596"></span></td>
							
							<td rel="L1596" class="lines-code chroma"><code class="code-inner">    <span class="nx">ModCoolFactor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1597" class="lines-num"><span id="L1597" data-line-number="1597"></span></td>
							
							<td rel="L1597" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinWearOnOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1598" class="lines-num"><span id="L1598" data-line-number="1598"></span></td>
							
							<td rel="L1598" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxWearOnOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1599" class="lines-num"><span id="L1599" data-line-number="1599"></span></td>
							
							<td rel="L1599" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinWearOnMaxOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1600" class="lines-num"><span id="L1600" data-line-number="1600"></span></td>
							
							<td rel="L1600" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxWearOnMaxOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1601" class="lines-num"><span id="L1601" data-line-number="1601"></span></td>
							
							<td rel="L1601" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverheatWearLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1602" class="lines-num"><span id="L1602" data-line-number="1602"></span></td>
							
							<td rel="L1602" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxCOIIncreaseMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1603" class="lines-num"><span id="L1603" data-line-number="1603"></span></td>
							
							<td rel="L1603" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinMalfChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1604" class="lines-num"><span id="L1604" data-line-number="1604"></span></td>
							
							<td rel="L1604" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxMalfChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1605" class="lines-num"><span id="L1605" data-line-number="1605"></span></td>
							
							<td rel="L1605" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurReduceMinMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1606" class="lines-num"><span id="L1606" data-line-number="1606"></span></td>
							
							<td rel="L1606" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurReduceMaxMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1607" class="lines-num"><span id="L1607" data-line-number="1607"></span></td>
							
							<td rel="L1607" class="lines-code chroma"><code class="code-inner">    <span class="nx">BarrelMoveRndDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1608" class="lines-num"><span id="L1608" data-line-number="1608"></span></td>
							
							<td rel="L1608" class="lines-code chroma"><code class="code-inner">    <span class="nx">BarrelMoveMaxMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1609" class="lines-num"><span id="L1609" data-line-number="1609"></span></td>
							
							<td rel="L1609" class="lines-code chroma"><code class="code-inner">    <span class="nx">FireratePitchMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1610" class="lines-num"><span id="L1610" data-line-number="1610"></span></td>
							
							<td rel="L1610" class="lines-code chroma"><code class="code-inner">    <span class="nx">FirerateReduceMinMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1611" class="lines-num"><span id="L1611" data-line-number="1611"></span></td>
							
							<td rel="L1611" class="lines-code chroma"><code class="code-inner">    <span class="nx">FirerateReduceMaxMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1612" class="lines-num"><span id="L1612" data-line-number="1612"></span></td>
							
							<td rel="L1612" class="lines-code chroma"><code class="code-inner">    <span class="nx">FirerateOverheatBorder</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1613" class="lines-num"><span id="L1613" data-line-number="1613"></span></td>
							
							<td rel="L1613" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnableSlideOnMaxOverheat</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1614" class="lines-num"><span id="L1614" data-line-number="1614"></span></td>
							
							<td rel="L1614" class="lines-code chroma"><code class="code-inner">    <span class="nx">StartSlideOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1615" class="lines-num"><span id="L1615" data-line-number="1615"></span></td>
							
							<td rel="L1615" class="lines-code chroma"><code class="code-inner">    <span class="nx">FixSlideOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1616" class="lines-num"><span id="L1616" data-line-number="1616"></span></td>
							
							<td rel="L1616" class="lines-code chroma"><code class="code-inner">    <span class="nx">AutoshotMinOverheat</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1617" class="lines-num"><span id="L1617" data-line-number="1617"></span></td>
							
							<td rel="L1617" class="lines-code chroma"><code class="code-inner">    <span class="nx">AutoshotChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1618" class="lines-num"><span id="L1618" data-line-number="1618"></span></td>
							
							<td rel="L1618" class="lines-code chroma"><code class="code-inner">    <span class="nx">AutoshotPossibilityDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1619" class="lines-num"><span id="L1619" data-line-number="1619"></span></td>
							
							<td rel="L1619" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxOverheatCoolCoef</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1620" class="lines-num"><span id="L1620" data-line-number="1620"></span></td>
							
							<td rel="L1620" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1621" class="lines-num"><span id="L1621" data-line-number="1621"></span></td>
							
							<td rel="L1621" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1622" class="lines-num"><span id="L1622" data-line-number="1622"></span></td>
							
							<td rel="L1622" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IFenceSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1623" class="lines-num"><span id="L1623" data-line-number="1623"></span></td>
							
							<td rel="L1623" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1624" class="lines-num"><span id="L1624" data-line-number="1624"></span></td>
							
							<td rel="L1624" class="lines-code chroma"><code class="code-inner">    <span class="nx">FenceId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1625" class="lines-num"><span id="L1625" data-line-number="1625"></span></td>
							
							<td rel="L1625" class="lines-code chroma"><code class="code-inner">    <span class="nx">Levels</span>: <span class="kt">Record</span><span class="p">&lt;</span><span class="nt">string</span><span class="err">,</span> <span class="na">IFenceLevel</span><span class="p"></span><span class="p">&gt;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1626" class="lines-num"><span id="L1626" data-line-number="1626"></span></td>
							
							<td rel="L1626" class="lines-code chroma"><code class="code-inner">    <span class="nx">paidExitStandingNumerator</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1627" class="lines-num"><span id="L1627" data-line-number="1627"></span></td>
							
							<td rel="L1627" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1628" class="lines-num"><span id="L1628" data-line-number="1628"></span></td>
							
							<td rel="L1628" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1629" class="lines-num"><span id="L1629" data-line-number="1629"></span></td>
							
							<td rel="L1629" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IFenceLevel</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1630" class="lines-num"><span id="L1630" data-line-number="1630"></span></td>
							
							<td rel="L1630" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1631" class="lines-num"><span id="L1631" data-line-number="1631"></span></td>
							
							<td rel="L1631" class="lines-code chroma"><code class="code-inner">    <span class="nx">SavageCooldownModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1632" class="lines-num"><span id="L1632" data-line-number="1632"></span></td>
							
							<td rel="L1632" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScavCaseTimeModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1633" class="lines-num"><span id="L1633" data-line-number="1633"></span></td>
							
							<td rel="L1633" class="lines-code chroma"><code class="code-inner">    <span class="nx">PaidExitCostModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1634" class="lines-num"><span id="L1634" data-line-number="1634"></span></td>
							
							<td rel="L1634" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotFollowChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1635" class="lines-num"><span id="L1635" data-line-number="1635"></span></td>
							
							<td rel="L1635" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScavEquipmentSpawnChanceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1636" class="lines-num"><span id="L1636" data-line-number="1636"></span></td>
							
							<td rel="L1636" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1637" class="lines-num"><span id="L1637" data-line-number="1637"></span></td>
							
							<td rel="L1637" class="lines-code chroma"><code class="code-inner">    <span class="nx">HostileBosses</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1638" class="lines-num"><span id="L1638" data-line-number="1638"></span></td>
							
							<td rel="L1638" class="lines-code chroma"><code class="code-inner">    <span class="nx">HostileScavs</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1639" class="lines-num"><span id="L1639" data-line-number="1639"></span></td>
							
							<td rel="L1639" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScavAttackSupport</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1640" class="lines-num"><span id="L1640" data-line-number="1640"></span></td>
							
							<td rel="L1640" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExfiltrationPriceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1641" class="lines-num"><span id="L1641" data-line-number="1641"></span></td>
							
							<td rel="L1641" class="lines-code chroma"><code class="code-inner">    <span class="nx">AvailableExits</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1642" class="lines-num"><span id="L1642" data-line-number="1642"></span></td>
							
							<td rel="L1642" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotApplySilenceChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1643" class="lines-num"><span id="L1643" data-line-number="1643"></span></td>
							
							<td rel="L1643" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotGetInCoverChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1644" class="lines-num"><span id="L1644" data-line-number="1644"></span></td>
							
							<td rel="L1644" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotHelpChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1645" class="lines-num"><span id="L1645" data-line-number="1645"></span></td>
							
							<td rel="L1645" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpreadoutChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1646" class="lines-num"><span id="L1646" data-line-number="1646"></span></td>
							
							<td rel="L1646" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotStopChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1647" class="lines-num"><span id="L1647" data-line-number="1647"></span></td>
							
							<td rel="L1647" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriceModTaxi</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1648" class="lines-num"><span id="L1648" data-line-number="1648"></span></td>
							
							<td rel="L1648" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriceModDelivery</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1649" class="lines-num"><span id="L1649" data-line-number="1649"></span></td>
							
							<td rel="L1649" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriceModCleanUp</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1650" class="lines-num"><span id="L1650" data-line-number="1650"></span></td>
							
							<td rel="L1650" class="lines-code chroma"><code class="code-inner">    <span class="nx">DeliveryGridSize</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1651" class="lines-num"><span id="L1651" data-line-number="1651"></span></td>
							
							<td rel="L1651" class="lines-code chroma"><code class="code-inner">    <span class="nx">CanInteractWithBtr</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1652" class="lines-num"><span id="L1652" data-line-number="1652"></span></td>
							
							<td rel="L1652" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1653" class="lines-num"><span id="L1653" data-line-number="1653"></span></td>
							
							<td rel="L1653" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1654" class="lines-num"><span id="L1654" data-line-number="1654"></span></td>
							
							<td rel="L1654" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IInertia</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1655" class="lines-num"><span id="L1655" data-line-number="1655"></span></td>
							
							<td rel="L1655" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1656" class="lines-num"><span id="L1656" data-line-number="1656"></span></td>
							
							<td rel="L1656" class="lines-code chroma"><code class="code-inner">    <span class="nx">InertiaLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1657" class="lines-num"><span id="L1657" data-line-number="1657"></span></td>
							
							<td rel="L1657" class="lines-code chroma"><code class="code-inner">    <span class="nx">InertiaLimitsStep</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1658" class="lines-num"><span id="L1658" data-line-number="1658"></span></td>
							
							<td rel="L1658" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExitMovementStateSpeedThreshold</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1659" class="lines-num"><span id="L1659" data-line-number="1659"></span></td>
							
							<td rel="L1659" class="lines-code chroma"><code class="code-inner">    <span class="nx">WalkInertia</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1660" class="lines-num"><span id="L1660" data-line-number="1660"></span></td>
							
							<td rel="L1660" class="lines-code chroma"><code class="code-inner">    <span class="nx">FallThreshold</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1661" class="lines-num"><span id="L1661" data-line-number="1661"></span></td>
							
							<td rel="L1661" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpeedLimitAfterFallMin</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1662" class="lines-num"><span id="L1662" data-line-number="1662"></span></td>
							
							<td rel="L1662" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpeedLimitAfterFallMax</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1663" class="lines-num"><span id="L1663" data-line-number="1663"></span></td>
							
							<td rel="L1663" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpeedLimitDurationMin</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1664" class="lines-num"><span id="L1664" data-line-number="1664"></span></td>
							
							<td rel="L1664" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpeedLimitDurationMax</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1665" class="lines-num"><span id="L1665" data-line-number="1665"></span></td>
							
							<td rel="L1665" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpeedInertiaAfterJump</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1666" class="lines-num"><span id="L1666" data-line-number="1666"></span></td>
							
							<td rel="L1666" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseJumpPenaltyDuration</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1667" class="lines-num"><span id="L1667" data-line-number="1667"></span></td>
							
							<td rel="L1667" class="lines-code chroma"><code class="code-inner">    <span class="nx">DurationPower</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1668" class="lines-num"><span id="L1668" data-line-number="1668"></span></td>
							
							<td rel="L1668" class="lines-code chroma"><code class="code-inner">    <span class="nx">BaseJumpPenalty</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1669" class="lines-num"><span id="L1669" data-line-number="1669"></span></td>
							
							<td rel="L1669" class="lines-code chroma"><code class="code-inner">    <span class="nx">PenaltyPower</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1670" class="lines-num"><span id="L1670" data-line-number="1670"></span></td>
							
							<td rel="L1670" class="lines-code chroma"><code class="code-inner">    <span class="nx">InertiaTiltCurveMin</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1671" class="lines-num"><span id="L1671" data-line-number="1671"></span></td>
							
							<td rel="L1671" class="lines-code chroma"><code class="code-inner">    <span class="nx">InertiaTiltCurveMax</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1672" class="lines-num"><span id="L1672" data-line-number="1672"></span></td>
							
							<td rel="L1672" class="lines-code chroma"><code class="code-inner">    <span class="nx">InertiaBackwardCoef</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1673" class="lines-num"><span id="L1673" data-line-number="1673"></span></td>
							
							<td rel="L1673" class="lines-code chroma"><code class="code-inner">    <span class="nx">TiltInertiaMaxSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1674" class="lines-num"><span id="L1674" data-line-number="1674"></span></td>
							
							<td rel="L1674" class="lines-code chroma"><code class="code-inner">    <span class="nx">TiltStartSideBackSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1675" class="lines-num"><span id="L1675" data-line-number="1675"></span></td>
							
							<td rel="L1675" class="lines-code chroma"><code class="code-inner">    <span class="nx">TiltMaxSideBackSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1676" class="lines-num"><span id="L1676" data-line-number="1676"></span></td>
							
							<td rel="L1676" class="lines-code chroma"><code class="code-inner">    <span class="nx">TiltAcceleration</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1677" class="lines-num"><span id="L1677" data-line-number="1677"></span></td>
							
							<td rel="L1677" class="lines-code chroma"><code class="code-inner">    <span class="nx">AverageRotationFrameSpan</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1678" class="lines-num"><span id="L1678" data-line-number="1678"></span></td>
							
							<td rel="L1678" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintSpeedInertiaCurveMin</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1679" class="lines-num"><span id="L1679" data-line-number="1679"></span></td>
							
							<td rel="L1679" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintSpeedInertiaCurveMax</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1680" class="lines-num"><span id="L1680" data-line-number="1680"></span></td>
							
							<td rel="L1680" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintBrakeInertia</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1681" class="lines-num"><span id="L1681" data-line-number="1681"></span></td>
							
							<td rel="L1681" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintTransitionMotionPreservation</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1682" class="lines-num"><span id="L1682" data-line-number="1682"></span></td>
							
							<td rel="L1682" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponFlipSpeed</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1683" class="lines-num"><span id="L1683" data-line-number="1683"></span></td>
							
							<td rel="L1683" class="lines-code chroma"><code class="code-inner">    <span class="nx">PreSprintAccelerationLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1684" class="lines-num"><span id="L1684" data-line-number="1684"></span></td>
							
							<td rel="L1684" class="lines-code chroma"><code class="code-inner">    <span class="nx">SprintAccelerationLimits</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1685" class="lines-num"><span id="L1685" data-line-number="1685"></span></td>
							
							<td rel="L1685" class="lines-code chroma"><code class="code-inner">    <span class="nx">SideTime</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1686" class="lines-num"><span id="L1686" data-line-number="1686"></span></td>
							
							<td rel="L1686" class="lines-code chroma"><code class="code-inner">    <span class="nx">DiagonalTime</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1687" class="lines-num"><span id="L1687" data-line-number="1687"></span></td>
							
							<td rel="L1687" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxTimeWithoutInput</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1688" class="lines-num"><span id="L1688" data-line-number="1688"></span></td>
							
							<td rel="L1688" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinDirectionBlendTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1689" class="lines-num"><span id="L1689" data-line-number="1689"></span></td>
							
							<td rel="L1689" class="lines-code chroma"><code class="code-inner">    <span class="nx">MoveTimeRange</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1690" class="lines-num"><span id="L1690" data-line-number="1690"></span></td>
							
							<td rel="L1690" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProneDirectionAccelerationRange</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1691" class="lines-num"><span id="L1691" data-line-number="1691"></span></td>
							
							<td rel="L1691" class="lines-code chroma"><code class="code-inner">    <span class="nx">ProneSpeedAccelerationRange</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1692" class="lines-num"><span id="L1692" data-line-number="1692"></span></td>
							
							<td rel="L1692" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinMovementAccelerationRangeRight</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1693" class="lines-num"><span id="L1693" data-line-number="1693"></span></td>
							
							<td rel="L1693" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxMovementAccelerationRangeRight</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1694" class="lines-num"><span id="L1694" data-line-number="1694"></span></td>
							
							<td rel="L1694" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1695" class="lines-num"><span id="L1695" data-line-number="1695"></span></td>
							
							<td rel="L1695" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1696" class="lines-num"><span id="L1696" data-line-number="1696"></span></td>
							
							<td rel="L1696" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBallistic</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1697" class="lines-num"><span id="L1697" data-line-number="1697"></span></td>
							
							<td rel="L1697" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1698" class="lines-num"><span id="L1698" data-line-number="1698"></span></td>
							
							<td rel="L1698" class="lines-code chroma"><code class="code-inner">    <span class="nx">GlobalDamageDegradationCoefficient</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1699" class="lines-num"><span id="L1699" data-line-number="1699"></span></td>
							
							<td rel="L1699" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1700" class="lines-num"><span id="L1700" data-line-number="1700"></span></td>
							
							<td rel="L1700" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1701" class="lines-num"><span id="L1701" data-line-number="1701"></span></td>
							
							<td rel="L1701" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRepairSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1702" class="lines-num"><span id="L1702" data-line-number="1702"></span></td>
							
							<td rel="L1702" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1703" class="lines-num"><span id="L1703" data-line-number="1703"></span></td>
							
							<td rel="L1703" class="lines-code chroma"><code class="code-inner">    <span class="nx">ItemEnhancementSettings</span>: <span class="kt">IItemEnhancementSettings</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1704" class="lines-num"><span id="L1704" data-line-number="1704"></span></td>
							
							<td rel="L1704" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinimumLevelToApplyBuff</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1705" class="lines-num"><span id="L1705" data-line-number="1705"></span></td>
							
							<td rel="L1705" class="lines-code chroma"><code class="code-inner">    <span class="nx">RepairStrategies</span>: <span class="kt">IRepairStrategies</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1706" class="lines-num"><span id="L1706" data-line-number="1706"></span></td>
							
							<td rel="L1706" class="lines-code chroma"><code class="code-inner">    <span class="nx">armorClassDivisor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1707" class="lines-num"><span id="L1707" data-line-number="1707"></span></td>
							
							<td rel="L1707" class="lines-code chroma"><code class="code-inner">    <span class="nx">durabilityPointCostArmor</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1708" class="lines-num"><span id="L1708" data-line-number="1708"></span></td>
							
							<td rel="L1708" class="lines-code chroma"><code class="code-inner">    <span class="nx">durabilityPointCostGuns</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1709" class="lines-num"><span id="L1709" data-line-number="1709"></span></td>
							
							<td rel="L1709" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1710" class="lines-num"><span id="L1710" data-line-number="1710"></span></td>
							
							<td rel="L1710" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1711" class="lines-num"><span id="L1711" data-line-number="1711"></span></td>
							
							<td rel="L1711" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IItemEnhancementSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1712" class="lines-num"><span id="L1712" data-line-number="1712"></span></td>
							
							<td rel="L1712" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1713" class="lines-num"><span id="L1713" data-line-number="1713"></span></td>
							
							<td rel="L1713" class="lines-code chroma"><code class="code-inner">    <span class="nx">DamageReduction</span>: <span class="kt">IPriceModifier</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1714" class="lines-num"><span id="L1714" data-line-number="1714"></span></td>
							
							<td rel="L1714" class="lines-code chroma"><code class="code-inner">    <span class="nx">MalfunctionProtections</span>: <span class="kt">IPriceModifier</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1715" class="lines-num"><span id="L1715" data-line-number="1715"></span></td>
							
							<td rel="L1715" class="lines-code chroma"><code class="code-inner">    <span class="nx">WeaponSpread</span>: <span class="kt">IPriceModifier</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1716" class="lines-num"><span id="L1716" data-line-number="1716"></span></td>
							
							<td rel="L1716" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1717" class="lines-num"><span id="L1717" data-line-number="1717"></span></td>
							
							<td rel="L1717" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1718" class="lines-num"><span id="L1718" data-line-number="1718"></span></td>
							
							<td rel="L1718" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IPriceModifier</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1719" class="lines-num"><span id="L1719" data-line-number="1719"></span></td>
							
							<td rel="L1719" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1720" class="lines-num"><span id="L1720" data-line-number="1720"></span></td>
							
							<td rel="L1720" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1721" class="lines-num"><span id="L1721" data-line-number="1721"></span></td>
							
							<td rel="L1721" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1722" class="lines-num"><span id="L1722" data-line-number="1722"></span></td>
							
							<td rel="L1722" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1723" class="lines-num"><span id="L1723" data-line-number="1723"></span></td>
							
							<td rel="L1723" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRepairStrategies</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1724" class="lines-num"><span id="L1724" data-line-number="1724"></span></td>
							
							<td rel="L1724" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1725" class="lines-num"><span id="L1725" data-line-number="1725"></span></td>
							
							<td rel="L1725" class="lines-code chroma"><code class="code-inner">    <span class="nx">Armor</span>: <span class="kt">IRepairStrategy</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1726" class="lines-num"><span id="L1726" data-line-number="1726"></span></td>
							
							<td rel="L1726" class="lines-code chroma"><code class="code-inner">    <span class="nx">Firearms</span>: <span class="kt">IRepairStrategy</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1727" class="lines-num"><span id="L1727" data-line-number="1727"></span></td>
							
							<td rel="L1727" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1728" class="lines-num"><span id="L1728" data-line-number="1728"></span></td>
							
							<td rel="L1728" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1729" class="lines-num"><span id="L1729" data-line-number="1729"></span></td>
							
							<td rel="L1729" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IRepairStrategy</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1730" class="lines-num"><span id="L1730" data-line-number="1730"></span></td>
							
							<td rel="L1730" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1731" class="lines-num"><span id="L1731" data-line-number="1731"></span></td>
							
							<td rel="L1731" class="lines-code chroma"><code class="code-inner">    <span class="nx">BuffTypes</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1732" class="lines-num"><span id="L1732" data-line-number="1732"></span></td>
							
							<td rel="L1732" class="lines-code chroma"><code class="code-inner">    <span class="nx">Filter</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1733" class="lines-num"><span id="L1733" data-line-number="1733"></span></td>
							
							<td rel="L1733" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1734" class="lines-num"><span id="L1734" data-line-number="1734"></span></td>
							
							<td rel="L1734" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1735" class="lines-num"><span id="L1735" data-line-number="1735"></span></td>
							
							<td rel="L1735" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBotPreset</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1736" class="lines-num"><span id="L1736" data-line-number="1736"></span></td>
							
							<td rel="L1736" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1737" class="lines-num"><span id="L1737" data-line-number="1737"></span></td>
							
							<td rel="L1737" class="lines-code chroma"><code class="code-inner">    <span class="nx">UseThis</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1738" class="lines-num"><span id="L1738" data-line-number="1738"></span></td>
							
							<td rel="L1738" class="lines-code chroma"><code class="code-inner">    <span class="nx">Role</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1739" class="lines-num"><span id="L1739" data-line-number="1739"></span></td>
							
							<td rel="L1739" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotDifficulty</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1740" class="lines-num"><span id="L1740" data-line-number="1740"></span></td>
							
							<td rel="L1740" class="lines-code chroma"><code class="code-inner">    <span class="nx">VisibleAngle</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1741" class="lines-num"><span id="L1741" data-line-number="1741"></span></td>
							
							<td rel="L1741" class="lines-code chroma"><code class="code-inner">    <span class="nx">VisibleDistance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1742" class="lines-num"><span id="L1742" data-line-number="1742"></span></td>
							
							<td rel="L1742" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScatteringPerMeter</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1743" class="lines-num"><span id="L1743" data-line-number="1743"></span></td>
							
							<td rel="L1743" class="lines-code chroma"><code class="code-inner">    <span class="nx">HearingSense</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1744" class="lines-num"><span id="L1744" data-line-number="1744"></span></td>
							
							<td rel="L1744" class="lines-code chroma"><code class="code-inner">    <span class="nx">SCATTERING_DIST_MODIF</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1745" class="lines-num"><span id="L1745" data-line-number="1745"></span></td>
							
							<td rel="L1745" class="lines-code chroma"><code class="code-inner">    <span class="nx">MAX_AIMING_UPGRADE_BY_TIME</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1746" class="lines-num"><span id="L1746" data-line-number="1746"></span></td>
							
							<td rel="L1746" class="lines-code chroma"><code class="code-inner">    <span class="nx">FIRST_CONTACT_ADD_SEC</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1747" class="lines-num"><span id="L1747" data-line-number="1747"></span></td>
							
							<td rel="L1747" class="lines-code chroma"><code class="code-inner">    <span class="nx">COEF_IF_MOVE</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1748" class="lines-num"><span id="L1748" data-line-number="1748"></span></td>
							
							<td rel="L1748" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1749" class="lines-num"><span id="L1749" data-line-number="1749"></span></td>
							
							<td rel="L1749" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1750" class="lines-num"><span id="L1750" data-line-number="1750"></span></td>
							
							<td rel="L1750" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IAudioSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1751" class="lines-num"><span id="L1751" data-line-number="1751"></span></td>
							
							<td rel="L1751" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1752" class="lines-num"><span id="L1752" data-line-number="1752"></span></td>
							
							<td rel="L1752" class="lines-code chroma"><code class="code-inner">    <span class="nx">AudioGroupPresets</span>: <span class="kt">IAudioGroupPreset</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1753" class="lines-num"><span id="L1753" data-line-number="1753"></span></td>
							
							<td rel="L1753" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1754" class="lines-num"><span id="L1754" data-line-number="1754"></span></td>
							
							<td rel="L1754" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1755" class="lines-num"><span id="L1755" data-line-number="1755"></span></td>
							
							<td rel="L1755" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IAudioGroupPreset</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1756" class="lines-num"><span id="L1756" data-line-number="1756"></span></td>
							
							<td rel="L1756" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1757" class="lines-num"><span id="L1757" data-line-number="1757"></span></td>
							
							<td rel="L1757" class="lines-code chroma"><code class="code-inner">    <span class="nx">AngleToAllowBinaural</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1758" class="lines-num"><span id="L1758" data-line-number="1758"></span></td>
							
							<td rel="L1758" class="lines-code chroma"><code class="code-inner">    <span class="nx">DisabledBinauralByDistance</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1759" class="lines-num"><span id="L1759" data-line-number="1759"></span></td>
							
							<td rel="L1759" class="lines-code chroma"><code class="code-inner">    <span class="nx">DistanceToAllowBinaural</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1760" class="lines-num"><span id="L1760" data-line-number="1760"></span></td>
							
							<td rel="L1760" class="lines-code chroma"><code class="code-inner">    <span class="nx">GroupType</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1761" class="lines-num"><span id="L1761" data-line-number="1761"></span></td>
							
							<td rel="L1761" class="lines-code chroma"><code class="code-inner">    <span class="nx">HeightToAllowBinaural</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1762" class="lines-num"><span id="L1762" data-line-number="1762"></span></td>
							
							<td rel="L1762" class="lines-code chroma"><code class="code-inner">    <span class="nx">Name</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1763" class="lines-num"><span id="L1763" data-line-number="1763"></span></td>
							
							<td rel="L1763" class="lines-code chroma"><code class="code-inner">    <span class="nx">OcclusionEnabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1764" class="lines-num"><span id="L1764" data-line-number="1764"></span></td>
							
							<td rel="L1764" class="lines-code chroma"><code class="code-inner">    <span class="nx">OcclusionIntensity</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1765" class="lines-num"><span id="L1765" data-line-number="1765"></span></td>
							
							<td rel="L1765" class="lines-code chroma"><code class="code-inner">    <span class="nx">OverallVolume</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1766" class="lines-num"><span id="L1766" data-line-number="1766"></span></td>
							
							<td rel="L1766" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1767" class="lines-num"><span id="L1767" data-line-number="1767"></span></td>
							
							<td rel="L1767" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1768" class="lines-num"><span id="L1768" data-line-number="1768"></span></td>
							
							<td rel="L1768" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IEnvironmentSettings</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1769" class="lines-num"><span id="L1769" data-line-number="1769"></span></td>
							
							<td rel="L1769" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1770" class="lines-num"><span id="L1770" data-line-number="1770"></span></td>
							
							<td rel="L1770" class="lines-code chroma"><code class="code-inner">    <span class="nx">SnowStepsVolumeMultiplier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1771" class="lines-num"><span id="L1771" data-line-number="1771"></span></td>
							
							<td rel="L1771" class="lines-code chroma"><code class="code-inner">    <span class="nx">SurfaceMultipliers</span>: <span class="kt">ISurfaceMultiplier</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1772" class="lines-num"><span id="L1772" data-line-number="1772"></span></td>
							
							<td rel="L1772" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1773" class="lines-num"><span id="L1773" data-line-number="1773"></span></td>
							
							<td rel="L1773" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1774" class="lines-num"><span id="L1774" data-line-number="1774"></span></td>
							
							<td rel="L1774" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ISurfaceMultiplier</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1775" class="lines-num"><span id="L1775" data-line-number="1775"></span></td>
							
							<td rel="L1775" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1776" class="lines-num"><span id="L1776" data-line-number="1776"></span></td>
							
							<td rel="L1776" class="lines-code chroma"><code class="code-inner">    <span class="nx">SurfaceType</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1777" class="lines-num"><span id="L1777" data-line-number="1777"></span></td>
							
							<td rel="L1777" class="lines-code chroma"><code class="code-inner">    <span class="nx">VolumeMult</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1778" class="lines-num"><span id="L1778" data-line-number="1778"></span></td>
							
							<td rel="L1778" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1779" class="lines-num"><span id="L1779" data-line-number="1779"></span></td>
							
							<td rel="L1779" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1780" class="lines-num"><span id="L1780" data-line-number="1780"></span></td>
							
							<td rel="L1780" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IBotWeaponScattering</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1781" class="lines-num"><span id="L1781" data-line-number="1781"></span></td>
							
							<td rel="L1781" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1782" class="lines-num"><span id="L1782" data-line-number="1782"></span></td>
							
							<td rel="L1782" class="lines-code chroma"><code class="code-inner">    <span class="nx">Name</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1783" class="lines-num"><span id="L1783" data-line-number="1783"></span></td>
							
							<td rel="L1783" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriorityScatter1meter</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1784" class="lines-num"><span id="L1784" data-line-number="1784"></span></td>
							
							<td rel="L1784" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriorityScatter10meter</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1785" class="lines-num"><span id="L1785" data-line-number="1785"></span></td>
							
							<td rel="L1785" class="lines-code chroma"><code class="code-inner">    <span class="nx">PriorityScatter100meter</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1786" class="lines-num"><span id="L1786" data-line-number="1786"></span></td>
							
							<td rel="L1786" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1787" class="lines-num"><span id="L1787" data-line-number="1787"></span></td>
							
							<td rel="L1787" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1788" class="lines-num"><span id="L1788" data-line-number="1788"></span></td>
							
							<td rel="L1788" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IPreset</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1789" class="lines-num"><span id="L1789" data-line-number="1789"></span></td>
							
							<td rel="L1789" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1790" class="lines-num"><span id="L1790" data-line-number="1790"></span></td>
							
							<td rel="L1790" class="lines-code chroma"><code class="code-inner">    <span class="nx">_id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1791" class="lines-num"><span id="L1791" data-line-number="1791"></span></td>
							
							<td rel="L1791" class="lines-code chroma"><code class="code-inner">    <span class="nx">_type</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1792" class="lines-num"><span id="L1792" data-line-number="1792"></span></td>
							
							<td rel="L1792" class="lines-code chroma"><code class="code-inner">    <span class="nx">_changeWeaponName</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1793" class="lines-num"><span id="L1793" data-line-number="1793"></span></td>
							
							<td rel="L1793" class="lines-code chroma"><code class="code-inner">    <span class="nx">_name</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1794" class="lines-num"><span id="L1794" data-line-number="1794"></span></td>
							
							<td rel="L1794" class="lines-code chroma"><code class="code-inner">    <span class="nx">_parent</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1795" class="lines-num"><span id="L1795" data-line-number="1795"></span></td>
							
							<td rel="L1795" class="lines-code chroma"><code class="code-inner">    <span class="nx">_items</span>: <span class="kt">Item</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1796" class="lines-num"><span id="L1796" data-line-number="1796"></span></td>
							
							<td rel="L1796" class="lines-code chroma"><code class="code-inner">    <span class="cm">/** Default presets have this property */</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1797" class="lines-num"><span id="L1797" data-line-number="1797"></span></td>
							
							<td rel="L1797" class="lines-code chroma"><code class="code-inner">    <span class="nx">_encyclopedia?</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L1798" class="lines-num"><span id="L1798" data-line-number="1798"></span></td>
							
							<td rel="L1798" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
					</tbody>
				</table>
				<div class="code-line-menu ui vertical pointing menu tippy-target">
					
					<a class="item view_git_blame" href="/SPT-AKI/Server/blame/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/IGlobals.ts">View Git Blame</a>
					<a class="item copy-line-permalink" data-url="/SPT-AKI/Server/src/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/IGlobals.ts">Copy Permalink</a>
				</div>
				
			
		</div>
	</div>
</div>

		
	</div>
</div>


	

	</div>

	

	<footer class="page-footer" role="group" aria-label="Footer">
	<div class="left-links" role="contentinfo" aria-label="About Software">
		<a target="_blank" rel="noopener noreferrer" href="https://about.gitea.com">Powered by Gitea</a>
		
			Version:
			
				1.21.11
			
		
		
			Page: <strong>251ms</strong>
			Template repo/home: <strong>60ms</strong>
		
	</div>
	<div class="right-links" role="group" aria-label="Links">
		<div class="ui dropdown upward language">
			<span class="flex-text-inline"><svg viewBox="0 0 16 16" class="svg octicon-globe" aria-hidden="true" width="14" height="14"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z"/></svg> English</span>
			<div class="menu language-menu">
				
					<a lang="id-ID" data-url="/?lang=id-ID" class="item ">Bahasa Indonesia</a>
				
					<a lang="de-DE" data-url="/?lang=de-DE" class="item ">Deutsch</a>
				
					<a lang="en-US" data-url="/?lang=en-US" class="item active selected">English</a>
				
					<a lang="es-ES" data-url="/?lang=es-ES" class="item ">Español</a>
				
					<a lang="fr-FR" data-url="/?lang=fr-FR" class="item ">Français</a>
				
					<a lang="it-IT" data-url="/?lang=it-IT" class="item ">Italiano</a>
				
					<a lang="lv-LV" data-url="/?lang=lv-LV" class="item ">Latviešu</a>
				
					<a lang="hu-HU" data-url="/?lang=hu-HU" class="item ">Magyar nyelv</a>
				
					<a lang="nl-NL" data-url="/?lang=nl-NL" class="item ">Nederlands</a>
				
					<a lang="pl-PL" data-url="/?lang=pl-PL" class="item ">Polski</a>
				
					<a lang="pt-PT" data-url="/?lang=pt-PT" class="item ">Português de Portugal</a>
				
					<a lang="pt-BR" data-url="/?lang=pt-BR" class="item ">Português do Brasil</a>
				
					<a lang="fi-FI" data-url="/?lang=fi-FI" class="item ">Suomi</a>
				
					<a lang="sv-SE" data-url="/?lang=sv-SE" class="item ">Svenska</a>
				
					<a lang="tr-TR" data-url="/?lang=tr-TR" class="item ">Türkçe</a>
				
					<a lang="cs-CZ" data-url="/?lang=cs-CZ" class="item ">Čeština</a>
				
					<a lang="el-GR" data-url="/?lang=el-GR" class="item ">Ελληνικά</a>
				
					<a lang="bg-BG" data-url="/?lang=bg-BG" class="item ">Български</a>
				
					<a lang="ru-RU" data-url="/?lang=ru-RU" class="item ">Русский</a>
				
					<a lang="uk-UA" data-url="/?lang=uk-UA" class="item ">Українська</a>
				
					<a lang="fa-IR" data-url="/?lang=fa-IR" class="item ">فارسی</a>
				
					<a lang="ml-IN" data-url="/?lang=ml-IN" class="item ">മലയാളം</a>
				
					<a lang="ja-JP" data-url="/?lang=ja-JP" class="item ">日本語</a>
				
					<a lang="zh-CN" data-url="/?lang=zh-CN" class="item ">简体中文</a>
				
					<a lang="zh-TW" data-url="/?lang=zh-TW" class="item ">繁體中文（台灣）</a>
				
					<a lang="zh-HK" data-url="/?lang=zh-HK" class="item ">繁體中文（香港）</a>
				
					<a lang="ko-KR" data-url="/?lang=ko-KR" class="item ">한국어</a>
				
			</div>
		</div>
		<a href="/assets/licenses.txt">Licenses</a>
		<a href="/api/swagger">API</a>
		
	</div>
</footer>




	<script src="/assets/js/index.js?v=1.21.11" onerror="alert('Failed to load asset files from ' + this.src + '. Please make sure the asset files can be accessed.')"></script>

	
	
</body>
</html>

