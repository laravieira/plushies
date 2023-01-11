requirejs.config({
    baseUrl: '/',
    paths: {
        'components': 'components',
        'jquery': 'node_modules/jquery/dist/jquery',
        'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap.bundle',
        'devextreme': 'devextreme_amd',
        'inferno-create-element': 'node_modules/inferno-create-element/dist/inferno-create-element',
        'inferno-hydrate': 'node_modules/inferno-hydrate/dist/inferno-hydrate',
        'inferno': 'node_modules/inferno/dist/inferno',
        '@devextreme/runtime/inferno': 'devextreme_amd/runtime/inferno_amd/index',
        '@devextreme/runtime/re_render_effect': 'devextreme_amd/runtime/inferno_amd/re_render_effect',
        '@devextreme/runtime/normalize_styles': 'devextreme_amd/runtime/inferno_amd/normalize_styles',
        '@devextreme/runtime/render_template': 'devextreme_amd/runtime/inferno_amd/render_template',
        '@devextreme/runtime/effect_host': 'devextreme_amd/runtime/inferno_amd/effect_host',
        '@devextreme/runtime/effect': 'devextreme_amd/runtime/inferno_amd/effect',
        '@devextreme/runtime/base_component': 'devextreme_amd/runtime/inferno_amd/base_component',
        '@devextreme/runtime/portal': 'devextreme_amd/runtime/inferno_amd/portal',
        '@devextreme/runtime/create_context': 'devextreme_amd/runtime/inferno_amd/create_context',
        '@devextreme/runtime/mocked/hydrate': 'devextreme_amd/runtime/inferno_amd/mocked/hydrate',
        '@devextreme/runtime/mocked/shared': 'devextreme_amd/runtime/inferno_amd/mocked/shared',
    }
});

define([
    'jquery',
    'devextreme/ui/button',
    'devextreme/integration/jquery'
], function() {
    window.ThemeName = 'none';

    requirejs(['components/Container/Container']);
});
