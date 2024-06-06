# Padding Rule with Media Queries

## Introduction

In web development, it's crucial to ensure that your website layout adjusts gracefully across different screen sizes. One way to achieve this is by using media queries to apply specific styling rules based on the viewport width. This markdown document demonstrates a padding rule applied to a header element with various sizes defined by media queries.

## CSS Code

```css
@media (max-width: 400px) {
  .header {
    padding: 16px 16px;
  }
}

@media (min-width: 400px) {
  .header {
    padding: 16px 32px;
  }
}

@media (min-width: 840px) {
  .header {
    padding: 16px 64px;
  }
}

@media (min-width: 1024px) {
  .header {
    padding: 16px 128px;
  }
}

@media (min-width: 1280px) {
  .header {
    padding: 16px 256px;
  }
}
