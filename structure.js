MainController:
	Functions:
		init()
	Data:
		- BaseURL <string>
		- Scraper_URL [<string>]
		- UnScraped_URL [<string>]


	Events:
		Start
			Create Scraper
		End
			Destroy Scraper
		Error
			Destroy Scraper
		Finished
			Destroy self

Scraper:
	Functions:
		init(URL)
		LoadPage()
	Data:
		- URL <string>

	Events:
		- Start
			- Load website
		- Error
			- Destroy Parser
		- Data Loaded
			- Create Parser
		- End
			- Destroy Parser
Parser:

	Functions:
		init(HTML)
		ParsePage()
	Data:
		- HTML text <string>


	Events:
		- Start
			- analyze text
		- Error
			- Return, destroy self
		- Finished
			- Return data/ Save data