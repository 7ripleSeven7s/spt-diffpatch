<!DOCTYPE html>
<html lang="en-US" class="theme-auto">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Server/ILocationBase.ts at 3.8.1-DEV - Server - SPT-AKI Development</title>
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
		csrfToken: 'I5W7_qLNOEPQbhHySyqKwI8GO6A6MTcxMzk3Mzc4MTI3NjI2NDI2MQ',
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
	
	
		<meta property="og:title" content="Server/ILocationBase.ts at 3.8.1-DEV">
		<meta property="og:url" content="https://dev.sp-tarkov.com//SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common/ILocationBase.ts">
		
	
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
			
			<a class="item" rel="nofollow" href="/user/login?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2fILocationBase.ts">
				<svg viewBox="0 0 16 16" class="svg octicon-sign-in" aria-hidden="true" width="16" height="16"><path d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm6.56 4.5h5.69a.75.75 0 0 1 0 1.5H8.56l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L6.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z"/></svg> Sign In
			</a>
		
	</div>
</nav>

		



<div role="main" aria-label="Server/ILocationBase.ts at 3.8.1-DEV" class="page-content repository file list ">
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
					
					<form method="post" action="/SPT-AKI/Server/action/watch?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2fILocationBase.ts">
						<input type="hidden" name="_csrf" value="I5W7_qLNOEPQbhHySyqKwI8GO6A6MTcxMzk3Mzc4MTI3NjI2NDI2MQ">
						<div class="ui labeled button" data-tooltip-content="Sign in to watch this repository.">
							<button type="submit" class="ui compact small basic button" disabled>
								<svg viewBox="0 0 16 16" class="svg octicon-eye" aria-hidden="true" width="16" height="16"><path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"/></svg>Watch
							</button>
							<a class="ui basic label" href="/SPT-AKI/Server/watchers">
								22
							</a>
						</div>
					</form>
					
						<form method="post" action="/SPT-AKI/Server/action/star?redirect_to=%2fSPT-AKI%2fServer%2fsrc%2fbranch%2f3.8.1-DEV%2fproject%2fsrc%2fmodels%2feft%2fcommon%2fILocationBase.ts">
							<input type="hidden" name="_csrf" value="I5W7_qLNOEPQbhHySyqKwI8GO6A6MTcxMzk3Mzc4MTI3NjI2NDI2MQ">
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
		'branchURLSuffix': '/project\/src\/models\/eft\/common\/ILocationBase.ts',
		'tagURLPrefix': '\/SPT-AKI\/Server/src/tag/',
		'tagURLSuffix': '/project\/src\/models\/eft\/common\/ILocationBase.ts',
		'repoLink': "/SPT-AKI/Server",
		'treePath': "project/src/models/eft/common/ILocationBase.ts",
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
						<a class="section" href="/SPT-AKI/Server/src/branch/3.8.1-DEV" title="Server">Server</a><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project" title="project">project</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src" title="src">src</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models" title="models">models</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft" title="eft">eft</a></span><span class="breadcrumb-divider">/</span><span class="section"><a href="/SPT-AKI/Server/src/branch/3.8.1-DEV/project/src/models/eft/common" title="common">common</a></span><span class="breadcrumb-divider">/</span><span class="active section" title="ILocationBase.ts">ILocationBase.ts</span></span>
				
			</div>
			<div class="gt-df gt-ac">
				
				
				
			</div>
		</div>
		
			<div class="tab-size-4 non-diff-file-content">
	<h4 class="file-header ui top attached header gt-df gt-ac gt-sb gt-fw">
		<div class="file-header-left gt-df gt-ac gt-py-3 gt-pr-4">
			
				<div class="file-info text grey normal gt-mono">
	
	
		<div class="file-info-entry">
			274 lines
		</div>
	
	
		<div class="file-info-entry">
			5.9 KiB
		</div>
	
	
	
		<div class="file-info-entry">
			TypeScript
		</div>
	
	
	
