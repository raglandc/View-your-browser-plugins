
const displayPlugins = function () {

    console.log(navigator.plugins)
    const pluginLength = navigator.plugins.length;
    const plugins = navigator.plugins
    const container = [];
    for(let i = 0; i < pluginLength; i++) {
        container.push(" " + plugins[i].name);
    }
    document.getElementById("display-text").innerHTML = container;

}

