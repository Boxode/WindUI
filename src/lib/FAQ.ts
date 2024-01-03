export interface FAQ {
	key: number
	label: string
	title: string
	content: string
}

export const FAQS: FAQ[] = [
	{
		key: 3,
		label: 'Which JS framework is used?',
		title: 'Which JS framework is used?',
		content:
			'You can use the JS framework of your choice, be it React, Svelte, Vue, Astro, etc., as well as you can use it with HTML Vanilla. \n Some components that have animations, may not work correctly in HTML Vanilla, so you should opt to use some JS framework, although in our documentation we explain a little more about this.'
	},
	{
		key: 4,
		label: 'Which version of Tailwind CSS is used?',
		title: 'Which version of Tailwind CSS is used?',
		content:
			'Every component and template developed by the Wind UI team uses the latest version of Tailwind CSS for better cross-browser compatibility.'
	},
	{
		key: 5,
		label: 'Which browsers support Tailwind CSS?',
		title: 'Which browsers support Tailwind CSS?',
		content:
			'Tailwind CSS work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.'
	},
	{
		key: 7,
		label: 'Wind UI is related to the Tailwind CSS team?',
		title: 'Wind UI is related to the Tailwind CSS team?',
		content:
			'No, Wind UI is not related to the company behind Tailwind CSS or the team behind Tailwind CSS. Wind UI is a trademark of Boxode, Ltd. and is not affiliated with Tailwind CSS or any other brand.'
	},
	{
		key: 8,
		label: 'Can I use Wind UI in commercial or open source projects?',
		title: 'Can I use Wind UI in commercial or open source projects?',
		content:
			'Sure! Your license gives you the freedom to create a variety of projects, from simple public websites to software-as-a-service (SaaS) applications that may require end users to pay for access. There are no restrictions on the nature or purpose of the projects you can develop with Wind UI. For more information on the terms of use, please refer to the license at https://windui.org/license'
	},
	{
		key: 9,
		label: 'Can I sell templates/themes that I have built with Wind UI?',
		title: 'Can I sell templates/themes that I have built with Wind UI?',
		content:
			'No, the Wind UI license does not permit the creation of derivative products, such as themes, UI kits, page builders or other products in which you repackage and redistribute our components or templates for others to use in building their own websites. The Wind UI license is designed for use of our components and templates in individual projects, but not for redistribution or creation of competing products based on our resources. We recommend you to respect this limitation and use Wind UI in accordance with the license terms.'
	}
]
