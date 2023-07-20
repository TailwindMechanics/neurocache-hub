#### docs/uiplan.md
<details>
<summary>1. Study and Understand Layout Design</summary>

```md
# 1.1 Master Flexbox and Grid
>  Resources
- Flexbox Froggy: An interactive game to learn Flexbox.
- Grid Garden: An interactive game to learn CSS Grid.
- CSS Tricks Guide to Flexbox: A comprehensive guide on Flexbox.
- CSS Tricks Guide to Grid: A comprehensive guide on CSS Grid.
- MDN Flexbox: Mozilla's guide on Flexbox.
- MDN Grid: Mozilla's guide on CSS Grid.
> Implementation
- Understand the concepts, then apply them to small examples.
- Experiment with different layouts to understand how Flexbox and Grid behave.
- Mastering these concepts is key to create responsive designs.

# 1.2 Ensure Responsiveness
> Resources
- Responsive Web Design Basics: Google's guide to responsive design.
- Media Queries for Standard Devices: A collection of media queries for standard devices.
- Using media queries: Mozilla's guide on using media queries.
> Implementation
- Understand the basic principles of responsive design.
- Get familiar with media queries and how they work. 
- You can test media queries in the browser's developer tools.
- Develop mobile-first: 
- Start with a mobile layout, then scale up for larger screens. 
- This approach ensures that your site performs well on smaller, resource-constrained devices.
- Test your designs on various screen sizes using the browser's developer tools... Sizzy.
- Introduce Storybook early in the process: 
- It has a built-in tool to simulate different viewport sizes, 
- Which makes it easier to develop and test components for various screen sizes.
```
- [x] 1.1 You are able to create a complex layout using Flexbox or Grid.
- [x] 1.1 You understand how to use Flexbox or Grid to handle responsiveness.
- [x] 1.1 You have experimented with Flexbox and Grid and understand their behaviour.
- [x] 1.2 You understand the basics of responsive design and how to use media queries.
- [x] 1.2 You can design mobile-first layouts and scale them for larger screens.
- [x] 1.2 You have tested your designs on various screen sizes and they are adaptable.
</details>
<details>
<summary>2. Get to Know Your Tools</summary>

```md
# 2.1 Research and install Headless
- Check it out, install it `pnpm add @headlessui/react`
# 2.2 Research Storybook
- Learn how to use Storybook for component development and documentation.
- Install it `npx -p @storybook/cli sb init --type react`
- Build a test Button story
- Research and integrate addons
# 2.3 Research Accessibility
- Study accessibility standards and guidelines, such as WCAG.
# 2.4 Understand Testing
- Understand the concepts of unit testing, and learn how to use Jest and React Testing Library.
# 2.5 Familiarize Yourself with Storyshots
- Learn how Storyshots can help in snapshot testing and complement your unit testing strategy.
# 2.6 Familiarize yourself with Cypress
- Check out https://www.cypress.io/ 
- Get acquainted with end-to-end testing in general
```
- [ ] 2.1 You've install and tested headless ui.
- [ ] 2.2 You've installed and tested a button story in Storybook.
- [ ] 2.2 You feel comfortable with Storybook.
- [ ] 2.2 Test addons
- [ ] 2.3 You understand the basic principles of web accessibility. 
- [ ] 2.3 You know how to check your components for accessibility issues.
- [ ] 2.4 You understand what unit testing is and how to write tests with Jest and RTL.
- [ ] 2.5 You understand how Storyshots can be used for snapshot testing.
- [ ] 2.6 You have a basic understanding of Cypress and end-to-end testing.
</details>
<details>
<summary>3. Choose a Page for Iterative Component Building</summary>

```md
# 3.1 Identify Necessary Atoms
- Identify a handful of atomic components that are necessary for the chosen page.
# 3.2 Build and Test the Atoms in Storybook
- Start building your atoms within Storybook, 
- Considering different states and variations, while applying tests.
# 3.3 Create Layout Components
- Using Flexbox and Grid, design and build reusable layout components in Storybook.
# 3.4 Create Feature Components
- Build higher-order components made up of the atomic components.
# 3.5 Refactor and Iterate
- Continuously improve your components as project requirements evolve.
```
- [ ] 3.1 You have identified the atomic components required to build a chosen page.
- [ ] 3.2 You have successfully built the atomic components in Storybook.
- [ ] 3.3 You have tested the atomic components and they work as expected.
- [ ] 3.4 You have built reusable layout components.
- [ ] 3.4 You have built higher-order components that can be used in different use.
- [ ] 3.5 You are continuously improving your components as project requirements evolve.
</details>
<details>
<summary>4. Extend Component Library and Apply to Whole Application</summary>

```md
# 4.1 Build Remaining Atoms and Components
- Using the same process as in step 4, iteratively build and test the rest of your library.
# 4.2 Apply Components to Entire Application
- Apply your tested and refined component library to the rest of your application.
# 4.3 Ensure Accessibility
- Make your site navigable with keyboard-only inputs and adhere to accessibility guidelines.
```
- [ ] 4.1 You have built the rest of your component library, tested, and documented it in Storybook.
- [ ] 4.2 You have successfully applied your component library across your application.
- [ ] 4.3 Your site is navigable with keyboard-only.
</details>