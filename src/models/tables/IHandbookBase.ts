<!DOCTYPE html>
<html lang="en-US" class="theme-auto">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Server/IHandbookBase.ts at 3.8.1-DEV - Server - SPT-AKI Development</title>
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
		csrfToken: 'PkW81_wxkbYkxecVki1rGaAEM7A6MTcxMzk3MzcwODQ1NjQxODI0MA',
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
	
	
		<meta property="og:title" content="Server/IHandbookBase.ts at 3.8.1-DEV">
		<meta property="og:url" content="https://dev.sp-tarkov.com//SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common/tables/IHandbookBase.ts">
		
	
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
			
			<a class="item" rel="nofollow" href="/user/login?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2ftables%2fIHandbookBase.ts">
				<svg viewBox="0 0 16 16" class="svg octicon-sign-in" aria-hidden="true" width="16" height="16"><path d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm6.56 4.5h5.69a.75.75 0 0 1 0 1.5H8.56l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L6.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z"/></svg> Sign In
			</a>
		
	</div>
</nav>

		



<div role="main" aria-label="Server/IHandbookBase.ts at 3.8.1-DEV" class="page-content repository file list ">
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
					
					<form method="post" action="/SPT-AKI/Server/action/watch?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2ftables%2fIHandbookBase.ts">
						<input type="hidden" name="_csrf" value="PkW81_wxkbYkxecVki1rGaAEM7A6MTcxMzk3MzcwODQ1NjQxODI0MA">
						<div class="ui labeled button" data-tooltip-content="Sign in to watch this repository.">
							<button type="submit" class="ui compact small basic button" disabled>
								<svg viewBox="0 0 16 16" class="svg octicon-eye" aria-hidden="true" width="16" height="16"><path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"/></svg>Watch
							</button>
							<a class="ui basic label" href="/SPT-AKI/Server/watchers">
								22
							</a>
						</div>
					</form>
					
						<form method="post" action="/SPT-AKI/Server/action/star?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2ftables%2fIHandbookBase.ts">
							<input type="hidden" name="_csrf" value="PkW81_wxkbYkxecVki1rGaAEM7A6MTcxMzk3MzcwODQ1NjQxODI0MA">
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
		'branchURLSuffix': '/project\/src\/models\/eft\/common\/tables\/IHandbookBase.ts',
		'tagURLPrefix': '\/SPT-AKI\/Server/src/tag/',
		'tagURLSuffix': '/project\/src\/models\/eft\/common\/tables\/IHandbookBase.ts',
		'repoLink': "/SPT-AKI/Server",
		'treePath': "project/src/models/eft/common/tables/IHandbookBase.ts",
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
						<a class="section" href="/SPT-AKI/Server/src/branch/3.8.1-DEV" title="Server">Server</a><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project" title="project">project</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src" title="src">src</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models" title="models">models</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft" title="eft">eft</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common" title="common">common</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common/tables" title="tables">tables</a></span><span class="breadcrumb-divider">/</span><span class="active section" title="IHandbookBase.ts">IHandbookBase.ts</span></span>
				
			</div>
			<div class="gt-df gt-ac">
				
				
				
			</div>
		</div>
		
			<div class="tab-size-4 non-diff-file-content">
	<h4 class="file-header ui top attached header gt-df gt-ac gt-sb gt-fw">
		<div class="file-header-left gt-df gt-ac gt-py-3 gt-pr-4">
			
				<div class="file-info text grey normal gt-mono">
	
	
		<div class="file-info-entry">
			22 lines
		</div>
	
	
		<div class="file-info-entry">
			308 B
		</div>
	
	
	
		<div class="file-info-entry">
			TypeScript
		</div>
	
	
	
