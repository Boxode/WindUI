import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
	await page.goto('https://alpha-version.windui.org/')

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/windUI/)
})

test('hero', async ({ page }) => {
	await page.goto('https://alpha-version.windui.org/')

	const page1Promise = page.waitForEvent('popup')
	await page
		.getByRole('link', { name: 'Created with ❤ by Boxode Labs' })
		.click()
	const page1 = await page1Promise
	const page2Promise = page.waitForEvent('popup')
	await page.getByLabel('Product Hunt').click()
	const page2 = await page2Promise
	const page3Promise = page.waitForEvent('popup')
	await page.getByLabel("Boxode's website").click()
	const page3 = await page3Promise
	const page4Promise = page.waitForEvent('popup')
	await page.getByLabel("Tailwind's website").click()
	const page4 = await page4Promise
	const page5Promise = page.waitForEvent('popup')
	await page.getByLabel("Astro's website").click()
	const page5 = await page5Promise
	const page6Promise = page.waitForEvent('popup')
	await page.getByLabel('Stripe"s Website').click()
	const page6 = await page6Promise
})
