const devToolsPlugin = (ctx) => {
  // Check if in Development
  if (ctx.isDev) {
    // Add script
    const script = document.createElement("script");
    script.src = "http://localhost:8098";

    document.body.appendChild(script);
  }
};

export default devToolsPlugin;