</div>

			
		</div>
		<div class="file-header-right file-actions gt-df gt-ac gt-fw">
			
			
				<div class="ui buttons gt-mr-2">
					<a class="ui mini basic button" href="/SPT-AKI/Server/raw/branch/3.8.1-DEV/project/src/models/eft/common/tables/IHandbookBase.ts">Raw</a>
					
						<a class="ui mini basic button" href="/SPT-AKI/Server/src/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/tables/IHandbookBase.ts">Permalink</a>
					
					
						<a class="ui mini basic button" href="/SPT-AKI/Server/blame/branch/3.8.1-DEV/project/src/models/eft/common/tables/IHandbookBase.ts">Blame</a>
					
					<a class="ui mini basic button" href="/SPT-AKI/Server/commits/branch/3.8.1-DEV/project/src/models/eft/common/tables/IHandbookBase.ts">History</a>
					
				</div>
				<a download href="/SPT-AKI/Server/raw/branch/3.8.1-DEV/project/src/models/eft/common/tables/IHandbookBase.ts"><span class="btn-octicon" data-tooltip-content="Download file"><svg viewBox="0 0 16 16" class="svg octicon-download" aria-hidden="true" width="16" height="16"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"/></svg></span></a>
				<a id="copy-content" class="btn-octicon " data-tooltip-content="Copy content"><svg viewBox="0 0 16 16" class="svg octicon-copy" aria-hidden="true" width="14" height="14"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg></a>
				
				<a class="btn-octicon" href="/SPT-AKI/Server/rss/branch/3.8.1-DEV/project/src/models/eft/common/tables/IHandbookBase.ts"><svg viewBox="0 0 16 16" class="svg octicon-rss" aria-hidden="true" width="14" height="14"><path d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098 10.502 10.502 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7.002 7.002 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.503 5.503 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489ZM2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg></a>
				
				
					
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
							
							<td rel="L1" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">IHandbookBase</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L2" class="lines-num"><span id="L2" data-line-number="2"></span></td>
							
							<td rel="L2" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L3" class="lines-num"><span id="L3" data-line-number="3"></span></td>
							
							<td rel="L3" class="lines-code chroma"><code class="code-inner">    <span class="nx">Categories</span>: <span class="kt">Category</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L4" class="lines-num"><span id="L4" data-line-number="4"></span></td>
							
							<td rel="L4" class="lines-code chroma"><code class="code-inner">    <span class="nx">Items</span>: <span class="kt">HandbookItem</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L5" class="lines-num"><span id="L5" data-line-number="5"></span></td>
							
							<td rel="L5" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L6" class="lines-num"><span id="L6" data-line-number="6"></span></td>
							
							<td rel="L6" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L7" class="lines-num"><span id="L7" data-line-number="7"></span></td>
							
							<td rel="L7" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Category</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L8" class="lines-num"><span id="L8" data-line-number="8"></span></td>
							
							<td rel="L8" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L9" class="lines-num"><span id="L9" data-line-number="9"></span></td>
							
							<td rel="L9" class="lines-code chroma"><code class="code-inner">    <span class="nx">Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L10" class="lines-num"><span id="L10" data-line-number="10"></span></td>
							
							<td rel="L10" class="lines-code chroma"><code class="code-inner">    <span class="nx">ParentId?</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L11" class="lines-num"><span id="L11" data-line-number="11"></span></td>
							
							<td rel="L11" class="lines-code chroma"><code class="code-inner">    <span class="nx">Icon</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L12" class="lines-num"><span id="L12" data-line-number="12"></span></td>
							
							<td rel="L12" class="lines-code chroma"><code class="code-inner">    <span class="nx">Color</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L13" class="lines-num"><span id="L13" data-line-number="13"></span></td>
							
							<td rel="L13" class="lines-code chroma"><code class="code-inner">    <span class="nx">Order</span>: <span class="kt">string</span><span class="p">;</span>
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
							
							<td rel="L16" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">HandbookItem</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L17" class="lines-num"><span id="L17" data-line-number="17"></span></td>
							
							<td rel="L17" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L18" class="lines-num"><span id="L18" data-line-number="18"></span></td>
							
							<td rel="L18" class="lines-code chroma"><code class="code-inner">    <span class="nx">Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L19" class="lines-num"><span id="L19" data-line-number="19"></span></td>
							
							<td rel="L19" class="lines-code chroma"><code class="code-inner">    <span class="nx">ParentId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L20" class="lines-num"><span id="L20" data-line-number="20"></span></td>
							
							<td rel="L20" class="lines-code chroma"><code class="code-inner">    <span class="nx">Price</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L21" class="lines-num"><span id="L21" data-line-number="21"></span></td>
							
							<td rel="L21" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
					</tbody>
				</table>
				<div class="code-line-menu ui vertical pointing menu tippy-target">
					
					<a class="item view_git_blame" href="/SPT-AKI/Server/blame/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/tables/IHandbookBase.ts">View Git Blame</a>
					<a class="item copy-line-permalink" data-url="/SPT-AKI/Server/src/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/tables/IHandbookBase.ts">Copy Permalink</a>
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
			
		
		
			Page: <strong>72ms</strong>
			Template repo/home: <strong>6ms</strong>
		
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