</div>

			
		</div>
		<div class="file-header-right file-actions gt-df gt-ac gt-fw">
			
			
				<div class="ui buttons gt-mr-2">
					<a class="ui mini basic button" href="/SPT-AKI/Server/raw/branch/3.8.1-DEV/project/src/models/eft/common/ILocationBase.ts">Raw</a>
					
						<a class="ui mini basic button" href="/SPT-AKI/Server/src/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/ILocationBase.ts">Permalink</a>
					
					
						<a class="ui mini basic button" href="/SPT-AKI/Server/blame/branch/3.8.1-DEV/project/src/models/eft/common/ILocationBase.ts">Blame</a>
					
					<a class="ui mini basic button" href="/SPT-AKI/Server/commits/branch/3.8.1-DEV/project/src/models/eft/common/ILocationBase.ts">History</a>
					
				</div>
				<a download href="/SPT-AKI/Server/raw/branch/3.8.1-DEV/project/src/models/eft/common/ILocationBase.ts"><span class="btn-octicon" data-tooltip-content="Download file"><svg viewBox="0 0 16 16" class="svg octicon-download" aria-hidden="true" width="16" height="16"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"/></svg></span></a>
				<a id="copy-content" class="btn-octicon " data-tooltip-content="Copy content"><svg viewBox="0 0 16 16" class="svg octicon-copy" aria-hidden="true" width="14" height="14"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg></a>
				
				<a class="btn-octicon" href="/SPT-AKI/Server/rss/branch/3.8.1-DEV/project/src/models/eft/common/ILocationBase.ts"><svg viewBox="0 0 16 16" class="svg octicon-rss" aria-hidden="true" width="14" height="14"><path d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098 10.502 10.502 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7.002 7.002 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.503 5.503 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489ZM2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg></a>
				
				
					
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
							
							<td rel="L1" class="lines-code chroma"><code class="code-inner"><span class="kr">import</span> <span class="p">{</span> <span class="nx">MinMax</span> <span class="p">}</span> <span class="kr">from</span> <span class="s2">&#34;@spt-aki/models/common/MinMax&#34;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L2" class="lines-num"><span id="L2" data-line-number="2"></span></td>
							
							<td rel="L2" class="lines-code chroma"><code class="code-inner"><span class="kr">import</span> <span class="p">{</span> <span class="nx">Ixyz</span> <span class="p">}</span> <span class="kr">from</span> <span class="s2">&#34;@spt-aki/models/eft/common/Ixyz&#34;</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L3" class="lines-num"><span id="L3" data-line-number="3"></span></td>
							
							<td rel="L3" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L4" class="lines-num"><span id="L4" data-line-number="4"></span></td>
							
							<td rel="L4" class="lines-code chroma"><code class="code-inner"><span class="cm">/* eslint-disable @typescript-eslint/naming-convention */</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L5" class="lines-num"><span id="L5" data-line-number="5"></span></td>
							
							<td rel="L5" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILocationBase</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L6" class="lines-num"><span id="L6" data-line-number="6"></span></td>
							
							<td rel="L6" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L7" class="lines-num"><span id="L7" data-line-number="7"></span></td>
							
							<td rel="L7" class="lines-code chroma"><code class="code-inner">    <span class="nx">AccessKeys</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L8" class="lines-num"><span id="L8" data-line-number="8"></span></td>
							
							<td rel="L8" class="lines-code chroma"><code class="code-inner">    <span class="nx">AirdropParameters</span>: <span class="kt">AirdropParameter</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L9" class="lines-num"><span id="L9" data-line-number="9"></span></td>
							
							<td rel="L9" class="lines-code chroma"><code class="code-inner">    <span class="nx">Area</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L10" class="lines-num"><span id="L10" data-line-number="10"></span></td>
							
							<td rel="L10" class="lines-code chroma"><code class="code-inner">    <span class="nx">AveragePlayTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L11" class="lines-num"><span id="L11" data-line-number="11"></span></td>
							
							<td rel="L11" class="lines-code chroma"><code class="code-inner">    <span class="nx">AveragePlayerLevel</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L12" class="lines-num"><span id="L12" data-line-number="12"></span></td>
							
							<td rel="L12" class="lines-code chroma"><code class="code-inner">    <span class="nx">Banners</span>: <span class="kt">Banner</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L13" class="lines-num"><span id="L13" data-line-number="13"></span></td>
							
							<td rel="L13" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossLocationSpawn</span>: <span class="kt">BossLocationSpawn</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L14" class="lines-num"><span id="L14" data-line-number="14"></span></td>
							
							<td rel="L14" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotAssault</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L15" class="lines-num"><span id="L15" data-line-number="15"></span></td>
							
							<td rel="L15" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotEasy</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L16" class="lines-num"><span id="L16" data-line-number="16"></span></td>
							
							<td rel="L16" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotHard</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L17" class="lines-num"><span id="L17" data-line-number="17"></span></td>
							
							<td rel="L17" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotImpossible</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L18" class="lines-num"><span id="L18" data-line-number="18"></span></td>
							
							<td rel="L18" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotLocationModifier</span>: <span class="kt">BotLocationModifier</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L19" class="lines-num"><span id="L19" data-line-number="19"></span></td>
							
							<td rel="L19" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotMarksman</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L20" class="lines-num"><span id="L20" data-line-number="20"></span></td>
							
							<td rel="L20" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L21" class="lines-num"><span id="L21" data-line-number="21"></span></td>
							
							<td rel="L21" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotMaxPlayer</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L22" class="lines-num"><span id="L22" data-line-number="22"></span></td>
							
							<td rel="L22" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotMaxTimePlayer</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L23" class="lines-num"><span id="L23" data-line-number="23"></span></td>
							
							<td rel="L23" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotNormal</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L24" class="lines-num"><span id="L24" data-line-number="24"></span></td>
							
							<td rel="L24" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpawnCountStep</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L25" class="lines-num"><span id="L25" data-line-number="25"></span></td>
							
							<td rel="L25" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpawnPeriodCheck</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L26" class="lines-num"><span id="L26" data-line-number="26"></span></td>
							
							<td rel="L26" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpawnTimeOffMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L27" class="lines-num"><span id="L27" data-line-number="27"></span></td>
							
							<td rel="L27" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpawnTimeOffMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L28" class="lines-num"><span id="L28" data-line-number="28"></span></td>
							
							<td rel="L28" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpawnTimeOnMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L29" class="lines-num"><span id="L29" data-line-number="29"></span></td>
							
							<td rel="L29" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSpawnTimeOnMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L30" class="lines-num"><span id="L30" data-line-number="30"></span></td>
							
							<td rel="L30" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotStart</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L31" class="lines-num"><span id="L31" data-line-number="31"></span></td>
							
							<td rel="L31" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotStop</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L32" class="lines-num"><span id="L32" data-line-number="32"></span></td>
							
							<td rel="L32" class="lines-code chroma"><code class="code-inner">    <span class="nx">Description</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L33" class="lines-num"><span id="L33" data-line-number="33"></span></td>
							
							<td rel="L33" class="lines-code chroma"><code class="code-inner">    <span class="nx">DisabledForScav</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L34" class="lines-num"><span id="L34" data-line-number="34"></span></td>
							
							<td rel="L34" class="lines-code chroma"><code class="code-inner">    <span class="nx">DisabledScavExits</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L35" class="lines-num"><span id="L35" data-line-number="35"></span></td>
							
							<td rel="L35" class="lines-code chroma"><code class="code-inner">    <span class="nx">Enabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L36" class="lines-num"><span id="L36" data-line-number="36"></span></td>
							
							<td rel="L36" class="lines-code chroma"><code class="code-inner">    <span class="nx">EnableCoop</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L37" class="lines-num"><span id="L37" data-line-number="37"></span></td>
							
							<td rel="L37" class="lines-code chroma"><code class="code-inner">    <span class="nx">GlobalLootChanceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L38" class="lines-num"><span id="L38" data-line-number="38"></span></td>
							
							<td rel="L38" class="lines-code chroma"><code class="code-inner">    <span class="nx">GlobalContainerChanceModifier</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L39" class="lines-num"><span id="L39" data-line-number="39"></span></td>
							
							<td rel="L39" class="lines-code chroma"><code class="code-inner">    <span class="nx">IconX</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L40" class="lines-num"><span id="L40" data-line-number="40"></span></td>
							
							<td rel="L40" class="lines-code chroma"><code class="code-inner">    <span class="nx">IconY</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L41" class="lines-num"><span id="L41" data-line-number="41"></span></td>
							
							<td rel="L41" class="lines-code chroma"><code class="code-inner">    <span class="nx">Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L42" class="lines-num"><span id="L42" data-line-number="42"></span></td>
							
							<td rel="L42" class="lines-code chroma"><code class="code-inner">    <span class="nx">Insurance</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L43" class="lines-num"><span id="L43" data-line-number="43"></span></td>
							
							<td rel="L43" class="lines-code chroma"><code class="code-inner">    <span class="nx">IsSecret</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L44" class="lines-num"><span id="L44" data-line-number="44"></span></td>
							
							<td rel="L44" class="lines-code chroma"><code class="code-inner">    <span class="nx">Locked</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L45" class="lines-num"><span id="L45" data-line-number="45"></span></td>
							
							<td rel="L45" class="lines-code chroma"><code class="code-inner">    <span class="nx">Loot</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L46" class="lines-num"><span id="L46" data-line-number="46"></span></td>
							
							<td rel="L46" class="lines-code chroma"><code class="code-inner">    <span class="nx">MatchMakerMinPlayersByWaitTime</span>: <span class="kt">MinPlayerWaitTime</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L47" class="lines-num"><span id="L47" data-line-number="47"></span></td>
							
							<td rel="L47" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxBotPerZone</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L48" class="lines-num"><span id="L48" data-line-number="48"></span></td>
							
							<td rel="L48" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxDistToFreePoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L49" class="lines-num"><span id="L49" data-line-number="49"></span></td>
							
							<td rel="L49" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxPlayers</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L50" class="lines-num"><span id="L50" data-line-number="50"></span></td>
							
							<td rel="L50" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinDistToExitPoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L51" class="lines-num"><span id="L51" data-line-number="51"></span></td>
							
							<td rel="L51" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinDistToFreePoint</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L52" class="lines-num"><span id="L52" data-line-number="52"></span></td>
							
							<td rel="L52" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinMaxBots</span>: <span class="kt">MinMaxBot</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L53" class="lines-num"><span id="L53" data-line-number="53"></span></td>
							
							<td rel="L53" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinPlayers</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L54" class="lines-num"><span id="L54" data-line-number="54"></span></td>
							
							<td rel="L54" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxCoopGroup</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L55" class="lines-num"><span id="L55" data-line-number="55"></span></td>
							
							<td rel="L55" class="lines-code chroma"><code class="code-inner">    <span class="nx">Name</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L56" class="lines-num"><span id="L56" data-line-number="56"></span></td>
							
							<td rel="L56" class="lines-code chroma"><code class="code-inner">    <span class="nx">NonWaveGroupScenario</span>: <span class="kt">INonWaveGroupScenario</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L57" class="lines-num"><span id="L57" data-line-number="57"></span></td>
							
							<td rel="L57" class="lines-code chroma"><code class="code-inner">    <span class="nx">NewSpawn</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L58" class="lines-num"><span id="L58" data-line-number="58"></span></td>
							
							<td rel="L58" class="lines-code chroma"><code class="code-inner">    <span class="nx">OcculsionCullingEnabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L59" class="lines-num"><span id="L59" data-line-number="59"></span></td>
							
							<td rel="L59" class="lines-code chroma"><code class="code-inner">    <span class="nx">OldSpawn</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L60" class="lines-num"><span id="L60" data-line-number="60"></span></td>
							
							<td rel="L60" class="lines-code chroma"><code class="code-inner">    <span class="nx">OpenZones</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L61" class="lines-num"><span id="L61" data-line-number="61"></span></td>
							
							<td rel="L61" class="lines-code chroma"><code class="code-inner">    <span class="nx">Preview</span>: <span class="kt">Preview</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L62" class="lines-num"><span id="L62" data-line-number="62"></span></td>
							
							<td rel="L62" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlayersRequestCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L63" class="lines-num"><span id="L63" data-line-number="63"></span></td>
							
							<td rel="L63" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequiredPlayerLevel?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L64" class="lines-num"><span id="L64" data-line-number="64"></span></td>
							
							<td rel="L64" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequiredPlayerLevelMin?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L65" class="lines-num"><span id="L65" data-line-number="65"></span></td>
							
							<td rel="L65" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequiredPlayerLevelMax?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L66" class="lines-num"><span id="L66" data-line-number="66"></span></td>
							
							<td rel="L66" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinPlayerLvlAccessKeys</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L67" class="lines-num"><span id="L67" data-line-number="67"></span></td>
							
							<td rel="L67" class="lines-code chroma"><code class="code-inner">    <span class="nx">PmcMaxPlayersInGroup</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L68" class="lines-num"><span id="L68" data-line-number="68"></span></td>
							
							<td rel="L68" class="lines-code chroma"><code class="code-inner">    <span class="nx">ScavMaxPlayersInGroup</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L69" class="lines-num"><span id="L69" data-line-number="69"></span></td>
							
							<td rel="L69" class="lines-code chroma"><code class="code-inner">    <span class="nx">Rules</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L70" class="lines-num"><span id="L70" data-line-number="70"></span></td>
							
							<td rel="L70" class="lines-code chroma"><code class="code-inner">    <span class="nx">SafeLocation</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L71" class="lines-num"><span id="L71" data-line-number="71"></span></td>
							
							<td rel="L71" class="lines-code chroma"><code class="code-inner">    <span class="nx">Scene</span>: <span class="kt">Scene</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L72" class="lines-num"><span id="L72" data-line-number="72"></span></td>
							
							<td rel="L72" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpawnPointParams</span>: <span class="kt">SpawnPointParam</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L73" class="lines-num"><span id="L73" data-line-number="73"></span></td>
							
							<td rel="L73" class="lines-code chroma"><code class="code-inner">    <span class="nx">UnixDateTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L74" class="lines-num"><span id="L74" data-line-number="74"></span></td>
							
							<td rel="L74" class="lines-code chroma"><code class="code-inner">    <span class="nx">_Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L75" class="lines-num"><span id="L75" data-line-number="75"></span></td>
							
							<td rel="L75" class="lines-code chroma"><code class="code-inner">    <span class="nx">doors</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L76" class="lines-num"><span id="L76" data-line-number="76"></span></td>
							
							<td rel="L76" class="lines-code chroma"><code class="code-inner">    <span class="nx">EscapeTimeLimit</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L77" class="lines-num"><span id="L77" data-line-number="77"></span></td>
							
							<td rel="L77" class="lines-code chroma"><code class="code-inner">    <span class="nx">EscapeTimeLimitCoop</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L78" class="lines-num"><span id="L78" data-line-number="78"></span></td>
							
							<td rel="L78" class="lines-code chroma"><code class="code-inner">    <span class="nx">exit_access_time</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L79" class="lines-num"><span id="L79" data-line-number="79"></span></td>
							
							<td rel="L79" class="lines-code chroma"><code class="code-inner">    <span class="nx">exit_count</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L80" class="lines-num"><span id="L80" data-line-number="80"></span></td>
							
							<td rel="L80" class="lines-code chroma"><code class="code-inner">    <span class="nx">exit_time</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L81" class="lines-num"><span id="L81" data-line-number="81"></span></td>
							
							<td rel="L81" class="lines-code chroma"><code class="code-inner">    <span class="nx">exits</span>: <span class="kt">Exit</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L82" class="lines-num"><span id="L82" data-line-number="82"></span></td>
							
							<td rel="L82" class="lines-code chroma"><code class="code-inner">    <span class="nx">filter_ex</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L83" class="lines-num"><span id="L83" data-line-number="83"></span></td>
							
							<td rel="L83" class="lines-code chroma"><code class="code-inner">    <span class="nx">limits</span>: <span class="kt">ILimit</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L84" class="lines-num"><span id="L84" data-line-number="84"></span></td>
							
							<td rel="L84" class="lines-code chroma"><code class="code-inner">    <span class="nx">matching_min_seconds</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L85" class="lines-num"><span id="L85" data-line-number="85"></span></td>
							
							<td rel="L85" class="lines-code chroma"><code class="code-inner">    <span class="nx">GenerateLocalLootCache</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L86" class="lines-num"><span id="L86" data-line-number="86"></span></td>
							
							<td rel="L86" class="lines-code chroma"><code class="code-inner">    <span class="nx">maxItemCountInLocation</span>: <span class="kt">MaxItemCountInLocation</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L87" class="lines-num"><span id="L87" data-line-number="87"></span></td>
							
							<td rel="L87" class="lines-code chroma"><code class="code-inner">    <span class="nx">sav_summon_seconds</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L88" class="lines-num"><span id="L88" data-line-number="88"></span></td>
							
							<td rel="L88" class="lines-code chroma"><code class="code-inner">    <span class="nx">tmp_location_field_remove_me</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L89" class="lines-num"><span id="L89" data-line-number="89"></span></td>
							
							<td rel="L89" class="lines-code chroma"><code class="code-inner">    <span class="nx">users_gather_seconds</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L90" class="lines-num"><span id="L90" data-line-number="90"></span></td>
							
							<td rel="L90" class="lines-code chroma"><code class="code-inner">    <span class="nx">users_spawn_seconds_n</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L91" class="lines-num"><span id="L91" data-line-number="91"></span></td>
							
							<td rel="L91" class="lines-code chroma"><code class="code-inner">    <span class="nx">users_spawn_seconds_n2</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L92" class="lines-num"><span id="L92" data-line-number="92"></span></td>
							
							<td rel="L92" class="lines-code chroma"><code class="code-inner">    <span class="nx">users_summon_seconds</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L93" class="lines-num"><span id="L93" data-line-number="93"></span></td>
							
							<td rel="L93" class="lines-code chroma"><code class="code-inner">    <span class="nx">waves</span>: <span class="kt">Wave</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L94" class="lines-num"><span id="L94" data-line-number="94"></span></td>
							
							<td rel="L94" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L95" class="lines-num"><span id="L95" data-line-number="95"></span></td>
							
							<td rel="L95" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L96" class="lines-num"><span id="L96" data-line-number="96"></span></td>
							
							<td rel="L96" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">INonWaveGroupScenario</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L97" class="lines-num"><span id="L97" data-line-number="97"></span></td>
							
							<td rel="L97" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L98" class="lines-num"><span id="L98" data-line-number="98"></span></td>
							
							<td rel="L98" class="lines-code chroma"><code class="code-inner">    <span class="nx">Chance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L99" class="lines-num"><span id="L99" data-line-number="99"></span></td>
							
							<td rel="L99" class="lines-code chroma"><code class="code-inner">    <span class="nx">Enabled</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L100" class="lines-num"><span id="L100" data-line-number="100"></span></td>
							
							<td rel="L100" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxToBeGroup</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L101" class="lines-num"><span id="L101" data-line-number="101"></span></td>
							
							<td rel="L101" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinToBeGroup</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L102" class="lines-num"><span id="L102" data-line-number="102"></span></td>
							
							<td rel="L102" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L103" class="lines-num"><span id="L103" data-line-number="103"></span></td>
							
							<td rel="L103" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L104" class="lines-num"><span id="L104" data-line-number="104"></span></td>
							
							<td rel="L104" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ILimit</span> <span class="kr">extends</span> <span class="nx">MinMax</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L105" class="lines-num"><span id="L105" data-line-number="105"></span></td>
							
							<td rel="L105" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L106" class="lines-num"><span id="L106" data-line-number="106"></span></td>
							
							<td rel="L106" class="lines-code chroma"><code class="code-inner">    <span class="nx">items</span>: <span class="kt">any</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L107" class="lines-num"><span id="L107" data-line-number="107"></span></td>
							
							<td rel="L107" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L108" class="lines-num"><span id="L108" data-line-number="108"></span></td>
							
							<td rel="L108" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L109" class="lines-num"><span id="L109" data-line-number="109"></span></td>
							
							<td rel="L109" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">AirdropParameter</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L110" class="lines-num"><span id="L110" data-line-number="110"></span></td>
							
							<td rel="L110" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L111" class="lines-num"><span id="L111" data-line-number="111"></span></td>
							
							<td rel="L111" class="lines-code chroma"><code class="code-inner">    <span class="nx">AirdropPointDeactivateDistance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L112" class="lines-num"><span id="L112" data-line-number="112"></span></td>
							
							<td rel="L112" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinPlayersCountToSpawnAirdrop</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L113" class="lines-num"><span id="L113" data-line-number="113"></span></td>
							
							<td rel="L113" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L114" class="lines-num"><span id="L114" data-line-number="114"></span></td>
							
							<td rel="L114" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropCooldownMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L115" class="lines-num"><span id="L115" data-line-number="115"></span></td>
							
							<td rel="L115" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropCooldownMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L116" class="lines-num"><span id="L116" data-line-number="116"></span></td>
							
							<td rel="L116" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropEnd</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L117" class="lines-num"><span id="L117" data-line-number="117"></span></td>
							
							<td rel="L117" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L118" class="lines-num"><span id="L118" data-line-number="118"></span></td>
							
							<td rel="L118" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropStartMax</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L119" class="lines-num"><span id="L119" data-line-number="119"></span></td>
							
							<td rel="L119" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlaneAirdropStartMin</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L120" class="lines-num"><span id="L120" data-line-number="120"></span></td>
							
							<td rel="L120" class="lines-code chroma"><code class="code-inner">    <span class="nx">UnsuccessfulTryPenalty</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L121" class="lines-num"><span id="L121" data-line-number="121"></span></td>
							
							<td rel="L121" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L122" class="lines-num"><span id="L122" data-line-number="122"></span></td>
							
							<td rel="L122" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L123" class="lines-num"><span id="L123" data-line-number="123"></span></td>
							
							<td rel="L123" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Banner</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L124" class="lines-num"><span id="L124" data-line-number="124"></span></td>
							
							<td rel="L124" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L125" class="lines-num"><span id="L125" data-line-number="125"></span></td>
							
							<td rel="L125" class="lines-code chroma"><code class="code-inner">    <span class="nx">id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L126" class="lines-num"><span id="L126" data-line-number="126"></span></td>
							
							<td rel="L126" class="lines-code chroma"><code class="code-inner">    <span class="nx">pic</span>: <span class="kt">Pic</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L127" class="lines-num"><span id="L127" data-line-number="127"></span></td>
							
							<td rel="L127" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L128" class="lines-num"><span id="L128" data-line-number="128"></span></td>
							
							<td rel="L128" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L129" class="lines-num"><span id="L129" data-line-number="129"></span></td>
							
							<td rel="L129" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Pic</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L130" class="lines-num"><span id="L130" data-line-number="130"></span></td>
							
							<td rel="L130" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L131" class="lines-num"><span id="L131" data-line-number="131"></span></td>
							
							<td rel="L131" class="lines-code chroma"><code class="code-inner">    <span class="nx">path</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L132" class="lines-num"><span id="L132" data-line-number="132"></span></td>
							
							<td rel="L132" class="lines-code chroma"><code class="code-inner">    <span class="nx">rcid</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L133" class="lines-num"><span id="L133" data-line-number="133"></span></td>
							
							<td rel="L133" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L134" class="lines-num"><span id="L134" data-line-number="134"></span></td>
							
							<td rel="L134" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L135" class="lines-num"><span id="L135" data-line-number="135"></span></td>
							
							<td rel="L135" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">BossLocationSpawn</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L136" class="lines-num"><span id="L136" data-line-number="136"></span></td>
							
							<td rel="L136" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L137" class="lines-num"><span id="L137" data-line-number="137"></span></td>
							
							<td rel="L137" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L138" class="lines-num"><span id="L138" data-line-number="138"></span></td>
							
							<td rel="L138" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossDifficult</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L139" class="lines-num"><span id="L139" data-line-number="139"></span></td>
							
							<td rel="L139" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossEscortAmount</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L140" class="lines-num"><span id="L140" data-line-number="140"></span></td>
							
							<td rel="L140" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossEscortDifficult</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L141" class="lines-num"><span id="L141" data-line-number="141"></span></td>
							
							<td rel="L141" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossEscortType</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L142" class="lines-num"><span id="L142" data-line-number="142"></span></td>
							
							<td rel="L142" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossName</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L143" class="lines-num"><span id="L143" data-line-number="143"></span></td>
							
							<td rel="L143" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossPlayer</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L144" class="lines-num"><span id="L144" data-line-number="144"></span></td>
							
							<td rel="L144" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossZone</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L145" class="lines-num"><span id="L145" data-line-number="145"></span></td>
							
							<td rel="L145" class="lines-code chroma"><code class="code-inner">    <span class="nx">RandomTimeSpawn</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L146" class="lines-num"><span id="L146" data-line-number="146"></span></td>
							
							<td rel="L146" class="lines-code chroma"><code class="code-inner">    <span class="nx">Time</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L147" class="lines-num"><span id="L147" data-line-number="147"></span></td>
							
							<td rel="L147" class="lines-code chroma"><code class="code-inner">    <span class="nx">TriggerId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L148" class="lines-num"><span id="L148" data-line-number="148"></span></td>
							
							<td rel="L148" class="lines-code chroma"><code class="code-inner">    <span class="nx">TriggerName</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L149" class="lines-num"><span id="L149" data-line-number="149"></span></td>
							
							<td rel="L149" class="lines-code chroma"><code class="code-inner">    <span class="nx">Delay?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L150" class="lines-num"><span id="L150" data-line-number="150"></span></td>
							
							<td rel="L150" class="lines-code chroma"><code class="code-inner">    <span class="nx">ForceSpawn?</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L151" class="lines-num"><span id="L151" data-line-number="151"></span></td>
							
							<td rel="L151" class="lines-code chroma"><code class="code-inner">    <span class="nx">IgnoreMaxBots?</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L152" class="lines-num"><span id="L152" data-line-number="152"></span></td>
							
							<td rel="L152" class="lines-code chroma"><code class="code-inner">    <span class="nx">Supports?</span>: <span class="kt">BossSupport</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L153" class="lines-num"><span id="L153" data-line-number="153"></span></td>
							
							<td rel="L153" class="lines-code chroma"><code class="code-inner">    <span class="nx">sptId?</span>: <span class="kt">string</span><span class="p">;</span>
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
							
							<td rel="L156" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">BossSupport</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L157" class="lines-num"><span id="L157" data-line-number="157"></span></td>
							
							<td rel="L157" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L158" class="lines-num"><span id="L158" data-line-number="158"></span></td>
							
							<td rel="L158" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossEscortAmount</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L159" class="lines-num"><span id="L159" data-line-number="159"></span></td>
							
							<td rel="L159" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossEscortDifficult</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L160" class="lines-num"><span id="L160" data-line-number="160"></span></td>
							
							<td rel="L160" class="lines-code chroma"><code class="code-inner">    <span class="nx">BossEscortType</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L161" class="lines-num"><span id="L161" data-line-number="161"></span></td>
							
							<td rel="L161" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L162" class="lines-num"><span id="L162" data-line-number="162"></span></td>
							
							<td rel="L162" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L163" class="lines-num"><span id="L163" data-line-number="163"></span></td>
							
							<td rel="L163" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">BotLocationModifier</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L164" class="lines-num"><span id="L164" data-line-number="164"></span></td>
							
							<td rel="L164" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L165" class="lines-num"><span id="L165" data-line-number="165"></span></td>
							
							<td rel="L165" class="lines-code chroma"><code class="code-inner">    <span class="nx">AccuracySpeed</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L166" class="lines-num"><span id="L166" data-line-number="166"></span></td>
							
							<td rel="L166" class="lines-code chroma"><code class="code-inner">    <span class="nx">DistToActivate</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L167" class="lines-num"><span id="L167" data-line-number="167"></span></td>
							
							<td rel="L167" class="lines-code chroma"><code class="code-inner">    <span class="nx">DistToPersueAxemanCoef</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L168" class="lines-num"><span id="L168" data-line-number="168"></span></td>
							
							<td rel="L168" class="lines-code chroma"><code class="code-inner">    <span class="nx">DistToSleep</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L169" class="lines-num"><span id="L169" data-line-number="169"></span></td>
							
							<td rel="L169" class="lines-code chroma"><code class="code-inner">    <span class="nx">GainSight</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L170" class="lines-num"><span id="L170" data-line-number="170"></span></td>
							
							<td rel="L170" class="lines-code chroma"><code class="code-inner">    <span class="nx">KhorovodChance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L171" class="lines-num"><span id="L171" data-line-number="171"></span></td>
							
							<td rel="L171" class="lines-code chroma"><code class="code-inner">    <span class="nx">MagnetPower</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L172" class="lines-num"><span id="L172" data-line-number="172"></span></td>
							
							<td rel="L172" class="lines-code chroma"><code class="code-inner">    <span class="nx">MarksmanAccuratyCoef</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L173" class="lines-num"><span id="L173" data-line-number="173"></span></td>
							
							<td rel="L173" class="lines-code chroma"><code class="code-inner">    <span class="nx">Scattering</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L174" class="lines-num"><span id="L174" data-line-number="174"></span></td>
							
							<td rel="L174" class="lines-code chroma"><code class="code-inner">    <span class="nx">VisibleDistance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L175" class="lines-num"><span id="L175" data-line-number="175"></span></td>
							
							<td rel="L175" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L176" class="lines-num"><span id="L176" data-line-number="176"></span></td>
							
							<td rel="L176" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L177" class="lines-num"><span id="L177" data-line-number="177"></span></td>
							
							<td rel="L177" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">MinMaxBot</span> <span class="kr">extends</span> <span class="nx">MinMax</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L178" class="lines-num"><span id="L178" data-line-number="178"></span></td>
							
							<td rel="L178" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L179" class="lines-num"><span id="L179" data-line-number="179"></span></td>
							
							<td rel="L179" class="lines-code chroma"><code class="code-inner">    <span class="nx">WildSpawnType</span>: <span class="kt">WildSpawnType</span> <span class="o">|</span> <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L180" class="lines-num"><span id="L180" data-line-number="180"></span></td>
							
							<td rel="L180" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L181" class="lines-num"><span id="L181" data-line-number="181"></span></td>
							
							<td rel="L181" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L182" class="lines-num"><span id="L182" data-line-number="182"></span></td>
							
							<td rel="L182" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">MinPlayerWaitTime</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L183" class="lines-num"><span id="L183" data-line-number="183"></span></td>
							
							<td rel="L183" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L184" class="lines-num"><span id="L184" data-line-number="184"></span></td>
							
							<td rel="L184" class="lines-code chroma"><code class="code-inner">    <span class="nx">minPlayers</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L185" class="lines-num"><span id="L185" data-line-number="185"></span></td>
							
							<td rel="L185" class="lines-code chroma"><code class="code-inner">    <span class="nx">time</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L186" class="lines-num"><span id="L186" data-line-number="186"></span></td>
							
							<td rel="L186" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L187" class="lines-num"><span id="L187" data-line-number="187"></span></td>
							
							<td rel="L187" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L188" class="lines-num"><span id="L188" data-line-number="188"></span></td>
							
							<td rel="L188" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Preview</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L189" class="lines-num"><span id="L189" data-line-number="189"></span></td>
							
							<td rel="L189" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L190" class="lines-num"><span id="L190" data-line-number="190"></span></td>
							
							<td rel="L190" class="lines-code chroma"><code class="code-inner">    <span class="nx">path</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L191" class="lines-num"><span id="L191" data-line-number="191"></span></td>
							
							<td rel="L191" class="lines-code chroma"><code class="code-inner">    <span class="nx">rcid</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L192" class="lines-num"><span id="L192" data-line-number="192"></span></td>
							
							<td rel="L192" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L193" class="lines-num"><span id="L193" data-line-number="193"></span></td>
							
							<td rel="L193" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L194" class="lines-num"><span id="L194" data-line-number="194"></span></td>
							
							<td rel="L194" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Scene</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L195" class="lines-num"><span id="L195" data-line-number="195"></span></td>
							
							<td rel="L195" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L196" class="lines-num"><span id="L196" data-line-number="196"></span></td>
							
							<td rel="L196" class="lines-code chroma"><code class="code-inner">    <span class="nx">path</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L197" class="lines-num"><span id="L197" data-line-number="197"></span></td>
							
							<td rel="L197" class="lines-code chroma"><code class="code-inner">    <span class="nx">rcid</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L198" class="lines-num"><span id="L198" data-line-number="198"></span></td>
							
							<td rel="L198" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L199" class="lines-num"><span id="L199" data-line-number="199"></span></td>
							
							<td rel="L199" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L200" class="lines-num"><span id="L200" data-line-number="200"></span></td>
							
							<td rel="L200" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">SpawnPointParam</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L201" class="lines-num"><span id="L201" data-line-number="201"></span></td>
							
							<td rel="L201" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L202" class="lines-num"><span id="L202" data-line-number="202"></span></td>
							
							<td rel="L202" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotZoneName</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L203" class="lines-num"><span id="L203" data-line-number="203"></span></td>
							
							<td rel="L203" class="lines-code chroma"><code class="code-inner">    <span class="nx">Categories</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L204" class="lines-num"><span id="L204" data-line-number="204"></span></td>
							
							<td rel="L204" class="lines-code chroma"><code class="code-inner">    <span class="nx">ColliderParams</span>: <span class="kt">ColliderParams</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L205" class="lines-num"><span id="L205" data-line-number="205"></span></td>
							
							<td rel="L205" class="lines-code chroma"><code class="code-inner">    <span class="nx">CorePointId</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L206" class="lines-num"><span id="L206" data-line-number="206"></span></td>
							
							<td rel="L206" class="lines-code chroma"><code class="code-inner">    <span class="nx">DelayToCanSpawnSec</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L207" class="lines-num"><span id="L207" data-line-number="207"></span></td>
							
							<td rel="L207" class="lines-code chroma"><code class="code-inner">    <span class="nx">Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L208" class="lines-num"><span id="L208" data-line-number="208"></span></td>
							
							<td rel="L208" class="lines-code chroma"><code class="code-inner">    <span class="nx">Infiltration</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L209" class="lines-num"><span id="L209" data-line-number="209"></span></td>
							
							<td rel="L209" class="lines-code chroma"><code class="code-inner">    <span class="nx">Position</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L210" class="lines-num"><span id="L210" data-line-number="210"></span></td>
							
							<td rel="L210" class="lines-code chroma"><code class="code-inner">    <span class="nx">Rotation</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L211" class="lines-num"><span id="L211" data-line-number="211"></span></td>
							
							<td rel="L211" class="lines-code chroma"><code class="code-inner">    <span class="nx">Sides</span>: <span class="kt">string</span><span class="p">[</span><span class="p">]</span><span class="p">;</span>
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
							
							<td rel="L214" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">ColliderParams</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L215" class="lines-num"><span id="L215" data-line-number="215"></span></td>
							
							<td rel="L215" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L216" class="lines-num"><span id="L216" data-line-number="216"></span></td>
							
							<td rel="L216" class="lines-code chroma"><code class="code-inner">    <span class="nx">_parent</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L217" class="lines-num"><span id="L217" data-line-number="217"></span></td>
							
							<td rel="L217" class="lines-code chroma"><code class="code-inner">    <span class="nx">_props</span>: <span class="kt">Props</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L218" class="lines-num"><span id="L218" data-line-number="218"></span></td>
							
							<td rel="L218" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L219" class="lines-num"><span id="L219" data-line-number="219"></span></td>
							
							<td rel="L219" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L220" class="lines-num"><span id="L220" data-line-number="220"></span></td>
							
							<td rel="L220" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Props</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L221" class="lines-num"><span id="L221" data-line-number="221"></span></td>
							
							<td rel="L221" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L222" class="lines-num"><span id="L222" data-line-number="222"></span></td>
							
							<td rel="L222" class="lines-code chroma"><code class="code-inner">    <span class="nx">Center</span>: <span class="kt">Ixyz</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L223" class="lines-num"><span id="L223" data-line-number="223"></span></td>
							
							<td rel="L223" class="lines-code chroma"><code class="code-inner">    <span class="nx">Radius</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L224" class="lines-num"><span id="L224" data-line-number="224"></span></td>
							
							<td rel="L224" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L225" class="lines-num"><span id="L225" data-line-number="225"></span></td>
							
							<td rel="L225" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L226" class="lines-num"><span id="L226" data-line-number="226"></span></td>
							
							<td rel="L226" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Exit</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L227" class="lines-num"><span id="L227" data-line-number="227"></span></td>
							
							<td rel="L227" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L228" class="lines-num"><span id="L228" data-line-number="228"></span></td>
							
							<td rel="L228" class="lines-code chroma"><code class="code-inner">    <span class="cm">/** % Chance out of 100 exit will appear in raid */</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L229" class="lines-num"><span id="L229" data-line-number="229"></span></td>
							
							<td rel="L229" class="lines-code chroma"><code class="code-inner">    <span class="nx">Chance</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L230" class="lines-num"><span id="L230" data-line-number="230"></span></td>
							
							<td rel="L230" class="lines-code chroma"><code class="code-inner">    <span class="nx">Count</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L231" class="lines-num"><span id="L231" data-line-number="231"></span></td>
							
							<td rel="L231" class="lines-code chroma"><code class="code-inner">    <span class="nx">EntryPoints</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L232" class="lines-num"><span id="L232" data-line-number="232"></span></td>
							
							<td rel="L232" class="lines-code chroma"><code class="code-inner">    <span class="nx">EventAvailable</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L233" class="lines-num"><span id="L233" data-line-number="233"></span></td>
							
							<td rel="L233" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExfiltrationTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L234" class="lines-num"><span id="L234" data-line-number="234"></span></td>
							
							<td rel="L234" class="lines-code chroma"><code class="code-inner">    <span class="nx">ExfiltrationType</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L235" class="lines-num"><span id="L235" data-line-number="235"></span></td>
							
							<td rel="L235" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequiredSlot?</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L236" class="lines-num"><span id="L236" data-line-number="236"></span></td>
							
							<td rel="L236" class="lines-code chroma"><code class="code-inner">    <span class="nx">Id</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L237" class="lines-num"><span id="L237" data-line-number="237"></span></td>
							
							<td rel="L237" class="lines-code chroma"><code class="code-inner">    <span class="nx">MaxTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L238" class="lines-num"><span id="L238" data-line-number="238"></span></td>
							
							<td rel="L238" class="lines-code chroma"><code class="code-inner">    <span class="nx">MinTime</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L239" class="lines-num"><span id="L239" data-line-number="239"></span></td>
							
							<td rel="L239" class="lines-code chroma"><code class="code-inner">    <span class="nx">Name</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L240" class="lines-num"><span id="L240" data-line-number="240"></span></td>
							
							<td rel="L240" class="lines-code chroma"><code class="code-inner">    <span class="nx">PassageRequirement</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L241" class="lines-num"><span id="L241" data-line-number="241"></span></td>
							
							<td rel="L241" class="lines-code chroma"><code class="code-inner">    <span class="nx">PlayersCount</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L242" class="lines-num"><span id="L242" data-line-number="242"></span></td>
							
							<td rel="L242" class="lines-code chroma"><code class="code-inner">    <span class="nx">RequirementTip</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L243" class="lines-num"><span id="L243" data-line-number="243"></span></td>
							
							<td rel="L243" class="lines-code chroma"><code class="code-inner">    <span class="nx">Side?</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L244" class="lines-num"><span id="L244" data-line-number="244"></span></td>
							
							<td rel="L244" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L245" class="lines-num"><span id="L245" data-line-number="245"></span></td>
							
							<td rel="L245" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L246" class="lines-num"><span id="L246" data-line-number="246"></span></td>
							
							<td rel="L246" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">MaxItemCountInLocation</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L247" class="lines-num"><span id="L247" data-line-number="247"></span></td>
							
							<td rel="L247" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L248" class="lines-num"><span id="L248" data-line-number="248"></span></td>
							
							<td rel="L248" class="lines-code chroma"><code class="code-inner">    <span class="nx">TemplateId</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L249" class="lines-num"><span id="L249" data-line-number="249"></span></td>
							
							<td rel="L249" class="lines-code chroma"><code class="code-inner">    <span class="nx">Value</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L250" class="lines-num"><span id="L250" data-line-number="250"></span></td>
							
							<td rel="L250" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L251" class="lines-num"><span id="L251" data-line-number="251"></span></td>
							
							<td rel="L251" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L252" class="lines-num"><span id="L252" data-line-number="252"></span></td>
							
							<td rel="L252" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">interface</span> <span class="nx">Wave</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L253" class="lines-num"><span id="L253" data-line-number="253"></span></td>
							
							<td rel="L253" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L254" class="lines-num"><span id="L254" data-line-number="254"></span></td>
							
							<td rel="L254" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotPreset</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L255" class="lines-num"><span id="L255" data-line-number="255"></span></td>
							
							<td rel="L255" class="lines-code chroma"><code class="code-inner">    <span class="nx">BotSide</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L256" class="lines-num"><span id="L256" data-line-number="256"></span></td>
							
							<td rel="L256" class="lines-code chroma"><code class="code-inner">    <span class="nx">SpawnPoints</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L257" class="lines-num"><span id="L257" data-line-number="257"></span></td>
							
							<td rel="L257" class="lines-code chroma"><code class="code-inner">    <span class="nx">WildSpawnType</span>: <span class="kt">WildSpawnType</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L258" class="lines-num"><span id="L258" data-line-number="258"></span></td>
							
							<td rel="L258" class="lines-code chroma"><code class="code-inner">    <span class="nx">isPlayers</span>: <span class="kt">boolean</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L259" class="lines-num"><span id="L259" data-line-number="259"></span></td>
							
							<td rel="L259" class="lines-code chroma"><code class="code-inner">    <span class="kt">number</span><span class="o">:</span> <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L260" class="lines-num"><span id="L260" data-line-number="260"></span></td>
							
							<td rel="L260" class="lines-code chroma"><code class="code-inner">    <span class="nx">slots_max</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L261" class="lines-num"><span id="L261" data-line-number="261"></span></td>
							
							<td rel="L261" class="lines-code chroma"><code class="code-inner">    <span class="nx">slots_min</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L262" class="lines-num"><span id="L262" data-line-number="262"></span></td>
							
							<td rel="L262" class="lines-code chroma"><code class="code-inner">    <span class="nx">time_max</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L263" class="lines-num"><span id="L263" data-line-number="263"></span></td>
							
							<td rel="L263" class="lines-code chroma"><code class="code-inner">    <span class="nx">time_min</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L264" class="lines-num"><span id="L264" data-line-number="264"></span></td>
							
							<td rel="L264" class="lines-code chroma"><code class="code-inner">    <span class="nx">sptId?</span>: <span class="kt">string</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L265" class="lines-num"><span id="L265" data-line-number="265"></span></td>
							
							<td rel="L265" class="lines-code chroma"><code class="code-inner">    <span class="nx">ChanceGroup?</span>: <span class="kt">number</span><span class="p">;</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L266" class="lines-num"><span id="L266" data-line-number="266"></span></td>
							
							<td rel="L266" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L267" class="lines-num"><span id="L267" data-line-number="267"></span></td>
							
							<td rel="L267" class="lines-code chroma"><code class="code-inner">
