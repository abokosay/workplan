import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Set a larger viewport
        await page.set_viewport_size({"width": 1280, "height": 720})

        # Capture console logs
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text()}"))

        await page.goto("http://localhost:8000")

        # Wait for the cards to be visible
        await page.wait_for_selector('text="Applications System Core"', timeout=10000)

        # Give animations time to finish
        await asyncio.sleep(2)

        await page.screenshot(path="jules-scratch/verification/homepage.png")
        await browser.close()

if __name__ == "__main__":
    # Create a file to capture the console logs
    with open("jules-scratch/verification/console.log", "w") as f:
        # Redirect stdout to the file
        original_stdout = os.dup(1)
        os.dup2(f.fileno(), 1)

        try:
            asyncio.run(main())
        finally:
            # Restore stdout
            os.dup2(original_stdout, 1)
            os.close(original_stdout)
