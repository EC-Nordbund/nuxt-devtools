const devToolsPlugin = (ctx) => {
  if (ctx.isDev) {
    const script = document.createElement("script");
    script.src = "http://localhost:8098";

    document.body.appendChild(script);
  }
};

export default devToolsPlugin;
