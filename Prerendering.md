Pre-rendering

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and more performace -> more SEO -> more hits.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)
Check That Pre-rendering Is Happening

You can check that pre-rendering is happening by taking the following steps:

    Disable JavaScript in your browser
    Try accessing this page

Two Forms of Pre-rendering

Next.js has two forms of pre-rendering:
Static Generation
Server-side Rendering.

    Next.js’ pre-rendering feature.
    The two forms of pre-rendering: Static Generation and Server-side Rendering.
    Static Generation with data, and without data.
    getStaticProps and how to use it to import external blog data into the index page.
    Some useful information on getStaticProps.
