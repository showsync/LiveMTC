{
	"name" : "LiveMTC Bridge",
	"version" : 1,
	"creationdate" : 3675930708,
	"modificationdate" : 3814172230,
	"viewrect" : [ 91.0, 406.0, 300.0, 500.0 ],
	"autoorganize" : 0,
	"hideprojectwindow" : 0,
	"showdependencies" : 1,
	"autolocalize" : 0,
	"contents" : 	{
		"patchers" : 		{
			"LiveMTC Bridge.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1,
				"toplevel" : 1
			}
,
			"delayList.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"quickAccessColors.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"saveSetting.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}

		}
,
		"code" : 		{
			"patcherSize.js" : 			{
				"kind" : "javascript",
				"local" : 1
			}
,
			"connectionAnimation.js" : 			{
				"kind" : "javascript",
				"local" : 1,
				"singleton" : 				{
					"bootpath" : "~/LiveMTC/Shared Dependencies",
					"projectrelativepath" : "../Shared Dependencies"
				}

			}
,
			"sharedVersionNumber.js" : 			{
				"kind" : "javascript",
				"local" : 1,
				"singleton" : 				{
					"bootpath" : "~/LiveMTC/Shared Dependencies",
					"projectrelativepath" : "../Shared Dependencies"
				}

			}

		}

	}
,
	"layout" : 	{

	}
,
	"searchpath" : 	{

	}
,
	"detailsvisible" : 0,
	"amxdtype" : 0,
	"readonly" : 0,
	"devpathtype" : 0,
	"devpath" : ".",
	"sortmode" : 0,
	"viewmode" : 0,
	"includepackages" : 0
}
