from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # 1. Navigate to the homepage.
    page.goto("http://localhost:3000")

    # 2. Wait for the page to be fully loaded.
    page.wait_for_load_state("networkidle")

    # 3. Take a screenshot of the main page.
    page.screenshot(path="jules-scratch/verification/tailwind_ui.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