</code></td>
						</tr>
						
						
						<tr>
							<td id="L268" class="lines-num"><span id="L268" data-line-number="268"></span></td>
							
							<td rel="L268" class="lines-code chroma"><code class="code-inner"><span class="kr">export</span> <span class="kr">enum</span> <span class="nx">WildSpawnType</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L269" class="lines-num"><span id="L269" data-line-number="269"></span></td>
							
							<td rel="L269" class="lines-code chroma"><code class="code-inner"><span class="p">{</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L270" class="lines-num"><span id="L270" data-line-number="270"></span></td>
							
							<td rel="L270" class="lines-code chroma"><code class="code-inner">    <span class="nx">ASSAULT</span> <span class="o">=</span> <span class="s2">&#34;assault&#34;</span><span class="p">,</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L271" class="lines-num"><span id="L271" data-line-number="271"></span></td>
							
							<td rel="L271" class="lines-code chroma"><code class="code-inner">    <span class="nx">MARKSMAN</span> <span class="o">=</span> <span class="s2">&#34;marksman&#34;</span><span class="p">,</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L272" class="lines-num"><span id="L272" data-line-number="272"></span></td>
							
							<td rel="L272" class="lines-code chroma"><code class="code-inner">    <span class="nx">PMCBOT</span> <span class="o">=</span> <span class="s2">&#34;pmcbot&#34;</span><span class="p">,</span>
</code></td>
						</tr>
						
						
						<tr>
							<td id="L273" class="lines-num"><span id="L273" data-line-number="273"></span></td>
							
							<td rel="L273" class="lines-code chroma"><code class="code-inner"><span class="p">}</span>
</code></td>
						</tr>
						
					</tbody>
				</table>
				<div class="code-line-menu ui vertical pointing menu tippy-target">
					
					<a class="item view_git_blame" href="/SPT-AKI/Server/blame/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/ILocationBase.ts">View Git Blame</a>
					<a class="item copy-line-permalink" data-url="/SPT-AKI/Server/src/commit/d8504950f26a85a3ba681c6cd8a9abc79a9924d6/project/src/models/eft/common/ILocationBase.ts">Copy Permalink</a>
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
			
		
		
			Page: <strong>162ms</strong>
			Template repo/home: <strong>17ms</strong>
		
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

