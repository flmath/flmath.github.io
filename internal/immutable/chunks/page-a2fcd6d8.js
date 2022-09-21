const n=`<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Empirical_growth_testing</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"><\/script><script>
(function() {
  function addWidgetsRenderer() {
    var mimeElement = document.querySelector('script[type="application/vnd.jupyter.widget-view+json"]');
    var scriptElement = document.createElement('script');
    
    var widgetRendererSrc = 'https://unpkg.com/@jupyter-widgets/html-manager@*/dist/embed-amd.js';
    
    var widgetState;

    // Fallback for older version:
    try {
      widgetState = mimeElement && JSON.parse(mimeElement.innerHTML);

      if (widgetState && (widgetState.version_major < 2 || !widgetState.version_major)) {
        
        var widgetRendererSrc = 'https://unpkg.com/@jupyter-js-widgets@*/dist/embed.js';
        
      }
    } catch(e) {}

    scriptElement.src = widgetRendererSrc;
    document.body.appendChild(scriptElement);
  }

  document.addEventListener('DOMContentLoaded', addWidgetsRenderer);
}());
<\/script>




<style type="text/css">
    pre { line-height: 125%; }
td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
.highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>



<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
 * Mozilla scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */
[data-jp-theme-scrollbars='true'] {
  scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar. These selectors
 * will match lower in the tree, and so will override the above */
[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
}

/* tiny scrollbar */

.jp-scrollbar-tiny {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
  scrollbar-width: thin;
}

/*
 * Webkit scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-corner {
  background: var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-thumb {
  background: rgb(var(--jp-scrollbar-thumb-color));
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-right: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-bottom: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar */

[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-corner,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-corner {
  background-color: transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid transparent;
  border-right: var(--jp-scrollbar-endpad) solid transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid transparent;
  border-bottom: var(--jp-scrollbar-endpad) solid transparent;
}

/* tiny scrollbar */

.jp-scrollbar-tiny::-webkit-scrollbar,
.jp-scrollbar-tiny::-webkit-scrollbar-corner {
  background-color: transparent;
  height: 4px;
  width: 4px;
}

.jp-scrollbar-tiny::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:horizontal {
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:vertical {
  border-top: 0px solid transparent;
  border-bottom: 0px solid transparent;
}

/*
 * Phosphor
 */

.lm-ScrollBar[data-orientation='horizontal'] {
  min-height: 16px;
  max-height: 16px;
  min-width: 45px;
  border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
  min-width: 16px;
  max-width: 16px;
  min-height: 45px;
  border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
  background-color: #f0f0f0;
  background-position: center center;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
}

.lm-ScrollBar-button:hover {
  background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
  background-color: #cdcdcd;
}

.lm-ScrollBar-track {
  background: #f0f0f0;
}

.lm-ScrollBar-thumb {
  background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
  background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
  background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
  height: 100%;
  min-width: 15px;
  border-left: 1px solid #a0a0a0;
  border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
  width: 100%;
  min-height: 15px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-left);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-right);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-up);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-down);
  background-size: 17px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Widget, /* </DEPRECATED> */
.lm-Widget {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: default;
}


/* <DEPRECATED> */ .p-Widget.p-mod-hidden, /* </DEPRECATED> */
.lm-Widget.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-CommandPalette, /* </DEPRECATED> */
.lm-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-CommandPalette-search, /* </DEPRECATED> */
.lm-CommandPalette-search {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-content, /* </DEPRECATED> */
.lm-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-CommandPalette-header, /* </DEPRECATED> */
.lm-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


/* <DEPRECATED> */ .p-CommandPalette-item, /* </DEPRECATED> */
.lm-CommandPalette-item {
  display: flex;
  flex-direction: row;
}


/* <DEPRECATED> */ .p-CommandPalette-itemIcon, /* </DEPRECATED> */
.lm-CommandPalette-itemIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemContent, /* </DEPRECATED> */
.lm-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}


/* <DEPRECATED> */ .p-CommandPalette-itemShortcut, /* </DEPRECATED> */
.lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemLabel, /* </DEPRECATED> */
.lm-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lm-close-icon {
	border:1px solid transparent;
  background-color: transparent;
  position: absolute;
	z-index:1;
	right:3%;
	top: 0;
	bottom: 0;
	margin: auto;
	padding: 7px 0;
	display: none;
	vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.lm-close-icon:after {
	content: "X";
	display: block;
	width: 15px;
	height: 15px;
	text-align: center;
	color:#000;
	font-weight: normal;
	font-size: 12px;
	cursor: pointer;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-DockPanel, /* </DEPRECATED> */
.lm-DockPanel {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-widget, /* </DEPRECATED> */
.lm-DockPanel-widget {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-tabBar, /* </DEPRECATED> */
.lm-DockPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-DockPanel-handle, /* </DEPRECATED> */
.lm-DockPanel-handle {
  z-index: 2;
}


/* <DEPRECATED> */ .p-DockPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-DockPanel-handle:after, /* </DEPRECATED> */
.lm-DockPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal'] {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical'] {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal']:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical']:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}


/* <DEPRECATED> */ .p-DockPanel-overlay, /* </DEPRECATED> */
.lm-DockPanel-overlay {
  z-index: 3;
  box-sizing: border-box;
  pointer-events: none;
}


/* <DEPRECATED> */ .p-DockPanel-overlay.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-overlay.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Menu, /* </DEPRECATED> */
.lm-Menu {
  z-index: 10000;
  position: absolute;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-Menu-content, /* </DEPRECATED> */
.lm-Menu-content {
  margin: 0;
  padding: 0;
  display: table;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-Menu-item, /* </DEPRECATED> */
.lm-Menu-item {
  display: table-row;
}


/* <DEPRECATED> */
.p-Menu-item.p-mod-hidden,
.p-Menu-item.p-mod-collapsed,
/* </DEPRECATED> */
.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
  display: none !important;
}


/* <DEPRECATED> */
.p-Menu-itemIcon,
.p-Menu-itemSubmenuIcon,
/* </DEPRECATED> */
.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
  display: table-cell;
  text-align: center;
}


/* <DEPRECATED> */ .p-Menu-itemLabel, /* </DEPRECATED> */
.lm-Menu-itemLabel {
  display: table-cell;
  text-align: left;
}


/* <DEPRECATED> */ .p-Menu-itemShortcut, /* </DEPRECATED> */
.lm-Menu-itemShortcut {
  display: table-cell;
  text-align: right;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-MenuBar, /* </DEPRECATED> */
.lm-MenuBar {
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-MenuBar-content, /* </DEPRECATED> */
.lm-MenuBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}


/* <DEPRECATED> */ .p--MenuBar-item, /* </DEPRECATED> */
.lm-MenuBar-item {
  box-sizing: border-box;
}


/* <DEPRECATED> */
.p-MenuBar-itemIcon,
.p-MenuBar-itemLabel,
/* </DEPRECATED> */
.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
  display: inline-block;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-ScrollBar, /* </DEPRECATED> */
.lm-ScrollBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-ScrollBar-button, /* </DEPRECATED> */
.lm-ScrollBar-button {
  box-sizing: border-box;
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-track, /* </DEPRECATED> */
.lm-ScrollBar-track {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-thumb, /* </DEPRECATED> */
.lm-ScrollBar-thumb {
  box-sizing: border-box;
  position: absolute;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-SplitPanel-child, /* </DEPRECATED> */
.lm-SplitPanel-child {
  z-index: 0;
}


/* <DEPRECATED> */ .p-SplitPanel-handle, /* </DEPRECATED> */
.lm-SplitPanel-handle {
  z-index: 1;
}


/* <DEPRECATED> */ .p-SplitPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-SplitPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-SplitPanel-handle:after, /* </DEPRECATED> */
.lm-SplitPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabBar, /* </DEPRECATED> */
.lm-TabBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] {
  flex-direction: row;
  align-items: flex-end;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] {
  flex-direction: column;
  align-items: flex-end;
}


/* <DEPRECATED> */ .p-TabBar-content, /* </DEPRECATED> */
.lm-TabBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  list-style-type: none;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='horizontal'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='vertical'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar-tab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
}


/* <DEPRECATED> */
.p-TabBar-tabIcon,
.p-TabBar-tabCloseIcon,
/* </DEPRECATED> */
.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-TabBar-tabLabel, /* </DEPRECATED> */
.lm-TabBar-tabLabel {
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}


.lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing : border-box;
}


/* <DEPRECATED> */ .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */
.lm-TabBar-tab.lm-mod-hidden {
  display: none !important;
}


.lm-TabBar-addButton.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
  position: relative;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='horizontal'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
  left: 0;
  transition: left 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='vertical'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
  top: 0;
  transition: top 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging .p-TabBar-tab.p-mod-dragging,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
  transition: none;
}

.lm-TabBar-tabLabel .lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing : border-box;
  background: inherit;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabPanel-tabBar, /* </DEPRECATED> */
.lm-TabPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-TabPanel-stackedPanel, /* </DEPRECATED> */
.lm-TabPanel-stackedPanel {
  z-index: 0;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

@charset "UTF-8";
html{
  -webkit-box-sizing:border-box;
          box-sizing:border-box; }

*,
*::before,
*::after{
  -webkit-box-sizing:inherit;
          box-sizing:inherit; }

body{
  font-size:14px;
  font-weight:400;
  letter-spacing:0;
  line-height:1.28581;
  text-transform:none;
  color:#182026;
  font-family:-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif; }

p{
  margin-bottom:10px;
  margin-top:0; }

small{
  font-size:12px; }

strong{
  font-weight:600; }

::-moz-selection{
  background:rgba(125, 188, 255, 0.6); }

::selection{
  background:rgba(125, 188, 255, 0.6); }
.bp3-heading{
  color:#182026;
  font-weight:600;
  margin:0 0 10px;
  padding:0; }
  .bp3-dark .bp3-heading{
    color:#f5f8fa; }

h1.bp3-heading, .bp3-running-text h1{
  font-size:36px;
  line-height:40px; }

h2.bp3-heading, .bp3-running-text h2{
  font-size:28px;
  line-height:32px; }

h3.bp3-heading, .bp3-running-text h3{
  font-size:22px;
  line-height:25px; }

h4.bp3-heading, .bp3-running-text h4{
  font-size:18px;
  line-height:21px; }

h5.bp3-heading, .bp3-running-text h5{
  font-size:16px;
  line-height:19px; }

h6.bp3-heading, .bp3-running-text h6{
  font-size:14px;
  line-height:16px; }
.bp3-ui-text{
  font-size:14px;
  font-weight:400;
  letter-spacing:0;
  line-height:1.28581;
  text-transform:none; }

.bp3-monospace-text{
  font-family:monospace;
  text-transform:none; }

.bp3-text-muted{
  color:#5c7080; }
  .bp3-dark .bp3-text-muted{
    color:#a7b6c2; }

.bp3-text-disabled{
  color:rgba(92, 112, 128, 0.6); }
  .bp3-dark .bp3-text-disabled{
    color:rgba(167, 182, 194, 0.6); }

.bp3-text-overflow-ellipsis{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal; }
.bp3-running-text{
  font-size:14px;
  line-height:1.5; }
  .bp3-running-text h1{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h1{
      color:#f5f8fa; }
  .bp3-running-text h2{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h2{
      color:#f5f8fa; }
  .bp3-running-text h3{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h3{
      color:#f5f8fa; }
  .bp3-running-text h4{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h4{
      color:#f5f8fa; }
  .bp3-running-text h5{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h5{
      color:#f5f8fa; }
  .bp3-running-text h6{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h6{
      color:#f5f8fa; }
  .bp3-running-text hr{
    border:none;
    border-bottom:1px solid rgba(16, 22, 26, 0.15);
    margin:20px 0; }
    .bp3-dark .bp3-running-text hr{
      border-color:rgba(255, 255, 255, 0.15); }
  .bp3-running-text p{
    margin:0 0 10px;
    padding:0; }

.bp3-text-large{
  font-size:16px; }

.bp3-text-small{
  font-size:12px; }
a{
  color:#106ba3;
  text-decoration:none; }
  a:hover{
    color:#106ba3;
    cursor:pointer;
    text-decoration:underline; }
  a .bp3-icon, a .bp3-icon-standard, a .bp3-icon-large{
    color:inherit; }
  a code,
  .bp3-dark a code{
    color:inherit; }
  .bp3-dark a,
  .bp3-dark a:hover{
    color:#48aff0; }
    .bp3-dark a .bp3-icon, .bp3-dark a .bp3-icon-standard, .bp3-dark a .bp3-icon-large,
    .bp3-dark a:hover .bp3-icon,
    .bp3-dark a:hover .bp3-icon-standard,
    .bp3-dark a:hover .bp3-icon-large{
      color:inherit; }
.bp3-running-text code, .bp3-code{
  font-family:monospace;
  text-transform:none;
  background:rgba(255, 255, 255, 0.7);
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
  color:#5c7080;
  font-size:smaller;
  padding:2px 5px; }
  .bp3-dark .bp3-running-text code, .bp3-running-text .bp3-dark code, .bp3-dark .bp3-code{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#a7b6c2; }
  .bp3-running-text a > code, a > .bp3-code{
    color:#137cbd; }
    .bp3-dark .bp3-running-text a > code, .bp3-running-text .bp3-dark a > code, .bp3-dark a > .bp3-code{
      color:inherit; }

.bp3-running-text pre, .bp3-code-block{
  font-family:monospace;
  text-transform:none;
  background:rgba(255, 255, 255, 0.7);
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
  color:#182026;
  display:block;
  font-size:13px;
  line-height:1.4;
  margin:10px 0;
  padding:13px 15px 12px;
  word-break:break-all;
  word-wrap:break-word; }
  .bp3-dark .bp3-running-text pre, .bp3-running-text .bp3-dark pre, .bp3-dark .bp3-code-block{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
  .bp3-running-text pre > code, .bp3-code-block > code{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:inherit;
    font-size:inherit;
    padding:0; }

.bp3-running-text kbd, .bp3-key{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  color:#5c7080;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  font-family:inherit;
  font-size:12px;
  height:24px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  line-height:24px;
  min-width:24px;
  padding:3px 6px;
  vertical-align:middle; }
  .bp3-running-text kbd .bp3-icon, .bp3-key .bp3-icon, .bp3-running-text kbd .bp3-icon-standard, .bp3-key .bp3-icon-standard, .bp3-running-text kbd .bp3-icon-large, .bp3-key .bp3-icon-large{
    margin-right:5px; }
  .bp3-dark .bp3-running-text kbd, .bp3-running-text .bp3-dark kbd, .bp3-dark .bp3-key{
    background:#394b59;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#a7b6c2; }
.bp3-running-text blockquote, .bp3-blockquote{
  border-left:solid 4px rgba(167, 182, 194, 0.5);
  margin:0 0 10px;
  padding:0 20px; }
  .bp3-dark .bp3-running-text blockquote, .bp3-running-text .bp3-dark blockquote, .bp3-dark .bp3-blockquote{
    border-color:rgba(115, 134, 148, 0.5); }
.bp3-running-text ul,
.bp3-running-text ol, .bp3-list{
  margin:10px 0;
  padding-left:30px; }
  .bp3-running-text ul li:not(:last-child), .bp3-running-text ol li:not(:last-child), .bp3-list li:not(:last-child){
    margin-bottom:5px; }
  .bp3-running-text ul ol, .bp3-running-text ol ol, .bp3-list ol,
  .bp3-running-text ul ul,
  .bp3-running-text ol ul,
  .bp3-list ul{
    margin-top:5px; }

.bp3-list-unstyled{
  list-style:none;
  margin:0;
  padding:0; }
  .bp3-list-unstyled li{
    padding:0; }
.bp3-rtl{
  text-align:right; }

.bp3-dark{
  color:#f5f8fa; }

:focus{
  outline:rgba(19, 124, 189, 0.6) auto 2px;
  outline-offset:2px;
  -moz-outline-radius:6px; }

.bp3-focus-disabled :focus{
  outline:none !important; }
  .bp3-focus-disabled :focus ~ .bp3-control-indicator{
    outline:none !important; }

.bp3-alert{
  max-width:400px;
  padding:20px; }

.bp3-alert-body{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-alert-body .bp3-icon{
    font-size:40px;
    margin-right:20px;
    margin-top:0; }

.bp3-alert-contents{
  word-break:break-word; }

.bp3-alert-footer{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:reverse;
      -ms-flex-direction:row-reverse;
          flex-direction:row-reverse;
  margin-top:10px; }
  .bp3-alert-footer .bp3-button{
    margin-left:10px; }
.bp3-breadcrumbs{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  cursor:default;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  height:30px;
  list-style:none;
  margin:0;
  padding:0; }
  .bp3-breadcrumbs > li{
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; }
    .bp3-breadcrumbs > li::after{
      background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e");
      content:"";
      display:block;
      height:16px;
      margin:0 5px;
      width:16px; }
    .bp3-breadcrumbs > li:last-of-type::after{
      display:none; }

.bp3-breadcrumb,
.bp3-breadcrumb-current,
.bp3-breadcrumbs-collapsed{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  font-size:16px; }

.bp3-breadcrumb,
.bp3-breadcrumbs-collapsed{
  color:#5c7080; }

.bp3-breadcrumb:hover{
  text-decoration:none; }

.bp3-breadcrumb.bp3-disabled{
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-breadcrumb .bp3-icon{
  margin-right:5px; }

.bp3-breadcrumb-current{
  color:inherit;
  font-weight:600; }
  .bp3-breadcrumb-current .bp3-input{
    font-size:inherit;
    font-weight:inherit;
    vertical-align:baseline; }

.bp3-breadcrumbs-collapsed{
  background:#ced9e0;
  border:none;
  border-radius:3px;
  cursor:pointer;
  margin-right:2px;
  padding:1px 5px;
  vertical-align:text-bottom; }
  .bp3-breadcrumbs-collapsed::before{
    background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e") center no-repeat;
    content:"";
    display:block;
    height:16px;
    width:16px; }
  .bp3-breadcrumbs-collapsed:hover{
    background:#bfccd6;
    color:#182026;
    text-decoration:none; }

.bp3-dark .bp3-breadcrumb,
.bp3-dark .bp3-breadcrumbs-collapsed{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumbs > li::after{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumb.bp3-disabled{
  color:rgba(167, 182, 194, 0.6); }

.bp3-dark .bp3-breadcrumb-current{
  color:#f5f8fa; }

.bp3-dark .bp3-breadcrumbs-collapsed{
  background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-breadcrumbs-collapsed:hover{
    background:rgba(16, 22, 26, 0.6);
    color:#f5f8fa; }
.bp3-button{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  font-size:14px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  padding:5px 10px;
  text-align:left;
  vertical-align:middle;
  min-height:30px;
  min-width:30px; }
  .bp3-button > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-button > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-button::before,
  .bp3-button > *{
    margin-right:7px; }
  .bp3-button:empty::before,
  .bp3-button > :last-child{
    margin-right:0; }
  .bp3-button:empty{
    padding:0 !important; }
  .bp3-button:disabled, .bp3-button.bp3-disabled{
    cursor:not-allowed; }
  .bp3-button.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button.bp3-align-right,
  .bp3-align-right .bp3-button{
    text-align:right; }
  .bp3-button.bp3-align-left,
  .bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-button:not([class*="bp3-intent-"]){
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    color:#182026; }
    .bp3-button:not([class*="bp3-intent-"]):hover{
      background-clip:padding-box;
      background-color:#ebf1f5;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
    .bp3-button:not([class*="bp3-intent-"]):active, .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      background-color:#d8e1e8;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed;
      outline:none; }
      .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-button.bp3-intent-primary{
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover, .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover{
      background-color:#106ba3;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      background-color:#0e5a8a;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-primary:disabled, .bp3-button.bp3-intent-primary.bp3-disabled{
      background-color:rgba(19, 124, 189, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-success{
    background-color:#0f9960;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-success:hover, .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-success:hover{
      background-color:#0d8050;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      background-color:#0a6640;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-success:disabled, .bp3-button.bp3-intent-success.bp3-disabled{
      background-color:rgba(15, 153, 96, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-warning{
    background-color:#d9822b;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover, .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover{
      background-color:#bf7326;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      background-color:#a66321;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-warning:disabled, .bp3-button.bp3-intent-warning.bp3-disabled{
      background-color:rgba(217, 130, 43, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-danger{
    background-color:#db3737;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover, .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover{
      background-color:#c23030;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      background-color:#a82a2a;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-danger:disabled, .bp3-button.bp3-intent-danger.bp3-disabled{
      background-color:rgba(219, 55, 55, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
    stroke:#ffffff; }
  .bp3-button.bp3-large,
  .bp3-large .bp3-button{
    min-height:40px;
    min-width:40px;
    font-size:16px;
    padding:5px 15px; }
    .bp3-button.bp3-large::before,
    .bp3-button.bp3-large > *,
    .bp3-large .bp3-button::before,
    .bp3-large .bp3-button > *{
      margin-right:10px; }
    .bp3-button.bp3-large:empty::before,
    .bp3-button.bp3-large > :last-child,
    .bp3-large .bp3-button:empty::before,
    .bp3-large .bp3-button > :last-child{
      margin-right:0; }
  .bp3-button.bp3-small,
  .bp3-small .bp3-button{
    min-height:24px;
    min-width:24px;
    padding:0 7px; }
  .bp3-button.bp3-loading{
    position:relative; }
    .bp3-button.bp3-loading[class*="bp3-icon-"]::before{
      visibility:hidden; }
    .bp3-button.bp3-loading .bp3-button-spinner{
      margin:0;
      position:absolute; }
    .bp3-button.bp3-loading > :not(.bp3-button-spinner){
      visibility:hidden; }
  .bp3-button[class*="bp3-icon-"]::before{
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-style:normal;
    font-weight:400;
    line-height:1;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    color:#5c7080; }
  .bp3-button .bp3-icon, .bp3-button .bp3-icon-standard, .bp3-button .bp3-icon-large{
    color:#5c7080; }
    .bp3-button .bp3-icon.bp3-align-right, .bp3-button .bp3-icon-standard.bp3-align-right, .bp3-button .bp3-icon-large.bp3-align-right{
      margin-left:7px; }
  .bp3-button .bp3-icon:first-child:last-child,
  .bp3-button .bp3-spinner + .bp3-icon:last-child{
    margin:0 -7px; }
  .bp3-dark .bp3-button:not([class*="bp3-intent-"]){
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover, .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover{
      background-color:#30404d;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      background-color:#202b33;
      background-image:none;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large{
      color:#a7b6c2; }
  .bp3-dark .bp3-button[class*="bp3-intent-"]{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:active, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:disabled, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-disabled{
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.3); }
    .bp3-dark .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
      stroke:#8a9ba8; }
  .bp3-button:disabled::before,
  .bp3-button:disabled .bp3-icon, .bp3-button:disabled .bp3-icon-standard, .bp3-button:disabled .bp3-icon-large, .bp3-button.bp3-disabled::before,
  .bp3-button.bp3-disabled .bp3-icon, .bp3-button.bp3-disabled .bp3-icon-standard, .bp3-button.bp3-disabled .bp3-icon-large, .bp3-button[class*="bp3-intent-"]::before,
  .bp3-button[class*="bp3-intent-"] .bp3-icon, .bp3-button[class*="bp3-intent-"] .bp3-icon-standard, .bp3-button[class*="bp3-intent-"] .bp3-icon-large{
    color:inherit !important; }
  .bp3-button.bp3-minimal{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-button.bp3-minimal:hover{
      background:rgba(167, 182, 194, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026;
      text-decoration:none; }
    .bp3-button.bp3-minimal:active, .bp3-button.bp3-minimal.bp3-active{
      background:rgba(115, 134, 148, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026; }
    .bp3-button.bp3-minimal:disabled, .bp3-button.bp3-minimal:disabled:hover, .bp3-button.bp3-minimal.bp3-disabled, .bp3-button.bp3-minimal.bp3-disabled:hover{
      background:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
      .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button.bp3-minimal{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:inherit; }
      .bp3-dark .bp3-button.bp3-minimal:hover, .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-button.bp3-minimal:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button.bp3-minimal:disabled, .bp3-dark .bp3-button.bp3-minimal:disabled:hover, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover{
        background:none;
        color:rgba(167, 182, 194, 0.6);
        cursor:not-allowed; }
        .bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover, .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-success{
      color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover, .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover, .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-danger{
      color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover, .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
  .bp3-button.bp3-outlined{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    border:1px solid rgba(24, 32, 38, 0.2);
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .bp3-button.bp3-outlined:hover{
      background:rgba(167, 182, 194, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026;
      text-decoration:none; }
    .bp3-button.bp3-outlined:active, .bp3-button.bp3-outlined.bp3-active{
      background:rgba(115, 134, 148, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026; }
    .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined.bp3-disabled:hover{
      background:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
      .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button.bp3-outlined{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:inherit; }
      .bp3-dark .bp3-button.bp3-outlined:hover, .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-button.bp3-outlined:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{
        background:none;
        color:rgba(167, 182, 194, 0.6);
        cursor:not-allowed; }
        .bp3-dark .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:hover, .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-success{
      color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:hover, .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:hover, .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-danger{
      color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:hover, .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
    .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled:hover{
      border-color:rgba(92, 112, 128, 0.1); }
    .bp3-dark .bp3-button.bp3-outlined{
      border-color:rgba(255, 255, 255, 0.4); }
      .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{
        border-color:rgba(255, 255, 255, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-primary{
      border-color:rgba(16, 107, 163, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
        border-color:rgba(16, 107, 163, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{
        border-color:rgba(72, 175, 240, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
          border-color:rgba(72, 175, 240, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-success{
      border-color:rgba(13, 128, 80, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
        border-color:rgba(13, 128, 80, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{
        border-color:rgba(61, 204, 145, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
          border-color:rgba(61, 204, 145, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-warning{
      border-color:rgba(191, 115, 38, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
        border-color:rgba(191, 115, 38, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{
        border-color:rgba(255, 179, 102, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
          border-color:rgba(255, 179, 102, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-danger{
      border-color:rgba(194, 48, 48, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
        border-color:rgba(194, 48, 48, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{
        border-color:rgba(255, 115, 115, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
          border-color:rgba(255, 115, 115, 0.2); }

a.bp3-button{
  text-align:center;
  text-decoration:none;
  -webkit-transition:none;
  transition:none; }
  a.bp3-button, a.bp3-button:hover, a.bp3-button:active{
    color:#182026; }
  a.bp3-button.bp3-disabled{
    color:rgba(92, 112, 128, 0.6); }

.bp3-button-text{
  -webkit-box-flex:0;
      -ms-flex:0 1 auto;
          flex:0 1 auto; }

.bp3-button.bp3-align-left .bp3-button-text, .bp3-button.bp3-align-right .bp3-button-text,
.bp3-button-group.bp3-align-left .bp3-button-text,
.bp3-button-group.bp3-align-right .bp3-button-text{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto; }
.bp3-button-group{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex; }
  .bp3-button-group .bp3-button{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    position:relative;
    z-index:4; }
    .bp3-button-group .bp3-button:focus{
      z-index:5; }
    .bp3-button-group .bp3-button:hover{
      z-index:6; }
    .bp3-button-group .bp3-button:active, .bp3-button-group .bp3-button.bp3-active{
      z-index:7; }
    .bp3-button-group .bp3-button:disabled, .bp3-button-group .bp3-button.bp3-disabled{
      z-index:3; }
    .bp3-button-group .bp3-button[class*="bp3-intent-"]{
      z-index:9; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:focus{
        z-index:10; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:hover{
        z-index:11; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:active, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-active{
        z-index:12; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:disabled, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-disabled{
        z-index:8; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child){
    border-bottom-left-radius:0;
    border-top-left-radius:0; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    border-bottom-right-radius:0;
    border-top-right-radius:0;
    margin-right:-1px; }
  .bp3-button-group.bp3-minimal .bp3-button{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-button-group.bp3-minimal .bp3-button:hover{
      background:rgba(167, 182, 194, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026;
      text-decoration:none; }
    .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
      background:rgba(115, 134, 148, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026; }
    .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
      background:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
      .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button-group.bp3-minimal .bp3-button{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:inherit; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
        background:none;
        color:rgba(167, 182, 194, 0.6);
        cursor:not-allowed; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
      color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
      color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
  .bp3-button-group .bp3-popover-wrapper,
  .bp3-button-group .bp3-popover-target{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button-group .bp3-button.bp3-fill,
  .bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-vertical{
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    vertical-align:top; }
    .bp3-button-group.bp3-vertical.bp3-fill{
      height:100%;
      width:unset; }
    .bp3-button-group.bp3-vertical .bp3-button{
      margin-right:0 !important;
      width:100%; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child{
      border-radius:3px 3px 0 0; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child{
      border-radius:0 0 3px 3px; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child){
      margin-bottom:-1px; }
  .bp3-button-group.bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    margin-right:1px; }
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child){
    margin-bottom:1px; }
.bp3-callout{
  font-size:14px;
  line-height:1.5;
  background-color:rgba(138, 155, 168, 0.15);
  border-radius:3px;
  padding:10px 12px 9px;
  position:relative;
  width:100%; }
  .bp3-callout[class*="bp3-icon-"]{
    padding-left:40px; }
    .bp3-callout[class*="bp3-icon-"]::before{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      color:#5c7080;
      left:10px;
      position:absolute;
      top:10px; }
  .bp3-callout.bp3-callout-icon{
    padding-left:40px; }
    .bp3-callout.bp3-callout-icon > .bp3-icon:first-child{
      color:#5c7080;
      left:10px;
      position:absolute;
      top:10px; }
  .bp3-callout .bp3-heading{
    line-height:20px;
    margin-bottom:5px;
    margin-top:0; }
    .bp3-callout .bp3-heading:last-child{
      margin-bottom:0; }
  .bp3-dark .bp3-callout{
    background-color:rgba(138, 155, 168, 0.2); }
    .bp3-dark .bp3-callout[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
  .bp3-callout.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15); }
    .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-primary .bp3-heading{
      color:#106ba3; }
    .bp3-dark .bp3-callout.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading{
        color:#48aff0; }
  .bp3-callout.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15); }
    .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-success .bp3-heading{
      color:#0d8050; }
    .bp3-dark .bp3-callout.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-success .bp3-heading{
        color:#3dcc91; }
  .bp3-callout.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15); }
    .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-warning .bp3-heading{
      color:#bf7326; }
    .bp3-dark .bp3-callout.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading{
        color:#ffb366; }
  .bp3-callout.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15); }
    .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-danger .bp3-heading{
      color:#c23030; }
    .bp3-dark .bp3-callout.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading{
        color:#ff7373; }
  .bp3-running-text .bp3-callout{
    margin:20px 0; }
.bp3-card{
  background-color:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
  padding:20px;
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-card.bp3-dark,
  .bp3-dark .bp3-card{
    background-color:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }

.bp3-elevation-0{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
  .bp3-elevation-0.bp3-dark,
  .bp3-dark .bp3-elevation-0{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }

.bp3-elevation-1{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-1.bp3-dark,
  .bp3-dark .bp3-elevation-1{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-elevation-2{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-2.bp3-dark,
  .bp3-dark .bp3-elevation-2{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4); }

.bp3-elevation-3{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-3.bp3-dark,
  .bp3-dark .bp3-elevation-3{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-elevation-4{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-4.bp3-dark,
  .bp3-dark .bp3-elevation-4{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:hover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  cursor:pointer; }
  .bp3-card.bp3-interactive:hover.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:hover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:active{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  opacity:0.9;
  -webkit-transition-duration:0;
          transition-duration:0; }
  .bp3-card.bp3-interactive:active.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:active{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-collapse{
  height:0;
  overflow-y:hidden;
  -webkit-transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-collapse .bp3-collapse-body{
    -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-collapse .bp3-collapse-body[aria-hidden="true"]{
      display:none; }

.bp3-context-menu .bp3-popover-target{
  display:block; }

.bp3-context-menu-popover-target{
  position:fixed; }

.bp3-divider{
  border-bottom:1px solid rgba(16, 22, 26, 0.15);
  border-right:1px solid rgba(16, 22, 26, 0.15);
  margin:5px; }
  .bp3-dark .bp3-divider{
    border-color:rgba(16, 22, 26, 0.4); }
.bp3-dialog-container{
  opacity:1;
  -webkit-transform:scale(1);
          transform:scale(1);
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  min-height:100%;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none;
  width:100%; }
  .bp3-dialog-container.bp3-overlay-enter > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5); }
  .bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-dialog-container.bp3-overlay-exit > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }

.bp3-dialog{
  background:#ebf1f5;
  border-radius:6px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:30px 0;
  padding-bottom:20px;
  pointer-events:all;
  -webkit-user-select:text;
     -moz-user-select:text;
      -ms-user-select:text;
          user-select:text;
  width:500px; }
  .bp3-dialog:focus{
    outline:0; }
  .bp3-dialog.bp3-dark,
  .bp3-dark .bp3-dialog{
    background:#293742;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }

.bp3-dialog-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background:#ffffff;
  border-radius:6px 6px 0 0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  min-height:40px;
  padding-left:20px;
  padding-right:5px;
  z-index:30; }
  .bp3-dialog-header .bp3-icon-large,
  .bp3-dialog-header .bp3-icon{
    color:#5c7080;
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px; }
  .bp3-dialog-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    line-height:inherit;
    margin:0; }
    .bp3-dialog-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-dialog-header{
    background:#30404d;
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-dialog-header .bp3-icon-large,
    .bp3-dark .bp3-dialog-header .bp3-icon{
      color:#a7b6c2; }

.bp3-dialog-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  line-height:18px;
  margin:20px; }

.bp3-dialog-footer{
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  margin:0 20px; }

.bp3-dialog-footer-actions{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
  .bp3-dialog-footer-actions .bp3-button{
    margin-left:10px; }
.bp3-multistep-dialog-panels{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }

.bp3-multistep-dialog-left-panel{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column; }
  .bp3-dark .bp3-multistep-dialog-left-panel{
    background:#202b33; }

.bp3-multistep-dialog-right-panel{
  background-color:#f5f8fa;
  border-left:1px solid rgba(16, 22, 26, 0.15);
  border-radius:0 0 6px 0;
  -webkit-box-flex:3;
      -ms-flex:3;
          flex:3;
  min-width:0; }
  .bp3-dark .bp3-multistep-dialog-right-panel{
    background-color:#293742;
    border-left:1px solid rgba(16, 22, 26, 0.4); }

.bp3-multistep-dialog-footer{
  background-color:#ffffff;
  border-radius:0 0 6px 0;
  border-top:1px solid rgba(16, 22, 26, 0.15);
  padding:10px; }
  .bp3-dark .bp3-multistep-dialog-footer{
    background:#30404d;
    border-top:1px solid rgba(16, 22, 26, 0.4); }

.bp3-dialog-step-container{
  background-color:#f5f8fa;
  border-bottom:1px solid rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-dialog-step-container{
    background:#293742;
    border-bottom:1px solid rgba(16, 22, 26, 0.4); }
  .bp3-dialog-step-container.bp3-dialog-step-viewed{
    background-color:#ffffff; }
    .bp3-dark .bp3-dialog-step-container.bp3-dialog-step-viewed{
      background:#30404d; }

.bp3-dialog-step{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background-color:#f5f8fa;
  border-radius:6px;
  cursor:not-allowed;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:4px;
  padding:6px 14px; }
  .bp3-dark .bp3-dialog-step{
    background:#293742; }
  .bp3-dialog-step-viewed .bp3-dialog-step{
    background-color:#ffffff;
    cursor:pointer; }
    .bp3-dark .bp3-dialog-step-viewed .bp3-dialog-step{
      background:#30404d; }
  .bp3-dialog-step:hover{
    background-color:#f5f8fa; }
    .bp3-dark .bp3-dialog-step:hover{
      background:#293742; }

.bp3-dialog-step-icon{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background-color:rgba(92, 112, 128, 0.6);
  border-radius:50%;
  color:#ffffff;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:25px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  width:25px; }
  .bp3-dark .bp3-dialog-step-icon{
    background-color:rgba(167, 182, 194, 0.6); }
  .bp3-active.bp3-dialog-step-viewed .bp3-dialog-step-icon{
    background-color:#2b95d6; }
  .bp3-dialog-step-viewed .bp3-dialog-step-icon{
    background-color:#8a9ba8; }

.bp3-dialog-step-title{
  color:rgba(92, 112, 128, 0.6);
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  padding-left:10px; }
  .bp3-dark .bp3-dialog-step-title{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-active.bp3-dialog-step-viewed .bp3-dialog-step-title{
    color:#2b95d6; }
  .bp3-dialog-step-viewed:not(.bp3-active) .bp3-dialog-step-title{
    color:#182026; }
    .bp3-dark .bp3-dialog-step-viewed:not(.bp3-active) .bp3-dialog-step-title{
      color:#f5f8fa; }
.bp3-drawer{
  background:#ffffff;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0;
  padding:0; }
  .bp3-drawer:focus{
    outline:0; }
  .bp3-drawer.bp3-position-top{
    height:50%;
    left:0;
    right:0;
    top:0; }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter, .bp3-drawer.bp3-position-top.bp3-overlay-appear{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%); }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter-active, .bp3-drawer.bp3-position-top.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit-active{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-position-bottom{
    bottom:0;
    height:50%;
    left:0;
    right:0; }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-position-left{
    bottom:0;
    left:0;
    top:0;
    width:50%; }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter, .bp3-drawer.bp3-position-left.bp3-overlay-appear{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%); }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter-active, .bp3-drawer.bp3-position-left.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit-active{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-position-right{
    bottom:0;
    right:0;
    top:0;
    width:50%; }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter, .bp3-drawer.bp3-position-right.bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter-active, .bp3-drawer.bp3-position-right.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right):not(.bp3-vertical){
    bottom:0;
    right:0;
    top:0;
    width:50%; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right).bp3-vertical{
    bottom:0;
    height:50%;
    left:0;
    right:0; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-dark,
  .bp3-dark .bp3-drawer{
    background:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }

.bp3-drawer-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border-radius:0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  min-height:40px;
  padding:5px;
  padding-left:20px;
  position:relative; }
  .bp3-drawer-header .bp3-icon-large,
  .bp3-drawer-header .bp3-icon{
    color:#5c7080;
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px; }
  .bp3-drawer-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    line-height:inherit;
    margin:0; }
    .bp3-drawer-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-drawer-header{
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-drawer-header .bp3-icon-large,
    .bp3-dark .bp3-drawer-header .bp3-icon{
      color:#a7b6c2; }

.bp3-drawer-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  line-height:18px;
  overflow:auto; }

.bp3-drawer-footer{
  -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  padding:10px 20px;
  position:relative; }
  .bp3-dark .bp3-drawer-footer{
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4); }
.bp3-editable-text{
  cursor:text;
  display:inline-block;
  max-width:100%;
  position:relative;
  vertical-align:top;
  white-space:nowrap; }
  .bp3-editable-text::before{
    bottom:-3px;
    left:-3px;
    position:absolute;
    right:-3px;
    top:-3px;
    border-radius:3px;
    content:"";
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-editable-text.bp3-editable-text-editing::before{
    background-color:#ffffff;
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#137cbd; }
  .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4); }
  .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#0f9960; }
  .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4); }
  .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#d9822b; }
  .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4); }
  .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#db3737; }
  .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4); }
  .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15); }
  .bp3-dark .bp3-editable-text.bp3-editable-text-editing::before{
    background-color:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#48aff0; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4);
            box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#3dcc91; }
  .bp3-dark .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4);
            box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#ffb366; }
  .bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4);
            box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#ff7373; }
  .bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4);
            box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-editable-text-input,
.bp3-editable-text-content{
  color:inherit;
  display:inherit;
  font:inherit;
  letter-spacing:inherit;
  max-width:inherit;
  min-width:inherit;
  position:relative;
  resize:none;
  text-transform:inherit;
  vertical-align:top; }

.bp3-editable-text-input{
  background:none;
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0;
  white-space:pre-wrap;
  width:100%; }
  .bp3-editable-text-input::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input:focus{
    outline:none; }
  .bp3-editable-text-input::-ms-clear{
    display:none; }

.bp3-editable-text-content{
  overflow:hidden;
  padding-right:2px;
  text-overflow:ellipsis;
  white-space:pre; }
  .bp3-editable-text-editing > .bp3-editable-text-content{
    left:0;
    position:absolute;
    visibility:hidden; }
  .bp3-editable-text-placeholder > .bp3-editable-text-content{
    color:rgba(92, 112, 128, 0.6); }
    .bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content{
      color:rgba(167, 182, 194, 0.6); }

.bp3-editable-text.bp3-multiline{
  display:block; }
  .bp3-editable-text.bp3-multiline .bp3-editable-text-content{
    overflow:auto;
    white-space:pre-wrap;
    word-wrap:break-word; }
.bp3-divider{
  border-bottom:1px solid rgba(16, 22, 26, 0.15);
  border-right:1px solid rgba(16, 22, 26, 0.15);
  margin:5px; }
  .bp3-dark .bp3-divider{
    border-color:rgba(16, 22, 26, 0.4); }
.bp3-control-group{
  -webkit-transform:translateZ(0);
          transform:translateZ(0);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:stretch;
      -ms-flex-align:stretch;
          align-items:stretch; }
  .bp3-control-group > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select,
  .bp3-control-group .bp3-input,
  .bp3-control-group .bp3-select{
    position:relative; }
  .bp3-control-group .bp3-input{
    border-radius:inherit;
    z-index:2; }
    .bp3-control-group .bp3-input:focus{
      border-radius:3px;
      z-index:14; }
    .bp3-control-group .bp3-input[class*="bp3-intent"]{
      z-index:13; }
      .bp3-control-group .bp3-input[class*="bp3-intent"]:focus{
        z-index:15; }
    .bp3-control-group .bp3-input[readonly], .bp3-control-group .bp3-input:disabled, .bp3-control-group .bp3-input.bp3-disabled{
      z-index:1; }
  .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input{
    z-index:13; }
    .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input:focus{
      z-index:15; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select select,
  .bp3-control-group .bp3-select select{
    -webkit-transform:translateZ(0);
            transform:translateZ(0);
    border-radius:inherit;
    z-index:4; }
    .bp3-control-group .bp3-button:focus,
    .bp3-control-group .bp3-html-select select:focus,
    .bp3-control-group .bp3-select select:focus{
      z-index:5; }
    .bp3-control-group .bp3-button:hover,
    .bp3-control-group .bp3-html-select select:hover,
    .bp3-control-group .bp3-select select:hover{
      z-index:6; }
    .bp3-control-group .bp3-button:active,
    .bp3-control-group .bp3-html-select select:active,
    .bp3-control-group .bp3-select select:active{
      z-index:7; }
    .bp3-control-group .bp3-button[readonly], .bp3-control-group .bp3-button:disabled, .bp3-control-group .bp3-button.bp3-disabled,
    .bp3-control-group .bp3-html-select select[readonly],
    .bp3-control-group .bp3-html-select select:disabled,
    .bp3-control-group .bp3-html-select select.bp3-disabled,
    .bp3-control-group .bp3-select select[readonly],
    .bp3-control-group .bp3-select select:disabled,
    .bp3-control-group .bp3-select select.bp3-disabled{
      z-index:3; }
    .bp3-control-group .bp3-button[class*="bp3-intent"],
    .bp3-control-group .bp3-html-select select[class*="bp3-intent"],
    .bp3-control-group .bp3-select select[class*="bp3-intent"]{
      z-index:9; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:focus{
        z-index:10; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:hover{
        z-index:11; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:active{
        z-index:12; }
      .bp3-control-group .bp3-button[class*="bp3-intent"][readonly], .bp3-control-group .bp3-button[class*="bp3-intent"]:disabled, .bp3-control-group .bp3-button[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"].bp3-disabled{
        z-index:8; }
  .bp3-control-group .bp3-input-group > .bp3-icon,
  .bp3-control-group .bp3-input-group > .bp3-button,
  .bp3-control-group .bp3-input-group > .bp3-input-left-container,
  .bp3-control-group .bp3-input-group > .bp3-input-action{
    z-index:16; }
  .bp3-control-group .bp3-select::after,
  .bp3-control-group .bp3-html-select::after,
  .bp3-control-group .bp3-select > .bp3-icon,
  .bp3-control-group .bp3-html-select > .bp3-icon{
    z-index:17; }
  .bp3-control-group .bp3-select:focus-within{
    z-index:5; }
  .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){
    margin-right:-1px; }
  .bp3-control-group:not(.bp3-vertical) > .bp3-divider:not(:first-child){
    margin-left:6px; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){
    margin-right:0; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button{
    margin-left:1px; }
  .bp3-control-group .bp3-popover-wrapper,
  .bp3-control-group .bp3-popover-target{
    border-radius:inherit; }
  .bp3-control-group > :first-child{
    border-radius:3px 0 0 3px; }
  .bp3-control-group > :last-child{
    border-radius:0 3px 3px 0;
    margin-right:0; }
  .bp3-control-group > :only-child{
    border-radius:3px;
    margin-right:0; }
  .bp3-control-group .bp3-input-group .bp3-button{
    border-radius:3px; }
  .bp3-control-group .bp3-numeric-input:not(:first-child) .bp3-input-group{
    border-bottom-left-radius:0;
    border-top-left-radius:0; }
  .bp3-control-group.bp3-fill{
    width:100%; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-fill > *:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-vertical{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
    .bp3-control-group.bp3-vertical > *{
      margin-top:-1px; }
    .bp3-control-group.bp3-vertical > :first-child{
      border-radius:3px 3px 0 0;
      margin-top:0; }
    .bp3-control-group.bp3-vertical > :last-child{
      border-radius:0 0 3px 3px; }
.bp3-control{
  cursor:pointer;
  display:block;
  margin-bottom:10px;
  position:relative;
  text-transform:none; }
  .bp3-control input:checked ~ .bp3-control-indicator{
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
  .bp3-control:hover input:checked ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
  .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    background:#0e5a8a;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-control input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    background-color:#0e5a8a;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-control:not(.bp3-align-right){
    padding-left:26px; }
    .bp3-control:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-26px; }
  .bp3-control.bp3-align-right{
    padding-right:26px; }
    .bp3-control.bp3-align-right .bp3-control-indicator{
      margin-right:-26px; }
  .bp3-control.bp3-disabled{
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
  .bp3-control.bp3-inline{
    display:inline-block;
    margin-right:20px; }
  .bp3-control input{
    left:0;
    opacity:0;
    position:absolute;
    top:0;
    z-index:-1; }
  .bp3-control .bp3-control-indicator{
    background-clip:padding-box;
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    border:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    cursor:pointer;
    display:inline-block;
    font-size:16px;
    height:1em;
    margin-right:10px;
    margin-top:-3px;
    position:relative;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none;
    vertical-align:middle;
    width:1em; }
    .bp3-control .bp3-control-indicator::before{
      content:"";
      display:block;
      height:1em;
      width:1em; }
  .bp3-control:hover .bp3-control-indicator{
    background-color:#ebf1f5; }
  .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
    background:#d8e1e8;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-control input:disabled ~ .bp3-control-indicator{
    background:rgba(206, 217, 224, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none;
    cursor:not-allowed; }
  .bp3-control input:focus ~ .bp3-control-indicator{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:2px;
    -moz-outline-radius:6px; }
  .bp3-control.bp3-align-right .bp3-control-indicator{
    float:right;
    margin-left:10px;
    margin-top:1px; }
  .bp3-control.bp3-large{
    font-size:16px; }
    .bp3-control.bp3-large:not(.bp3-align-right){
      padding-left:30px; }
      .bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
        margin-left:-30px; }
    .bp3-control.bp3-large.bp3-align-right{
      padding-right:30px; }
      .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
        margin-right:-30px; }
    .bp3-control.bp3-large .bp3-control-indicator{
      font-size:20px; }
    .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-top:0; }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
  .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
  .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    background:#0e5a8a;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    background-color:#0e5a8a;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-control.bp3-checkbox .bp3-control-indicator{
    border-radius:3px; }
  .bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-radio .bp3-control-indicator{
    border-radius:50%; }
  .bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before{
    background-image:radial-gradient(#ffffff, #ffffff 28%, transparent 32%); }
  .bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before{
    opacity:0.5; }
  .bp3-control.bp3-radio input:focus ~ .bp3-control-indicator{
    -moz-outline-radius:16px; }
  .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(167, 182, 194, 0.5); }
  .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(115, 134, 148, 0.5); }
  .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(92, 112, 128, 0.5); }
  .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(206, 217, 224, 0.5); }
    .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5); }
    .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch:not(.bp3-align-right){
    padding-left:38px; }
    .bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-38px; }
  .bp3-control.bp3-switch.bp3-align-right{
    padding-right:38px; }
    .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator{
      margin-right:-38px; }
  .bp3-control.bp3-switch .bp3-control-indicator{
    border:none;
    border-radius:1.75em;
    -webkit-box-shadow:none !important;
            box-shadow:none !important;
    min-width:1.75em;
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    width:auto; }
    .bp3-control.bp3-switch .bp3-control-indicator::before{
      background:#ffffff;
      border-radius:50%;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
      height:calc(1em - 4px);
      left:0;
      margin:2px;
      position:absolute;
      -webkit-transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      width:calc(1em - 4px); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    left:calc(100% - 1em); }
  .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right){
    padding-left:45px; }
    .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-45px; }
  .bp3-control.bp3-switch.bp3-large.bp3-align-right{
    padding-right:45px; }
    .bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-right:-45px; }
  .bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.7); }
  .bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.9); }
  .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(57, 75, 89, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before{
    background:#394b59;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-control.bp3-switch .bp3-switch-inner-text{
    font-size:0.7em;
    text-align:center; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:first-child{
    line-height:0;
    margin-left:0.5em;
    margin-right:1.2em;
    visibility:hidden; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:last-child{
    line-height:1em;
    margin-left:1.2em;
    margin-right:0.5em;
    visibility:visible; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:first-child{
    line-height:1em;
    visibility:visible; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:last-child{
    line-height:0;
    visibility:hidden; }
  .bp3-dark .bp3-control{
    color:#f5f8fa; }
    .bp3-dark .bp3-control.bp3-disabled{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-control .bp3-control-indicator{
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-control:hover .bp3-control-indicator{
      background-color:#30404d; }
    .bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
      background:#202b33;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      cursor:not-allowed; }
    .bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator, .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
      color:rgba(167, 182, 194, 0.6); }
.bp3-file-input{
  cursor:pointer;
  display:inline-block;
  height:30px;
  position:relative; }
  .bp3-file-input input{
    margin:0;
    min-width:200px;
    opacity:0; }
    .bp3-file-input input:disabled + .bp3-file-upload-input,
    .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
      background:rgba(206, 217, 224, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed;
      resize:none; }
      .bp3-file-input input:disabled + .bp3-file-upload-input::after,
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
        background-color:rgba(206, 217, 224, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed;
        outline:none; }
        .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover{
          background:rgba(206, 217, 224, 0.7); }
      .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input, .bp3-dark
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
        background:rgba(57, 75, 89, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after, .bp3-dark
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
          background-color:rgba(57, 75, 89, 0.5);
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
          .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-dark
          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active{
            background:rgba(57, 75, 89, 0.7); }
  .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#182026; }
  .bp3-dark .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#f5f8fa; }
  .bp3-file-input.bp3-fill{
    width:100%; }
  .bp3-file-input.bp3-large,
  .bp3-large .bp3-file-input{
    height:40px; }
  .bp3-file-input .bp3-file-upload-input-custom-text::after{
    content:attr(bp3-button-text); }

.bp3-file-upload-input{
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  background:#ffffff;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  color:#182026;
  font-size:14px;
  font-weight:400;
  height:30px;
  line-height:30px;
  outline:none;
  padding:0 10px;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  vertical-align:middle;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  color:rgba(92, 112, 128, 0.6);
  left:0;
  padding-right:80px;
  position:absolute;
  right:0;
  top:0;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-file-upload-input::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input:focus, .bp3-file-upload-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-file-upload-input[type="search"], .bp3-file-upload-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-file-upload-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-file-upload-input:disabled, .bp3-file-upload-input.bp3-disabled{
    background:rgba(206, 217, 224, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    resize:none; }
  .bp3-file-upload-input::after{
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    color:#182026;
    min-height:24px;
    min-width:24px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    border-radius:3px;
    content:"Browse";
    line-height:24px;
    margin:3px;
    position:absolute;
    right:0;
    text-align:center;
    top:0;
    width:70px; }
    .bp3-file-upload-input::after:hover{
      background-clip:padding-box;
      background-color:#ebf1f5;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
    .bp3-file-upload-input::after:active, .bp3-file-upload-input::after.bp3-active{
      background-color:#d8e1e8;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-file-upload-input::after:disabled, .bp3-file-upload-input::after.bp3-disabled{
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed;
      outline:none; }
      .bp3-file-upload-input::after:disabled.bp3-active, .bp3-file-upload-input::after:disabled.bp3-active:hover, .bp3-file-upload-input::after.bp3-disabled.bp3-active, .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-file-upload-input:hover::after{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
  .bp3-file-upload-input:active::after{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-large .bp3-file-upload-input{
    font-size:16px;
    height:40px;
    line-height:40px;
    padding-right:95px; }
    .bp3-large .bp3-file-upload-input[type="search"], .bp3-large .bp3-file-upload-input.bp3-round{
      padding:0 15px; }
    .bp3-large .bp3-file-upload-input::after{
      min-height:30px;
      min-width:30px;
      line-height:30px;
      margin:5px;
      width:85px; }
  .bp3-dark .bp3-file-upload-input{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input:disabled, .bp3-dark .bp3-file-upload-input.bp3-disabled{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::after{
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover, .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover{
        background-color:#30404d;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        background-color:#202b33;
        background-image:none;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-file-upload-input::after:disabled, .bp3-dark .bp3-file-upload-input::after.bp3-disabled{
        background-color:rgba(57, 75, 89, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::after:disabled.bp3-active, .bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active{
          background:rgba(57, 75, 89, 0.7); }
      .bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head{
        background:rgba(16, 22, 26, 0.5);
        stroke:#8a9ba8; }
    .bp3-dark .bp3-file-upload-input:hover::after{
      background-color:#30404d;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input:active::after{
      background-color:#202b33;
      background-image:none;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
.bp3-file-upload-input::after{
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
.bp3-form-group{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0 0 15px; }
  .bp3-form-group label.bp3-label{
    margin-bottom:5px; }
  .bp3-form-group .bp3-control{
    margin-top:7px; }
  .bp3-form-group .bp3-form-helper-text{
    color:#5c7080;
    font-size:12px;
    margin-top:5px; }
  .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#106ba3; }
  .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#0d8050; }
  .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#bf7326; }
  .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#c23030; }
  .bp3-form-group.bp3-inline{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row; }
    .bp3-form-group.bp3-inline.bp3-large label.bp3-label{
      line-height:40px;
      margin:0 10px 0 0; }
    .bp3-form-group.bp3-inline label.bp3-label{
      line-height:30px;
      margin:0 10px 0 0; }
  .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#48aff0; }
  .bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#3dcc91; }
  .bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#ffb366; }
  .bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#ff7373; }
  .bp3-dark .bp3-form-group .bp3-form-helper-text{
    color:#a7b6c2; }
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(167, 182, 194, 0.6) !important; }
.bp3-input-group{
  display:block;
  position:relative; }
  .bp3-input-group .bp3-input{
    position:relative;
    width:100%; }
    .bp3-input-group .bp3-input:not(:first-child){
      padding-left:30px; }
    .bp3-input-group .bp3-input:not(:last-child){
      padding-right:30px; }
  .bp3-input-group .bp3-input-action,
  .bp3-input-group > .bp3-input-left-container,
  .bp3-input-group > .bp3-button,
  .bp3-input-group > .bp3-icon{
    position:absolute;
    top:0; }
    .bp3-input-group .bp3-input-action:first-child,
    .bp3-input-group > .bp3-input-left-container:first-child,
    .bp3-input-group > .bp3-button:first-child,
    .bp3-input-group > .bp3-icon:first-child{
      left:0; }
    .bp3-input-group .bp3-input-action:last-child,
    .bp3-input-group > .bp3-input-left-container:last-child,
    .bp3-input-group > .bp3-button:last-child,
    .bp3-input-group > .bp3-icon:last-child{
      right:0; }
  .bp3-input-group .bp3-button{
    min-height:24px;
    min-width:24px;
    margin:3px;
    padding:0 7px; }
    .bp3-input-group .bp3-button:empty{
      padding:0; }
  .bp3-input-group > .bp3-input-left-container,
  .bp3-input-group > .bp3-icon{
    z-index:1; }
  .bp3-input-group > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group > .bp3-icon{
    color:#5c7080; }
    .bp3-input-group > .bp3-input-left-container > .bp3-icon:empty,
    .bp3-input-group > .bp3-icon:empty{
      font-family:"Icons16", sans-serif;
      font-size:16px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased; }
  .bp3-input-group > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group > .bp3-icon,
  .bp3-input-group .bp3-input-action > .bp3-spinner{
    margin:7px; }
  .bp3-input-group .bp3-tag{
    margin:5px; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
    color:#5c7080; }
    .bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus), .bp3-dark
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
      color:#a7b6c2; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large{
      color:#5c7080; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled{
    color:rgba(92, 112, 128, 0.6) !important; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-input-group.bp3-disabled{
    cursor:not-allowed; }
    .bp3-input-group.bp3-disabled .bp3-icon{
      color:rgba(92, 112, 128, 0.6); }
  .bp3-input-group.bp3-large .bp3-button{
    min-height:30px;
    min-width:30px;
    margin:5px; }
  .bp3-input-group.bp3-large > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group.bp3-large > .bp3-icon,
  .bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner{
    margin:12px; }
  .bp3-input-group.bp3-large .bp3-input{
    font-size:16px;
    height:40px;
    line-height:40px; }
    .bp3-input-group.bp3-large .bp3-input[type="search"], .bp3-input-group.bp3-large .bp3-input.bp3-round{
      padding:0 15px; }
    .bp3-input-group.bp3-large .bp3-input:not(:first-child){
      padding-left:40px; }
    .bp3-input-group.bp3-large .bp3-input:not(:last-child){
      padding-right:40px; }
  .bp3-input-group.bp3-small .bp3-button{
    min-height:20px;
    min-width:20px;
    margin:2px; }
  .bp3-input-group.bp3-small .bp3-tag{
    min-height:20px;
    min-width:20px;
    margin:2px; }
  .bp3-input-group.bp3-small > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group.bp3-small > .bp3-icon,
  .bp3-input-group.bp3-small .bp3-input-action > .bp3-spinner{
    margin:4px; }
  .bp3-input-group.bp3-small .bp3-input{
    font-size:12px;
    height:24px;
    line-height:24px;
    padding-left:8px;
    padding-right:8px; }
    .bp3-input-group.bp3-small .bp3-input[type="search"], .bp3-input-group.bp3-small .bp3-input.bp3-round{
      padding:0 12px; }
    .bp3-input-group.bp3-small .bp3-input:not(:first-child){
      padding-left:24px; }
    .bp3-input-group.bp3-small .bp3-input:not(:last-child){
      padding-right:24px; }
  .bp3-input-group.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-input-group.bp3-round .bp3-button,
  .bp3-input-group.bp3-round .bp3-input,
  .bp3-input-group.bp3-round .bp3-tag{
    border-radius:30px; }
  .bp3-dark .bp3-input-group .bp3-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-input-group.bp3-disabled .bp3-icon{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-input-group.bp3-intent-primary .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input-group.bp3-intent-primary .bp3-input:disabled, .bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-primary > .bp3-icon{
    color:#106ba3; }
    .bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon{
      color:#48aff0; }
  .bp3-input-group.bp3-intent-success .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input-group.bp3-intent-success .bp3-input:disabled, .bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-success > .bp3-icon{
    color:#0d8050; }
    .bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon{
      color:#3dcc91; }
  .bp3-input-group.bp3-intent-warning .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input-group.bp3-intent-warning .bp3-input:disabled, .bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-warning > .bp3-icon{
    color:#bf7326; }
    .bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon{
      color:#ffb366; }
  .bp3-input-group.bp3-intent-danger .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input-group.bp3-intent-danger .bp3-input:disabled, .bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-danger > .bp3-icon{
    color:#c23030; }
    .bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon{
      color:#ff7373; }
.bp3-input{
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  background:#ffffff;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  color:#182026;
  font-size:14px;
  font-weight:400;
  height:30px;
  line-height:30px;
  outline:none;
  padding:0 10px;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  vertical-align:middle; }
  .bp3-input::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input:focus, .bp3-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-input[type="search"], .bp3-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-input:disabled, .bp3-input.bp3-disabled{
    background:rgba(206, 217, 224, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    resize:none; }
  .bp3-input.bp3-large{
    font-size:16px;
    height:40px;
    line-height:40px; }
    .bp3-input.bp3-large[type="search"], .bp3-input.bp3-large.bp3-round{
      padding:0 15px; }
  .bp3-input.bp3-small{
    font-size:12px;
    height:24px;
    line-height:24px;
    padding-left:8px;
    padding-right:8px; }
    .bp3-input.bp3-small[type="search"], .bp3-input.bp3-small.bp3-round{
      padding:0 12px; }
  .bp3-input.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-dark .bp3-input{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark .bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input:disabled, .bp3-dark .bp3-input.bp3-disabled{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
  .bp3-input.bp3-intent-primary{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input.bp3-intent-primary:disabled, .bp3-input.bp3-intent-primary.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary:focus{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                box-shadow:inset 0 0 0 1px #137cbd; }
      .bp3-dark .bp3-input.bp3-intent-primary:disabled, .bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-success{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input.bp3-intent-success:disabled, .bp3-input.bp3-intent-success.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-success{
      -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success:focus{
        -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                box-shadow:inset 0 0 0 1px #0f9960; }
      .bp3-dark .bp3-input.bp3-intent-success:disabled, .bp3-dark .bp3-input.bp3-intent-success.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-warning{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input.bp3-intent-warning:disabled, .bp3-input.bp3-intent-warning.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning:focus{
        -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                box-shadow:inset 0 0 0 1px #d9822b; }
      .bp3-dark .bp3-input.bp3-intent-warning:disabled, .bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-danger{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input.bp3-intent-danger:disabled, .bp3-input.bp3-intent-danger.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger:focus{
        -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #db3737;
                box-shadow:inset 0 0 0 1px #db3737; }
      .bp3-dark .bp3-input.bp3-intent-danger:disabled, .bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input::-ms-clear{
    display:none; }
textarea.bp3-input{
  max-width:100%;
  padding:10px; }
  textarea.bp3-input, textarea.bp3-input.bp3-large, textarea.bp3-input.bp3-small{
    height:auto;
    line-height:inherit; }
  textarea.bp3-input.bp3-small{
    padding:8px; }
  .bp3-dark textarea.bp3-input{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark textarea.bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input:disabled, .bp3-dark textarea.bp3-input.bp3-disabled{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
label.bp3-label{
  display:block;
  margin-bottom:15px;
  margin-top:0; }
  label.bp3-label .bp3-html-select,
  label.bp3-label .bp3-input,
  label.bp3-label .bp3-select,
  label.bp3-label .bp3-slider,
  label.bp3-label .bp3-popover-wrapper{
    display:block;
    margin-top:5px;
    text-transform:none; }
  label.bp3-label .bp3-button-group{
    margin-top:5px; }
  label.bp3-label .bp3-select select,
  label.bp3-label .bp3-html-select select{
    font-weight:400;
    vertical-align:top;
    width:100%; }
  label.bp3-label.bp3-disabled,
  label.bp3-label.bp3-disabled .bp3-text-muted{
    color:rgba(92, 112, 128, 0.6); }
  label.bp3-label.bp3-inline{
    line-height:30px; }
    label.bp3-label.bp3-inline .bp3-html-select,
    label.bp3-label.bp3-inline .bp3-input,
    label.bp3-label.bp3-inline .bp3-input-group,
    label.bp3-label.bp3-inline .bp3-select,
    label.bp3-label.bp3-inline .bp3-popover-wrapper{
      display:inline-block;
      margin:0 0 0 5px;
      vertical-align:top; }
    label.bp3-label.bp3-inline .bp3-button-group{
      margin:0 0 0 5px; }
    label.bp3-label.bp3-inline .bp3-input-group .bp3-input{
      margin-left:0; }
    label.bp3-label.bp3-inline.bp3-large{
      line-height:40px; }
  label.bp3-label:not(.bp3-inline) .bp3-popover-target{
    display:block; }
  .bp3-dark label.bp3-label{
    color:#f5f8fa; }
    .bp3-dark label.bp3-label.bp3-disabled,
    .bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted{
      color:rgba(167, 182, 194, 0.6); }
.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button{
  -webkit-box-flex:1;
      -ms-flex:1 1 14px;
          flex:1 1 14px;
  min-height:0;
  padding:0;
  width:30px; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child{
    border-radius:0 3px 0 0; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child{
    border-radius:0 0 3px 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child{
  border-radius:3px 0 0 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child{
  border-radius:0 0 0 3px; }

.bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button{
  width:40px; }

form{
  display:block; }
.bp3-html-select select,
.bp3-select select{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  font-size:14px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  padding:5px 10px;
  text-align:left;
  vertical-align:middle;
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  color:#182026;
  -moz-appearance:none;
  -webkit-appearance:none;
  border-radius:3px;
  height:30px;
  padding:0 25px 0 10px;
  width:100%; }
  .bp3-html-select select > *, .bp3-select select > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-html-select select > .bp3-fill, .bp3-select select > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-html-select select::before,
  .bp3-select select::before, .bp3-html-select select > *, .bp3-select select > *{
    margin-right:7px; }
  .bp3-html-select select:empty::before,
  .bp3-select select:empty::before,
  .bp3-html-select select > :last-child,
  .bp3-select select > :last-child{
    margin-right:0; }
  .bp3-html-select select:hover,
  .bp3-select select:hover{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
  .bp3-html-select select:active,
  .bp3-select select:active, .bp3-html-select select.bp3-active,
  .bp3-select select.bp3-active{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-html-select select:disabled,
  .bp3-select select:disabled, .bp3-html-select select.bp3-disabled,
  .bp3-select select.bp3-disabled{
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    outline:none; }
    .bp3-html-select select:disabled.bp3-active,
    .bp3-select select:disabled.bp3-active, .bp3-html-select select:disabled.bp3-active:hover,
    .bp3-select select:disabled.bp3-active:hover, .bp3-html-select select.bp3-disabled.bp3-active,
    .bp3-select select.bp3-disabled.bp3-active, .bp3-html-select select.bp3-disabled.bp3-active:hover,
    .bp3-select select.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }

.bp3-html-select.bp3-minimal select,
.bp3-select.bp3-minimal select{
  background:none;
  -webkit-box-shadow:none;
          box-shadow:none; }
  .bp3-html-select.bp3-minimal select:hover,
  .bp3-select.bp3-minimal select:hover{
    background:rgba(167, 182, 194, 0.3);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:#182026;
    text-decoration:none; }
  .bp3-html-select.bp3-minimal select:active,
  .bp3-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal select.bp3-active,
  .bp3-select.bp3-minimal select.bp3-active{
    background:rgba(115, 134, 148, 0.3);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:#182026; }
  .bp3-html-select.bp3-minimal select:disabled,
  .bp3-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal select:disabled:hover,
  .bp3-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal select.bp3-disabled,
  .bp3-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal select.bp3-disabled:hover,
  .bp3-select.bp3-minimal select.bp3-disabled:hover{
    background:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
    .bp3-html-select.bp3-minimal select:disabled.bp3-active,
    .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active{
      background:rgba(115, 134, 148, 0.3); }
  .bp3-dark .bp3-html-select.bp3-minimal select, .bp3-html-select.bp3-minimal .bp3-dark select,
  .bp3-dark .bp3-select.bp3-minimal select, .bp3-select.bp3-minimal .bp3-dark select{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:inherit; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover, .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover{
      background:rgba(138, 155, 168, 0.15); }
    .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      background:rgba(138, 155, 168, 0.3);
      color:#f5f8fa; }
    .bp3-dark .bp3-html-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal .bp3-dark select:disabled,
    .bp3-dark .bp3-select.bp3-minimal select:disabled, .bp3-select.bp3-minimal .bp3-dark select:disabled, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select:disabled:hover, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover{
      background:none;
      color:rgba(167, 182, 194, 0.6);
      cursor:not-allowed; }
      .bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active{
        background:rgba(138, 155, 168, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-primary,
  .bp3-select.bp3-minimal select.bp3-intent-primary{
    color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover{
      background:rgba(19, 124, 189, 0.15);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      background:rgba(19, 124, 189, 0.3);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled{
      background:none;
      color:rgba(16, 107, 163, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active{
        background:rgba(19, 124, 189, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
      stroke:#106ba3; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary{
      color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.2);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(72, 175, 240, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-success,
  .bp3-select.bp3-minimal select.bp3-intent-success{
    color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover{
      background:rgba(15, 153, 96, 0.15);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      background:rgba(15, 153, 96, 0.3);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled{
      background:none;
      color:rgba(13, 128, 80, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active{
        background:rgba(15, 153, 96, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
      stroke:#0d8050; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success{
      color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.2);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(61, 204, 145, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-warning,
  .bp3-select.bp3-minimal select.bp3-intent-warning{
    color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover{
      background:rgba(217, 130, 43, 0.15);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      background:rgba(217, 130, 43, 0.3);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled{
      background:none;
      color:rgba(191, 115, 38, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active{
        background:rgba(217, 130, 43, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
      stroke:#bf7326; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning{
      color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.2);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(255, 179, 102, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-danger,
  .bp3-select.bp3-minimal select.bp3-intent-danger{
    color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover{
      background:rgba(219, 55, 55, 0.15);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      background:rgba(219, 55, 55, 0.3);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled{
      background:none;
      color:rgba(194, 48, 48, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active{
        background:rgba(219, 55, 55, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
      stroke:#c23030; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger{
      color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.2);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(255, 115, 115, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }

.bp3-html-select.bp3-large select,
.bp3-select.bp3-large select{
  font-size:16px;
  height:40px;
  padding-right:35px; }

.bp3-dark .bp3-html-select select, .bp3-dark .bp3-select select{
  background-color:#394b59;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
  color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover, .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover{
    background-color:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    background-color:#202b33;
    background-image:none;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-html-select select:disabled, .bp3-dark .bp3-select select:disabled, .bp3-dark .bp3-html-select select.bp3-disabled, .bp3-dark .bp3-select select.bp3-disabled{
    background-color:rgba(57, 75, 89, 0.5);
    background-image:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-html-select select:disabled.bp3-active, .bp3-dark .bp3-select select:disabled.bp3-active, .bp3-dark .bp3-html-select select.bp3-disabled.bp3-active, .bp3-dark .bp3-select select.bp3-disabled.bp3-active{
      background:rgba(57, 75, 89, 0.7); }
  .bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head, .bp3-dark .bp3-select select .bp3-button-spinner .bp3-spinner-head{
    background:rgba(16, 22, 26, 0.5);
    stroke:#8a9ba8; }

.bp3-html-select select:disabled,
.bp3-select select:disabled{
  background-color:rgba(206, 217, 224, 0.5);
  -webkit-box-shadow:none;
          box-shadow:none;
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-html-select .bp3-icon,
.bp3-select .bp3-icon, .bp3-select::after{
  color:#5c7080;
  pointer-events:none;
  position:absolute;
  right:7px;
  top:7px; }
  .bp3-html-select .bp3-disabled.bp3-icon,
  .bp3-select .bp3-disabled.bp3-icon, .bp3-disabled.bp3-select::after{
    color:rgba(92, 112, 128, 0.6); }
.bp3-html-select,
.bp3-select{
  display:inline-block;
  letter-spacing:normal;
  position:relative;
  vertical-align:middle; }
  .bp3-html-select select::-ms-expand,
  .bp3-select select::-ms-expand{
    display:none; }
  .bp3-html-select .bp3-icon,
  .bp3-select .bp3-icon{
    color:#5c7080; }
    .bp3-html-select .bp3-icon:hover,
    .bp3-select .bp3-icon:hover{
      color:#182026; }
    .bp3-dark .bp3-html-select .bp3-icon, .bp3-dark
    .bp3-select .bp3-icon{
      color:#a7b6c2; }
      .bp3-dark .bp3-html-select .bp3-icon:hover, .bp3-dark
      .bp3-select .bp3-icon:hover{
        color:#f5f8fa; }
  .bp3-html-select.bp3-large::after,
  .bp3-html-select.bp3-large .bp3-icon,
  .bp3-select.bp3-large::after,
  .bp3-select.bp3-large .bp3-icon{
    right:12px;
    top:12px; }
  .bp3-html-select.bp3-fill,
  .bp3-html-select.bp3-fill select,
  .bp3-select.bp3-fill,
  .bp3-select.bp3-fill select{
    width:100%; }
  .bp3-dark .bp3-html-select option, .bp3-dark
  .bp3-select option{
    background-color:#30404d;
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select option:disabled, .bp3-dark
  .bp3-select option:disabled{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-html-select::after, .bp3-dark
  .bp3-select::after{
    color:#a7b6c2; }

.bp3-select::after{
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-style:normal;
  font-weight:400;
  line-height:1;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  content:"\uE6C6"; }
.bp3-running-text table, table.bp3-html-table{
  border-spacing:0;
  font-size:14px; }
  .bp3-running-text table th, table.bp3-html-table th,
  .bp3-running-text table td,
  table.bp3-html-table td{
    padding:11px;
    text-align:left;
    vertical-align:top; }
  .bp3-running-text table th, table.bp3-html-table th{
    color:#182026;
    font-weight:600; }
  
  .bp3-running-text table td,
  table.bp3-html-table td{
    color:#182026; }
  .bp3-running-text table tbody tr:first-child th, table.bp3-html-table tbody tr:first-child th,
  .bp3-running-text table tbody tr:first-child td,
  table.bp3-html-table tbody tr:first-child td,
  .bp3-running-text table tfoot tr:first-child th,
  table.bp3-html-table tfoot tr:first-child th,
  .bp3-running-text table tfoot tr:first-child td,
  table.bp3-html-table tfoot tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-running-text table th, .bp3-running-text .bp3-dark table th, .bp3-dark table.bp3-html-table th{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table td, .bp3-running-text .bp3-dark table td, .bp3-dark table.bp3-html-table td{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table tbody tr:first-child th, .bp3-running-text .bp3-dark table tbody tr:first-child th, .bp3-dark table.bp3-html-table tbody tr:first-child th,
  .bp3-dark .bp3-running-text table tbody tr:first-child td,
  .bp3-running-text .bp3-dark table tbody tr:first-child td,
  .bp3-dark table.bp3-html-table tbody tr:first-child td,
  .bp3-dark .bp3-running-text table tfoot tr:first-child th,
  .bp3-running-text .bp3-dark table tfoot tr:first-child th,
  .bp3-dark table.bp3-html-table tfoot tr:first-child th,
  .bp3-dark .bp3-running-text table tfoot tr:first-child td,
  .bp3-running-text .bp3-dark table tfoot tr:first-child td,
  .bp3-dark table.bp3-html-table tfoot tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }

table.bp3-html-table.bp3-html-table-condensed th,
table.bp3-html-table.bp3-html-table-condensed td, table.bp3-html-table.bp3-small th,
table.bp3-html-table.bp3-small td{
  padding-bottom:6px;
  padding-top:6px; }

table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
  background:rgba(191, 204, 214, 0.15); }

table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
  -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered tbody tr td,
table.bp3-html-table.bp3-html-table-bordered tfoot tr td{
  -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child),
  table.bp3-html-table.bp3-html-table-bordered tfoot tr td:not(:first-child){
    -webkit-box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
  -webkit-box-shadow:none;
          box-shadow:none; }
  table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child){
    -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-interactive tbody tr:hover td{
  background-color:rgba(191, 204, 214, 0.3);
  cursor:pointer; }

table.bp3-html-table.bp3-interactive tbody tr:active td{
  background-color:rgba(191, 204, 214, 0.4); }

.bp3-dark table.bp3-html-table{ }
  .bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
    background:rgba(92, 112, 128, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
    -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td,
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tfoot tr td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }
    .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child),
    .bp3-dark table.bp3-html-table.bp3-html-table-bordered tfoot tr td:not(:first-child){
      -webkit-box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
              box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
    -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
    .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td{
    background-color:rgba(92, 112, 128, 0.3);
    cursor:pointer; }
  .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td{
    background-color:rgba(92, 112, 128, 0.4); }

.bp3-key-combo{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center; }
  .bp3-key-combo > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-key-combo > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-key-combo::before,
  .bp3-key-combo > *{
    margin-right:5px; }
  .bp3-key-combo:empty::before,
  .bp3-key-combo > :last-child{
    margin-right:0; }

.bp3-hotkey-dialog{
  padding-bottom:0;
  top:40px; }
  .bp3-hotkey-dialog .bp3-dialog-body{
    margin:0;
    padding:0; }
  .bp3-hotkey-dialog .bp3-hotkey-label{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1; }

.bp3-hotkey-column{
  margin:auto;
  max-height:80vh;
  overflow-y:auto;
  padding:30px; }
  .bp3-hotkey-column .bp3-heading{
    margin-bottom:20px; }
    .bp3-hotkey-column .bp3-heading:not(:first-child){
      margin-top:40px; }

.bp3-hotkey{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  margin-left:0;
  margin-right:0; }
  .bp3-hotkey:not(:last-child){
    margin-bottom:10px; }
.bp3-icon{
  display:inline-block;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  vertical-align:text-bottom; }
  .bp3-icon:not(:empty)::before{
    content:"" !important;
    content:unset !important; }
  .bp3-icon > svg{
    display:block; }
    .bp3-icon > svg:not([fill]){
      fill:currentColor; }

.bp3-icon.bp3-intent-primary, .bp3-icon-standard.bp3-intent-primary, .bp3-icon-large.bp3-intent-primary{
  color:#106ba3; }
  .bp3-dark .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-icon-large.bp3-intent-primary{
    color:#48aff0; }

.bp3-icon.bp3-intent-success, .bp3-icon-standard.bp3-intent-success, .bp3-icon-large.bp3-intent-success{
  color:#0d8050; }
  .bp3-dark .bp3-icon.bp3-intent-success, .bp3-dark .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-icon-large.bp3-intent-success{
    color:#3dcc91; }

.bp3-icon.bp3-intent-warning, .bp3-icon-standard.bp3-intent-warning, .bp3-icon-large.bp3-intent-warning{
  color:#bf7326; }
  .bp3-dark .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-icon-large.bp3-intent-warning{
    color:#ffb366; }

.bp3-icon.bp3-intent-danger, .bp3-icon-standard.bp3-intent-danger, .bp3-icon-large.bp3-intent-danger{
  color:#c23030; }
  .bp3-dark .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-icon-large.bp3-intent-danger{
    color:#ff7373; }

span.bp3-icon-standard{
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-style:normal;
  font-weight:400;
  line-height:1;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon-large{
  font-family:"Icons20", sans-serif;
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:1;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon:empty{
  font-family:"Icons20";
  font-size:inherit;
  font-style:normal;
  font-weight:400;
  line-height:1; }
  span.bp3-icon:empty::before{
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased; }

.bp3-icon-add::before{
  content:"\uE63E"; }

.bp3-icon-add-column-left::before{
  content:"\uE6F9"; }

.bp3-icon-add-column-right::before{
  content:"\uE6FA"; }

.bp3-icon-add-row-bottom::before{
  content:"\uE6F8"; }

.bp3-icon-add-row-top::before{
  content:"\uE6F7"; }

.bp3-icon-add-to-artifact::before{
  content:"\uE67C"; }

.bp3-icon-add-to-folder::before{
  content:"\uE6D2"; }

.bp3-icon-airplane::before{
  content:"\uE74B"; }

.bp3-icon-align-center::before{
  content:"\uE603"; }

.bp3-icon-align-justify::before{
  content:"\uE605"; }

.bp3-icon-align-left::before{
  content:"\uE602"; }

.bp3-icon-align-right::before{
  content:"\uE604"; }

.bp3-icon-alignment-bottom::before{
  content:"\uE727"; }

.bp3-icon-alignment-horizontal-center::before{
  content:"\uE726"; }

.bp3-icon-alignment-left::before{
  content:"\uE722"; }

.bp3-icon-alignment-right::before{
  content:"\uE724"; }

.bp3-icon-alignment-top::before{
  content:"\uE725"; }

.bp3-icon-alignment-vertical-center::before{
  content:"\uE723"; }

.bp3-icon-annotation::before{
  content:"\uE6F0"; }

.bp3-icon-application::before{
  content:"\uE735"; }

.bp3-icon-applications::before{
  content:"\uE621"; }

.bp3-icon-archive::before{
  content:"\uE907"; }

.bp3-icon-arrow-bottom-left::before{
  content:"\u2199"; }

.bp3-icon-arrow-bottom-right::before{
  content:"\u2198"; }

.bp3-icon-arrow-down::before{
  content:"\u2193"; }

.bp3-icon-arrow-left::before{
  content:"\u2190"; }

.bp3-icon-arrow-right::before{
  content:"\u2192"; }

.bp3-icon-arrow-top-left::before{
  content:"\u2196"; }

.bp3-icon-arrow-top-right::before{
  content:"\u2197"; }

.bp3-icon-arrow-up::before{
  content:"\u2191"; }

.bp3-icon-arrows-horizontal::before{
  content:"\u2194"; }

.bp3-icon-arrows-vertical::before{
  content:"\u2195"; }

.bp3-icon-asterisk::before{
  content:"*"; }

.bp3-icon-automatic-updates::before{
  content:"\uE65F"; }

.bp3-icon-badge::before{
  content:"\uE6E3"; }

.bp3-icon-ban-circle::before{
  content:"\uE69D"; }

.bp3-icon-bank-account::before{
  content:"\uE76F"; }

.bp3-icon-barcode::before{
  content:"\uE676"; }

.bp3-icon-blank::before{
  content:"\uE900"; }

.bp3-icon-blocked-person::before{
  content:"\uE768"; }

.bp3-icon-bold::before{
  content:"\uE606"; }

.bp3-icon-book::before{
  content:"\uE6B8"; }

.bp3-icon-bookmark::before{
  content:"\uE61A"; }

.bp3-icon-box::before{
  content:"\uE6BF"; }

.bp3-icon-briefcase::before{
  content:"\uE674"; }

.bp3-icon-bring-data::before{
  content:"\uE90A"; }

.bp3-icon-build::before{
  content:"\uE72D"; }

.bp3-icon-calculator::before{
  content:"\uE70B"; }

.bp3-icon-calendar::before{
  content:"\uE62B"; }

.bp3-icon-camera::before{
  content:"\uE69E"; }

.bp3-icon-caret-down::before{
  content:"\u2304"; }

.bp3-icon-caret-left::before{
  content:"\u2329"; }

.bp3-icon-caret-right::before{
  content:"\u232A"; }

.bp3-icon-caret-up::before{
  content:"\u2303"; }

.bp3-icon-cell-tower::before{
  content:"\uE770"; }

.bp3-icon-changes::before{
  content:"\uE623"; }

.bp3-icon-chart::before{
  content:"\uE67E"; }

.bp3-icon-chat::before{
  content:"\uE689"; }

.bp3-icon-chevron-backward::before{
  content:"\uE6DF"; }

.bp3-icon-chevron-down::before{
  content:"\uE697"; }

.bp3-icon-chevron-forward::before{
  content:"\uE6E0"; }

.bp3-icon-chevron-left::before{
  content:"\uE694"; }

.bp3-icon-chevron-right::before{
  content:"\uE695"; }

.bp3-icon-chevron-up::before{
  content:"\uE696"; }

.bp3-icon-circle::before{
  content:"\uE66A"; }

.bp3-icon-circle-arrow-down::before{
  content:"\uE68E"; }

.bp3-icon-circle-arrow-left::before{
  content:"\uE68C"; }

.bp3-icon-circle-arrow-right::before{
  content:"\uE68B"; }

.bp3-icon-circle-arrow-up::before{
  content:"\uE68D"; }

.bp3-icon-citation::before{
  content:"\uE61B"; }

.bp3-icon-clean::before{
  content:"\uE7C5"; }

.bp3-icon-clipboard::before{
  content:"\uE61D"; }

.bp3-icon-cloud::before{
  content:"\u2601"; }

.bp3-icon-cloud-download::before{
  content:"\uE690"; }

.bp3-icon-cloud-upload::before{
  content:"\uE691"; }

.bp3-icon-code::before{
  content:"\uE661"; }

.bp3-icon-code-block::before{
  content:"\uE6C5"; }

.bp3-icon-cog::before{
  content:"\uE645"; }

.bp3-icon-collapse-all::before{
  content:"\uE763"; }

.bp3-icon-column-layout::before{
  content:"\uE6DA"; }

.bp3-icon-comment::before{
  content:"\uE68A"; }

.bp3-icon-comparison::before{
  content:"\uE637"; }

.bp3-icon-compass::before{
  content:"\uE79C"; }

.bp3-icon-compressed::before{
  content:"\uE6C0"; }

.bp3-icon-confirm::before{
  content:"\uE639"; }

.bp3-icon-console::before{
  content:"\uE79B"; }

.bp3-icon-contrast::before{
  content:"\uE6CB"; }

.bp3-icon-control::before{
  content:"\uE67F"; }

.bp3-icon-credit-card::before{
  content:"\uE649"; }

.bp3-icon-cross::before{
  content:"\u2717"; }

.bp3-icon-crown::before{
  content:"\uE7B4"; }

.bp3-icon-cube::before{
  content:"\uE7C8"; }

.bp3-icon-cube-add::before{
  content:"\uE7C9"; }

.bp3-icon-cube-remove::before{
  content:"\uE7D0"; }

.bp3-icon-curved-range-chart::before{
  content:"\uE71B"; }

.bp3-icon-cut::before{
  content:"\uE6EF"; }

.bp3-icon-dashboard::before{
  content:"\uE751"; }

.bp3-icon-data-lineage::before{
  content:"\uE908"; }

.bp3-icon-database::before{
  content:"\uE683"; }

.bp3-icon-delete::before{
  content:"\uE644"; }

.bp3-icon-delta::before{
  content:"\u0394"; }

.bp3-icon-derive-column::before{
  content:"\uE739"; }

.bp3-icon-desktop::before{
  content:"\uE6AF"; }

.bp3-icon-diagnosis::before{
  content:"\uE90D"; }

.bp3-icon-diagram-tree::before{
  content:"\uE7B3"; }

.bp3-icon-direction-left::before{
  content:"\uE681"; }

.bp3-icon-direction-right::before{
  content:"\uE682"; }

.bp3-icon-disable::before{
  content:"\uE600"; }

.bp3-icon-document::before{
  content:"\uE630"; }

.bp3-icon-document-open::before{
  content:"\uE71E"; }

.bp3-icon-document-share::before{
  content:"\uE71F"; }

.bp3-icon-dollar::before{
  content:"$"; }

.bp3-icon-dot::before{
  content:"\u2022"; }

.bp3-icon-double-caret-horizontal::before{
  content:"\uE6C7"; }

.bp3-icon-double-caret-vertical::before{
  content:"\uE6C6"; }

.bp3-icon-double-chevron-down::before{
  content:"\uE703"; }

.bp3-icon-double-chevron-left::before{
  content:"\uE6FF"; }

.bp3-icon-double-chevron-right::before{
  content:"\uE701"; }

.bp3-icon-double-chevron-up::before{
  content:"\uE702"; }

.bp3-icon-doughnut-chart::before{
  content:"\uE6CE"; }

.bp3-icon-download::before{
  content:"\uE62F"; }

.bp3-icon-drag-handle-horizontal::before{
  content:"\uE716"; }

.bp3-icon-drag-handle-vertical::before{
  content:"\uE715"; }

.bp3-icon-draw::before{
  content:"\uE66B"; }

.bp3-icon-drive-time::before{
  content:"\uE615"; }

.bp3-icon-duplicate::before{
  content:"\uE69C"; }

.bp3-icon-edit::before{
  content:"\u270E"; }

.bp3-icon-eject::before{
  content:"\u23CF"; }

.bp3-icon-endorsed::before{
  content:"\uE75F"; }

.bp3-icon-envelope::before{
  content:"\u2709"; }

.bp3-icon-equals::before{
  content:"\uE7D9"; }

.bp3-icon-eraser::before{
  content:"\uE773"; }

.bp3-icon-error::before{
  content:"\uE648"; }

.bp3-icon-euro::before{
  content:"\u20AC"; }

.bp3-icon-exchange::before{
  content:"\uE636"; }

.bp3-icon-exclude-row::before{
  content:"\uE6EA"; }

.bp3-icon-expand-all::before{
  content:"\uE764"; }

.bp3-icon-export::before{
  content:"\uE633"; }

.bp3-icon-eye-off::before{
  content:"\uE6CC"; }

.bp3-icon-eye-on::before{
  content:"\uE75A"; }

.bp3-icon-eye-open::before{
  content:"\uE66F"; }

.bp3-icon-fast-backward::before{
  content:"\uE6A8"; }

.bp3-icon-fast-forward::before{
  content:"\uE6AC"; }

.bp3-icon-feed::before{
  content:"\uE656"; }

.bp3-icon-feed-subscribed::before{
  content:"\uE78F"; }

.bp3-icon-film::before{
  content:"\uE6A1"; }

.bp3-icon-filter::before{
  content:"\uE638"; }

.bp3-icon-filter-keep::before{
  content:"\uE78C"; }

.bp3-icon-filter-list::before{
  content:"\uE6EE"; }

.bp3-icon-filter-open::before{
  content:"\uE7D7"; }

.bp3-icon-filter-remove::before{
  content:"\uE78D"; }

.bp3-icon-flag::before{
  content:"\u2691"; }

.bp3-icon-flame::before{
  content:"\uE7A9"; }

.bp3-icon-flash::before{
  content:"\uE6B3"; }

.bp3-icon-floppy-disk::before{
  content:"\uE6B7"; }

.bp3-icon-flow-branch::before{
  content:"\uE7C1"; }

.bp3-icon-flow-end::before{
  content:"\uE7C4"; }

.bp3-icon-flow-linear::before{
  content:"\uE7C0"; }

.bp3-icon-flow-review::before{
  content:"\uE7C2"; }

.bp3-icon-flow-review-branch::before{
  content:"\uE7C3"; }

.bp3-icon-flows::before{
  content:"\uE659"; }

.bp3-icon-folder-close::before{
  content:"\uE652"; }

.bp3-icon-folder-new::before{
  content:"\uE7B0"; }

.bp3-icon-folder-open::before{
  content:"\uE651"; }

.bp3-icon-folder-shared::before{
  content:"\uE653"; }

.bp3-icon-folder-shared-open::before{
  content:"\uE670"; }

.bp3-icon-follower::before{
  content:"\uE760"; }

.bp3-icon-following::before{
  content:"\uE761"; }

.bp3-icon-font::before{
  content:"\uE6B4"; }

.bp3-icon-fork::before{
  content:"\uE63A"; }

.bp3-icon-form::before{
  content:"\uE795"; }

.bp3-icon-full-circle::before{
  content:"\uE685"; }

.bp3-icon-full-stacked-chart::before{
  content:"\uE75E"; }

.bp3-icon-fullscreen::before{
  content:"\uE699"; }

.bp3-icon-function::before{
  content:"\uE6E5"; }

.bp3-icon-gantt-chart::before{
  content:"\uE6F4"; }

.bp3-icon-geolocation::before{
  content:"\uE640"; }

.bp3-icon-geosearch::before{
  content:"\uE613"; }

.bp3-icon-git-branch::before{
  content:"\uE72A"; }

.bp3-icon-git-commit::before{
  content:"\uE72B"; }

.bp3-icon-git-merge::before{
  content:"\uE729"; }

.bp3-icon-git-new-branch::before{
  content:"\uE749"; }

.bp3-icon-git-pull::before{
  content:"\uE728"; }

.bp3-icon-git-push::before{
  content:"\uE72C"; }

.bp3-icon-git-repo::before{
  content:"\uE748"; }

.bp3-icon-glass::before{
  content:"\uE6B1"; }

.bp3-icon-globe::before{
  content:"\uE666"; }

.bp3-icon-globe-network::before{
  content:"\uE7B5"; }

.bp3-icon-graph::before{
  content:"\uE673"; }

.bp3-icon-graph-remove::before{
  content:"\uE609"; }

.bp3-icon-greater-than::before{
  content:"\uE7E1"; }

.bp3-icon-greater-than-or-equal-to::before{
  content:"\uE7E2"; }

.bp3-icon-grid::before{
  content:"\uE6D0"; }

.bp3-icon-grid-view::before{
  content:"\uE6E4"; }

.bp3-icon-group-objects::before{
  content:"\uE60A"; }

.bp3-icon-grouped-bar-chart::before{
  content:"\uE75D"; }

.bp3-icon-hand::before{
  content:"\uE6DE"; }

.bp3-icon-hand-down::before{
  content:"\uE6BB"; }

.bp3-icon-hand-left::before{
  content:"\uE6BC"; }

.bp3-icon-hand-right::before{
  content:"\uE6B9"; }

.bp3-icon-hand-up::before{
  content:"\uE6BA"; }

.bp3-icon-header::before{
  content:"\uE6B5"; }

.bp3-icon-header-one::before{
  content:"\uE793"; }

.bp3-icon-header-two::before{
  content:"\uE794"; }

.bp3-icon-headset::before{
  content:"\uE6DC"; }

.bp3-icon-heart::before{
  content:"\u2665"; }

.bp3-icon-heart-broken::before{
  content:"\uE7A2"; }

.bp3-icon-heat-grid::before{
  content:"\uE6F3"; }

.bp3-icon-heatmap::before{
  content:"\uE614"; }

.bp3-icon-help::before{
  content:"?"; }

.bp3-icon-helper-management::before{
  content:"\uE66D"; }

.bp3-icon-highlight::before{
  content:"\uE6ED"; }

.bp3-icon-history::before{
  content:"\uE64A"; }

.bp3-icon-home::before{
  content:"\u2302"; }

.bp3-icon-horizontal-bar-chart::before{
  content:"\uE70C"; }

.bp3-icon-horizontal-bar-chart-asc::before{
  content:"\uE75C"; }

.bp3-icon-horizontal-bar-chart-desc::before{
  content:"\uE71D"; }

.bp3-icon-horizontal-distribution::before{
  content:"\uE720"; }

.bp3-icon-id-number::before{
  content:"\uE771"; }

.bp3-icon-image-rotate-left::before{
  content:"\uE73A"; }

.bp3-icon-image-rotate-right::before{
  content:"\uE73B"; }

.bp3-icon-import::before{
  content:"\uE632"; }

.bp3-icon-inbox::before{
  content:"\uE629"; }

.bp3-icon-inbox-filtered::before{
  content:"\uE7D1"; }

.bp3-icon-inbox-geo::before{
  content:"\uE7D2"; }

.bp3-icon-inbox-search::before{
  content:"\uE7D3"; }

.bp3-icon-inbox-update::before{
  content:"\uE7D4"; }

.bp3-icon-info-sign::before{
  content:"\u2139"; }

.bp3-icon-inheritance::before{
  content:"\uE7D5"; }

.bp3-icon-inner-join::before{
  content:"\uE7A3"; }

.bp3-icon-insert::before{
  content:"\uE66C"; }

.bp3-icon-intersection::before{
  content:"\uE765"; }

.bp3-icon-ip-address::before{
  content:"\uE772"; }

.bp3-icon-issue::before{
  content:"\uE774"; }

.bp3-icon-issue-closed::before{
  content:"\uE776"; }

.bp3-icon-issue-new::before{
  content:"\uE775"; }

.bp3-icon-italic::before{
  content:"\uE607"; }

.bp3-icon-join-table::before{
  content:"\uE738"; }

.bp3-icon-key::before{
  content:"\uE78E"; }

.bp3-icon-key-backspace::before{
  content:"\uE707"; }

.bp3-icon-key-command::before{
  content:"\uE705"; }

.bp3-icon-key-control::before{
  content:"\uE704"; }

.bp3-icon-key-delete::before{
  content:"\uE708"; }

.bp3-icon-key-enter::before{
  content:"\uE70A"; }

.bp3-icon-key-escape::before{
  content:"\uE709"; }

.bp3-icon-key-option::before{
  content:"\uE742"; }

.bp3-icon-key-shift::before{
  content:"\uE706"; }

.bp3-icon-key-tab::before{
  content:"\uE757"; }

.bp3-icon-known-vehicle::before{
  content:"\uE73C"; }

.bp3-icon-lab-test::before{
  content:"\uE90E"; }

.bp3-icon-label::before{
  content:"\uE665"; }

.bp3-icon-layer::before{
  content:"\uE6CF"; }

.bp3-icon-layers::before{
  content:"\uE618"; }

.bp3-icon-layout::before{
  content:"\uE60C"; }

.bp3-icon-layout-auto::before{
  content:"\uE60D"; }

.bp3-icon-layout-balloon::before{
  content:"\uE6D3"; }

.bp3-icon-layout-circle::before{
  content:"\uE60E"; }

.bp3-icon-layout-grid::before{
  content:"\uE610"; }

.bp3-icon-layout-group-by::before{
  content:"\uE611"; }

.bp3-icon-layout-hierarchy::before{
  content:"\uE60F"; }

.bp3-icon-layout-linear::before{
  content:"\uE6C3"; }

.bp3-icon-layout-skew-grid::before{
  content:"\uE612"; }

.bp3-icon-layout-sorted-clusters::before{
  content:"\uE6D4"; }

.bp3-icon-learning::before{
  content:"\uE904"; }

.bp3-icon-left-join::before{
  content:"\uE7A4"; }

.bp3-icon-less-than::before{
  content:"\uE7E3"; }

.bp3-icon-less-than-or-equal-to::before{
  content:"\uE7E4"; }

.bp3-icon-lifesaver::before{
  content:"\uE7C7"; }

.bp3-icon-lightbulb::before{
  content:"\uE6B0"; }

.bp3-icon-link::before{
  content:"\uE62D"; }

.bp3-icon-list::before{
  content:"\u2630"; }

.bp3-icon-list-columns::before{
  content:"\uE7B9"; }

.bp3-icon-list-detail-view::before{
  content:"\uE743"; }

.bp3-icon-locate::before{
  content:"\uE619"; }

.bp3-icon-lock::before{
  content:"\uE625"; }

.bp3-icon-log-in::before{
  content:"\uE69A"; }

.bp3-icon-log-out::before{
  content:"\uE64C"; }

.bp3-icon-manual::before{
  content:"\uE6F6"; }

.bp3-icon-manually-entered-data::before{
  content:"\uE74A"; }

.bp3-icon-map::before{
  content:"\uE662"; }

.bp3-icon-map-create::before{
  content:"\uE741"; }

.bp3-icon-map-marker::before{
  content:"\uE67D"; }

.bp3-icon-maximize::before{
  content:"\uE635"; }

.bp3-icon-media::before{
  content:"\uE62C"; }

.bp3-icon-menu::before{
  content:"\uE762"; }

.bp3-icon-menu-closed::before{
  content:"\uE655"; }

.bp3-icon-menu-open::before{
  content:"\uE654"; }

.bp3-icon-merge-columns::before{
  content:"\uE74F"; }

.bp3-icon-merge-links::before{
  content:"\uE60B"; }

.bp3-icon-minimize::before{
  content:"\uE634"; }

.bp3-icon-minus::before{
  content:"\u2212"; }

.bp3-icon-mobile-phone::before{
  content:"\uE717"; }

.bp3-icon-mobile-video::before{
  content:"\uE69F"; }

.bp3-icon-moon::before{
  content:"\uE754"; }

.bp3-icon-more::before{
  content:"\uE62A"; }

.bp3-icon-mountain::before{
  content:"\uE7B1"; }

.bp3-icon-move::before{
  content:"\uE693"; }

.bp3-icon-mugshot::before{
  content:"\uE6DB"; }

.bp3-icon-multi-select::before{
  content:"\uE680"; }

.bp3-icon-music::before{
  content:"\uE6A6"; }

.bp3-icon-new-drawing::before{
  content:"\uE905"; }

.bp3-icon-new-grid-item::before{
  content:"\uE747"; }

.bp3-icon-new-layer::before{
  content:"\uE902"; }

.bp3-icon-new-layers::before{
  content:"\uE903"; }

.bp3-icon-new-link::before{
  content:"\uE65C"; }

.bp3-icon-new-object::before{
  content:"\uE65D"; }

.bp3-icon-new-person::before{
  content:"\uE6E9"; }

.bp3-icon-new-prescription::before{
  content:"\uE78B"; }

.bp3-icon-new-text-box::before{
  content:"\uE65B"; }

.bp3-icon-ninja::before{
  content:"\uE675"; }

.bp3-icon-not-equal-to::before{
  content:"\uE7E0"; }

.bp3-icon-notifications::before{
  content:"\uE624"; }

.bp3-icon-notifications-updated::before{
  content:"\uE7B8"; }

.bp3-icon-numbered-list::before{
  content:"\uE746"; }

.bp3-icon-numerical::before{
  content:"\uE756"; }

.bp3-icon-office::before{
  content:"\uE69B"; }

.bp3-icon-offline::before{
  content:"\uE67A"; }

.bp3-icon-oil-field::before{
  content:"\uE73F"; }

.bp3-icon-one-column::before{
  content:"\uE658"; }

.bp3-icon-outdated::before{
  content:"\uE7A8"; }

.bp3-icon-page-layout::before{
  content:"\uE660"; }

.bp3-icon-panel-stats::before{
  content:"\uE777"; }

.bp3-icon-panel-table::before{
  content:"\uE778"; }

.bp3-icon-paperclip::before{
  content:"\uE664"; }

.bp3-icon-paragraph::before{
  content:"\uE76C"; }

.bp3-icon-path::before{
  content:"\uE753"; }

.bp3-icon-path-search::before{
  content:"\uE65E"; }

.bp3-icon-pause::before{
  content:"\uE6A9"; }

.bp3-icon-people::before{
  content:"\uE63D"; }

.bp3-icon-percentage::before{
  content:"\uE76A"; }

.bp3-icon-person::before{
  content:"\uE63C"; }

.bp3-icon-phone::before{
  content:"\u260E"; }

.bp3-icon-pie-chart::before{
  content:"\uE684"; }

.bp3-icon-pin::before{
  content:"\uE646"; }

.bp3-icon-pivot::before{
  content:"\uE6F1"; }

.bp3-icon-pivot-table::before{
  content:"\uE6EB"; }

.bp3-icon-play::before{
  content:"\uE6AB"; }

.bp3-icon-plus::before{
  content:"+"; }

.bp3-icon-polygon-filter::before{
  content:"\uE6D1"; }

.bp3-icon-power::before{
  content:"\uE6D9"; }

.bp3-icon-predictive-analysis::before{
  content:"\uE617"; }

.bp3-icon-prescription::before{
  content:"\uE78A"; }

.bp3-icon-presentation::before{
  content:"\uE687"; }

.bp3-icon-print::before{
  content:"\u2399"; }

.bp3-icon-projects::before{
  content:"\uE622"; }

.bp3-icon-properties::before{
  content:"\uE631"; }

.bp3-icon-property::before{
  content:"\uE65A"; }

.bp3-icon-publish-function::before{
  content:"\uE752"; }

.bp3-icon-pulse::before{
  content:"\uE6E8"; }

.bp3-icon-random::before{
  content:"\uE698"; }

.bp3-icon-record::before{
  content:"\uE6AE"; }

.bp3-icon-redo::before{
  content:"\uE6C4"; }

.bp3-icon-refresh::before{
  content:"\uE643"; }

.bp3-icon-regression-chart::before{
  content:"\uE758"; }

.bp3-icon-remove::before{
  content:"\uE63F"; }

.bp3-icon-remove-column::before{
  content:"\uE755"; }

.bp3-icon-remove-column-left::before{
  content:"\uE6FD"; }

.bp3-icon-remove-column-right::before{
  content:"\uE6FE"; }

.bp3-icon-remove-row-bottom::before{
  content:"\uE6FC"; }

.bp3-icon-remove-row-top::before{
  content:"\uE6FB"; }

.bp3-icon-repeat::before{
  content:"\uE692"; }

.bp3-icon-reset::before{
  content:"\uE7D6"; }

.bp3-icon-resolve::before{
  content:"\uE672"; }

.bp3-icon-rig::before{
  content:"\uE740"; }

.bp3-icon-right-join::before{
  content:"\uE7A5"; }

.bp3-icon-ring::before{
  content:"\uE6F2"; }

.bp3-icon-rotate-document::before{
  content:"\uE6E1"; }

.bp3-icon-rotate-page::before{
  content:"\uE6E2"; }

.bp3-icon-satellite::before{
  content:"\uE76B"; }

.bp3-icon-saved::before{
  content:"\uE6B6"; }

.bp3-icon-scatter-plot::before{
  content:"\uE73E"; }

.bp3-icon-search::before{
  content:"\uE64B"; }

.bp3-icon-search-around::before{
  content:"\uE608"; }

.bp3-icon-search-template::before{
  content:"\uE628"; }

.bp3-icon-search-text::before{
  content:"\uE663"; }

.bp3-icon-segmented-control::before{
  content:"\uE6EC"; }

.bp3-icon-select::before{
  content:"\uE616"; }

.bp3-icon-selection::before{
  content:"\u29BF"; }

.bp3-icon-send-to::before{
  content:"\uE66E"; }

.bp3-icon-send-to-graph::before{
  content:"\uE736"; }

.bp3-icon-send-to-map::before{
  content:"\uE737"; }

.bp3-icon-series-add::before{
  content:"\uE796"; }

.bp3-icon-series-configuration::before{
  content:"\uE79A"; }

.bp3-icon-series-derived::before{
  content:"\uE799"; }

.bp3-icon-series-filtered::before{
  content:"\uE798"; }

.bp3-icon-series-search::before{
  content:"\uE797"; }

.bp3-icon-settings::before{
  content:"\uE6A2"; }

.bp3-icon-share::before{
  content:"\uE62E"; }

.bp3-icon-shield::before{
  content:"\uE7B2"; }

.bp3-icon-shop::before{
  content:"\uE6C2"; }

.bp3-icon-shopping-cart::before{
  content:"\uE6C1"; }

.bp3-icon-signal-search::before{
  content:"\uE909"; }

.bp3-icon-sim-card::before{
  content:"\uE718"; }

.bp3-icon-slash::before{
  content:"\uE769"; }

.bp3-icon-small-cross::before{
  content:"\uE6D7"; }

.bp3-icon-small-minus::before{
  content:"\uE70E"; }

.bp3-icon-small-plus::before{
  content:"\uE70D"; }

.bp3-icon-small-tick::before{
  content:"\uE6D8"; }

.bp3-icon-snowflake::before{
  content:"\uE7B6"; }

.bp3-icon-social-media::before{
  content:"\uE671"; }

.bp3-icon-sort::before{
  content:"\uE64F"; }

.bp3-icon-sort-alphabetical::before{
  content:"\uE64D"; }

.bp3-icon-sort-alphabetical-desc::before{
  content:"\uE6C8"; }

.bp3-icon-sort-asc::before{
  content:"\uE6D5"; }

.bp3-icon-sort-desc::before{
  content:"\uE6D6"; }

.bp3-icon-sort-numerical::before{
  content:"\uE64E"; }

.bp3-icon-sort-numerical-desc::before{
  content:"\uE6C9"; }

.bp3-icon-split-columns::before{
  content:"\uE750"; }

.bp3-icon-square::before{
  content:"\uE686"; }

.bp3-icon-stacked-chart::before{
  content:"\uE6E7"; }

.bp3-icon-star::before{
  content:"\u2605"; }

.bp3-icon-star-empty::before{
  content:"\u2606"; }

.bp3-icon-step-backward::before{
  content:"\uE6A7"; }

.bp3-icon-step-chart::before{
  content:"\uE70F"; }

.bp3-icon-step-forward::before{
  content:"\uE6AD"; }

.bp3-icon-stop::before{
  content:"\uE6AA"; }

.bp3-icon-stopwatch::before{
  content:"\uE901"; }

.bp3-icon-strikethrough::before{
  content:"\uE7A6"; }

.bp3-icon-style::before{
  content:"\uE601"; }

.bp3-icon-swap-horizontal::before{
  content:"\uE745"; }

.bp3-icon-swap-vertical::before{
  content:"\uE744"; }

.bp3-icon-symbol-circle::before{
  content:"\uE72E"; }

.bp3-icon-symbol-cross::before{
  content:"\uE731"; }

.bp3-icon-symbol-diamond::before{
  content:"\uE730"; }

.bp3-icon-symbol-square::before{
  content:"\uE72F"; }

.bp3-icon-symbol-triangle-down::before{
  content:"\uE733"; }

.bp3-icon-symbol-triangle-up::before{
  content:"\uE732"; }

.bp3-icon-tag::before{
  content:"\uE61C"; }

.bp3-icon-take-action::before{
  content:"\uE6CA"; }

.bp3-icon-taxi::before{
  content:"\uE79E"; }

.bp3-icon-text-highlight::before{
  content:"\uE6DD"; }

.bp3-icon-th::before{
  content:"\uE667"; }

.bp3-icon-th-derived::before{
  content:"\uE669"; }

.bp3-icon-th-disconnect::before{
  content:"\uE7D8"; }

.bp3-icon-th-filtered::before{
  content:"\uE7C6"; }

.bp3-icon-th-list::before{
  content:"\uE668"; }

.bp3-icon-thumbs-down::before{
  content:"\uE6BE"; }

.bp3-icon-thumbs-up::before{
  content:"\uE6BD"; }

.bp3-icon-tick::before{
  content:"\u2713"; }

.bp3-icon-tick-circle::before{
  content:"\uE779"; }

.bp3-icon-time::before{
  content:"\u23F2"; }

.bp3-icon-timeline-area-chart::before{
  content:"\uE6CD"; }

.bp3-icon-timeline-bar-chart::before{
  content:"\uE620"; }

.bp3-icon-timeline-events::before{
  content:"\uE61E"; }

.bp3-icon-timeline-line-chart::before{
  content:"\uE61F"; }

.bp3-icon-tint::before{
  content:"\uE6B2"; }

.bp3-icon-torch::before{
  content:"\uE677"; }

.bp3-icon-tractor::before{
  content:"\uE90C"; }

.bp3-icon-train::before{
  content:"\uE79F"; }

.bp3-icon-translate::before{
  content:"\uE759"; }

.bp3-icon-trash::before{
  content:"\uE63B"; }

.bp3-icon-tree::before{
  content:"\uE7B7"; }

.bp3-icon-trending-down::before{
  content:"\uE71A"; }

.bp3-icon-trending-up::before{
  content:"\uE719"; }

.bp3-icon-truck::before{
  content:"\uE90B"; }

.bp3-icon-two-columns::before{
  content:"\uE657"; }

.bp3-icon-unarchive::before{
  content:"\uE906"; }

.bp3-icon-underline::before{
  content:"\u2381"; }

.bp3-icon-undo::before{
  content:"\u238C"; }

.bp3-icon-ungroup-objects::before{
  content:"\uE688"; }

.bp3-icon-unknown-vehicle::before{
  content:"\uE73D"; }

.bp3-icon-unlock::before{
  content:"\uE626"; }

.bp3-icon-unpin::before{
  content:"\uE650"; }

.bp3-icon-unresolve::before{
  content:"\uE679"; }

.bp3-icon-updated::before{
  content:"\uE7A7"; }

.bp3-icon-upload::before{
  content:"\uE68F"; }

.bp3-icon-user::before{
  content:"\uE627"; }

.bp3-icon-variable::before{
  content:"\uE6F5"; }

.bp3-icon-vertical-bar-chart-asc::before{
  content:"\uE75B"; }

.bp3-icon-vertical-bar-chart-desc::before{
  content:"\uE71C"; }

.bp3-icon-vertical-distribution::before{
  content:"\uE721"; }

.bp3-icon-video::before{
  content:"\uE6A0"; }

.bp3-icon-volume-down::before{
  content:"\uE6A4"; }

.bp3-icon-volume-off::before{
  content:"\uE6A3"; }

.bp3-icon-volume-up::before{
  content:"\uE6A5"; }

.bp3-icon-walk::before{
  content:"\uE79D"; }

.bp3-icon-warning-sign::before{
  content:"\uE647"; }

.bp3-icon-waterfall-chart::before{
  content:"\uE6E6"; }

.bp3-icon-widget::before{
  content:"\uE678"; }

.bp3-icon-widget-button::before{
  content:"\uE790"; }

.bp3-icon-widget-footer::before{
  content:"\uE792"; }

.bp3-icon-widget-header::before{
  content:"\uE791"; }

.bp3-icon-wrench::before{
  content:"\uE734"; }

.bp3-icon-zoom-in::before{
  content:"\uE641"; }

.bp3-icon-zoom-out::before{
  content:"\uE642"; }

.bp3-icon-zoom-to-fit::before{
  content:"\uE67B"; }
.bp3-submenu > .bp3-popover-wrapper{
  display:block; }

.bp3-submenu .bp3-popover-target{
  display:block; }
  .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{ }

.bp3-submenu.bp3-popover{
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0 5px; }
  .bp3-submenu.bp3-popover > .bp3-popover-content{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-submenu.bp3-popover, .bp3-submenu.bp3-popover.bp3-dark{
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content, .bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
.bp3-menu{
  background:#ffffff;
  border-radius:3px;
  color:#182026;
  list-style:none;
  margin:0;
  min-width:180px;
  padding:5px;
  text-align:left; }

.bp3-menu-divider{
  border-top:1px solid rgba(16, 22, 26, 0.15);
  display:block;
  margin:5px; }
  .bp3-dark .bp3-menu-divider{
    border-top-color:rgba(255, 255, 255, 0.15); }

.bp3-menu-item{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  border-radius:2px;
  color:inherit;
  line-height:20px;
  padding:5px 7px;
  text-decoration:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-menu-item > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-menu-item > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-menu-item::before,
  .bp3-menu-item > *{
    margin-right:7px; }
  .bp3-menu-item:empty::before,
  .bp3-menu-item > :last-child{
    margin-right:0; }
  .bp3-menu-item > .bp3-fill{
    word-break:break-word; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    background-color:rgba(167, 182, 194, 0.3);
    cursor:pointer;
    text-decoration:none; }
  .bp3-menu-item.bp3-disabled{
    background-color:inherit;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
  .bp3-dark .bp3-menu-item{
    color:inherit; }
    .bp3-dark .bp3-menu-item:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
      background-color:rgba(138, 155, 168, 0.15);
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-disabled{
      background-color:inherit;
      color:rgba(167, 182, 194, 0.6); }
  .bp3-menu-item.bp3-intent-primary{
    color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-primary::before, .bp3-menu-item.bp3-intent-primary::after,
    .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
      color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary.bp3-active{
      background-color:#137cbd; }
    .bp3-menu-item.bp3-intent-primary:active{
      background-color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary:active, .bp3-menu-item.bp3-intent-primary:active::before, .bp3-menu-item.bp3-intent-primary:active::after,
    .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-menu-item.bp3-intent-primary.bp3-active::after,
    .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-success{
    color:#0d8050; }
    .bp3-menu-item.bp3-intent-success .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-success::before, .bp3-menu-item.bp3-intent-success::after,
    .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
      color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success.bp3-active{
      background-color:#0f9960; }
    .bp3-menu-item.bp3-intent-success:active{
      background-color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-menu-item.bp3-intent-success:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success:active, .bp3-menu-item.bp3-intent-success:active::before, .bp3-menu-item.bp3-intent-success:active::after,
    .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-menu-item.bp3-intent-success.bp3-active::after,
    .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-warning{
    color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-warning::before, .bp3-menu-item.bp3-intent-warning::after,
    .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
      color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning.bp3-active{
      background-color:#d9822b; }
    .bp3-menu-item.bp3-intent-warning:active{
      background-color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning:active, .bp3-menu-item.bp3-intent-warning:active::before, .bp3-menu-item.bp3-intent-warning:active::after,
    .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-menu-item.bp3-intent-warning.bp3-active::after,
    .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-danger{
    color:#c23030; }
    .bp3-menu-item.bp3-intent-danger .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-danger::before, .bp3-menu-item.bp3-intent-danger::after,
    .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
      color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger.bp3-active{
      background-color:#db3737; }
    .bp3-menu-item.bp3-intent-danger:active{
      background-color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger:active, .bp3-menu-item.bp3-intent-danger:active::before, .bp3-menu-item.bp3-intent-danger:active::after,
    .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-menu-item.bp3-intent-danger.bp3-active::after,
    .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item::before{
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-style:normal;
    font-weight:400;
    line-height:1;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    margin-right:7px; }
  .bp3-menu-item::before,
  .bp3-menu-item > .bp3-icon{
    color:#5c7080;
    margin-top:2px; }
  .bp3-menu-item .bp3-menu-item-label{
    color:#5c7080; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    color:inherit; }
  .bp3-menu-item.bp3-active, .bp3-menu-item:active{
    background-color:rgba(115, 134, 148, 0.3); }
  .bp3-menu-item.bp3-disabled{
    background-color:inherit !important;
    color:rgba(92, 112, 128, 0.6) !important;
    cursor:not-allowed !important;
    outline:none !important; }
    .bp3-menu-item.bp3-disabled::before,
    .bp3-menu-item.bp3-disabled > .bp3-icon,
    .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-large .bp3-menu-item{
    font-size:16px;
    line-height:22px;
    padding:9px 7px; }
    .bp3-large .bp3-menu-item .bp3-icon{
      margin-top:3px; }
    .bp3-large .bp3-menu-item::before{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      margin-right:10px;
      margin-top:1px; }

button.bp3-menu-item{
  background:none;
  border:none;
  text-align:left;
  width:100%; }
.bp3-menu-header{
  border-top:1px solid rgba(16, 22, 26, 0.15);
  display:block;
  margin:5px;
  cursor:default;
  padding-left:2px; }
  .bp3-dark .bp3-menu-header{
    border-top-color:rgba(255, 255, 255, 0.15); }
  .bp3-menu-header:first-of-type{
    border-top:none; }
  .bp3-menu-header > h6{
    color:#182026;
    font-weight:600;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    line-height:17px;
    margin:0;
    padding:10px 7px 0 1px; }
    .bp3-dark .bp3-menu-header > h6{
      color:#f5f8fa; }
  .bp3-menu-header:first-of-type > h6{
    padding-top:0; }
  .bp3-large .bp3-menu-header > h6{
    font-size:18px;
    padding-bottom:5px;
    padding-top:15px; }
  .bp3-large .bp3-menu-header:first-of-type > h6{
    padding-top:0; }

.bp3-dark .bp3-menu{
  background:#30404d;
  color:#f5f8fa; }

.bp3-dark .bp3-menu-item{ }
  .bp3-dark .bp3-menu-item.bp3-intent-primary{
    color:#48aff0; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary::before, .bp3-dark .bp3-menu-item.bp3-intent-primary::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
      color:#48aff0; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active{
      background-color:#137cbd; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary:active{
      background-color:#106ba3; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary:active, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item.bp3-intent-success{
    color:#3dcc91; }
    .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-success::before, .bp3-dark .bp3-menu-item.bp3-intent-success::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
      color:#3dcc91; }
    .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active{
      background-color:#0f9960; }
    .bp3-dark .bp3-menu-item.bp3-intent-success:active{
      background-color:#0d8050; }
    .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success:active, .bp3-dark .bp3-menu-item.bp3-intent-success:active::before, .bp3-dark .bp3-menu-item.bp3-intent-success:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning{
    color:#ffb366; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning::before, .bp3-dark .bp3-menu-item.bp3-intent-warning::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
      color:#ffb366; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active{
      background-color:#d9822b; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning:active{
      background-color:#bf7326; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning:active, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger{
    color:#ff7373; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger::before, .bp3-dark .bp3-menu-item.bp3-intent-danger::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
      color:#ff7373; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active{
      background-color:#db3737; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger:active{
      background-color:#c23030; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger:active, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item::before,
  .bp3-dark .bp3-menu-item > .bp3-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-menu-item .bp3-menu-item-label{
    color:#a7b6c2; }
  .bp3-dark .bp3-menu-item.bp3-active, .bp3-dark .bp3-menu-item:active{
    background-color:rgba(138, 155, 168, 0.3); }
  .bp3-dark .bp3-menu-item.bp3-disabled{
    color:rgba(167, 182, 194, 0.6) !important; }
    .bp3-dark .bp3-menu-item.bp3-disabled::before,
    .bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,
    .bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
      color:rgba(167, 182, 194, 0.6) !important; }

.bp3-dark .bp3-menu-divider,
.bp3-dark .bp3-menu-header{
  border-color:rgba(255, 255, 255, 0.15); }

.bp3-dark .bp3-menu-header > h6{
  color:#f5f8fa; }

.bp3-label .bp3-menu{
  margin-top:5px; }
.bp3-navbar{
  background-color:#ffffff;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  height:50px;
  padding:0 15px;
  position:relative;
  width:100%;
  z-index:10; }
  .bp3-navbar.bp3-dark,
  .bp3-dark .bp3-navbar{
    background-color:#394b59; }
  .bp3-navbar.bp3-dark{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-navbar{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-navbar.bp3-fixed-top{
    left:0;
    position:fixed;
    right:0;
    top:0; }

.bp3-navbar-heading{
  font-size:16px;
  margin-right:15px; }

.bp3-navbar-group{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:50px; }
  .bp3-navbar-group.bp3-align-left{
    float:left; }
  .bp3-navbar-group.bp3-align-right{
    float:right; }

.bp3-navbar-divider{
  border-left:1px solid rgba(16, 22, 26, 0.15);
  height:20px;
  margin:0 10px; }
  .bp3-dark .bp3-navbar-divider{
    border-left-color:rgba(255, 255, 255, 0.15); }
.bp3-non-ideal-state{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  height:100%;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  text-align:center;
  width:100%; }
  .bp3-non-ideal-state > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-non-ideal-state > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-non-ideal-state::before,
  .bp3-non-ideal-state > *{
    margin-bottom:20px; }
  .bp3-non-ideal-state:empty::before,
  .bp3-non-ideal-state > :last-child{
    margin-bottom:0; }
  .bp3-non-ideal-state > *{
    max-width:400px; }

.bp3-non-ideal-state-visual{
  color:rgba(92, 112, 128, 0.6);
  font-size:60px; }
  .bp3-dark .bp3-non-ideal-state-visual{
    color:rgba(167, 182, 194, 0.6); }

.bp3-overflow-list{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  min-width:0; }

.bp3-overflow-list-spacer{
  -ms-flex-negative:1;
      flex-shrink:1;
  width:1px; }

body.bp3-overlay-open{
  overflow:hidden; }

.bp3-overlay{
  bottom:0;
  left:0;
  position:static;
  right:0;
  top:0;
  z-index:20; }
  .bp3-overlay:not(.bp3-overlay-open){
    pointer-events:none; }
  .bp3-overlay.bp3-overlay-container{
    overflow:hidden;
    position:fixed; }
    .bp3-overlay.bp3-overlay-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-scroll-container{
    overflow:auto;
    position:fixed; }
    .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-inline{
    display:inline;
    overflow:visible; }

.bp3-overlay-content{
  position:fixed;
  z-index:20; }
  .bp3-overlay-inline .bp3-overlay-content,
  .bp3-overlay-scroll-container .bp3-overlay-content{
    position:absolute; }

.bp3-overlay-backdrop{
  bottom:0;
  left:0;
  position:fixed;
  right:0;
  top:0;
  opacity:1;
  background-color:rgba(16, 22, 26, 0.7);
  overflow:auto;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none;
  z-index:20; }
  .bp3-overlay-backdrop.bp3-overlay-enter, .bp3-overlay-backdrop.bp3-overlay-appear{
    opacity:0; }
  .bp3-overlay-backdrop.bp3-overlay-enter-active, .bp3-overlay-backdrop.bp3-overlay-appear-active{
    opacity:1;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-overlay-backdrop.bp3-overlay-exit{
    opacity:1; }
  .bp3-overlay-backdrop.bp3-overlay-exit-active{
    opacity:0;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-overlay-backdrop:focus{
    outline:none; }
  .bp3-overlay-inline .bp3-overlay-backdrop{
    position:absolute; }
.bp3-panel-stack{
  overflow:hidden;
  position:relative; }

.bp3-panel-stack-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
          box-shadow:0 1px rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-negative:0;
      flex-shrink:0;
  height:30px;
  z-index:1; }
  .bp3-dark .bp3-panel-stack-header{
    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 1px rgba(255, 255, 255, 0.15); }
  .bp3-panel-stack-header > span{
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1; }
  .bp3-panel-stack-header .bp3-heading{
    margin:0 5px; }

.bp3-button.bp3-panel-stack-header-back{
  margin-left:5px;
  padding-left:0;
  white-space:nowrap; }
  .bp3-button.bp3-panel-stack-header-back .bp3-icon{
    margin:0 2px; }

.bp3-panel-stack-view{
  bottom:0;
  left:0;
  position:absolute;
  right:0;
  top:0;
  background-color:#ffffff;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin-right:-1px;
  overflow-y:auto;
  z-index:1; }
  .bp3-dark .bp3-panel-stack-view{
    background-color:#30404d; }
  .bp3-panel-stack-view:nth-last-child(n + 4){
    display:none; }

.bp3-panel-stack-push .bp3-panel-stack-enter, .bp3-panel-stack-push .bp3-panel-stack-appear{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0; }

.bp3-panel-stack-push .bp3-panel-stack-enter-active, .bp3-panel-stack-push .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack-push .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-push .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack-pop .bp3-panel-stack-enter, .bp3-panel-stack-pop .bp3-panel-stack-appear{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0; }

.bp3-panel-stack-pop .bp3-panel-stack-enter-active, .bp3-panel-stack-pop .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack-pop .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-pop .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }
.bp3-panel-stack2{
  overflow:hidden;
  position:relative; }

.bp3-panel-stack2-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
          box-shadow:0 1px rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-negative:0;
      flex-shrink:0;
  height:30px;
  z-index:1; }
  .bp3-dark .bp3-panel-stack2-header{
    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 1px rgba(255, 255, 255, 0.15); }
  .bp3-panel-stack2-header > span{
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1; }
  .bp3-panel-stack2-header .bp3-heading{
    margin:0 5px; }

.bp3-button.bp3-panel-stack2-header-back{
  margin-left:5px;
  padding-left:0;
  white-space:nowrap; }
  .bp3-button.bp3-panel-stack2-header-back .bp3-icon{
    margin:0 2px; }

.bp3-panel-stack2-view{
  bottom:0;
  left:0;
  position:absolute;
  right:0;
  top:0;
  background-color:#ffffff;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin-right:-1px;
  overflow-y:auto;
  z-index:1; }
  .bp3-dark .bp3-panel-stack2-view{
    background-color:#30404d; }
  .bp3-panel-stack2-view:nth-last-child(n + 4){
    display:none; }

.bp3-panel-stack2-push .bp3-panel-stack2-enter, .bp3-panel-stack2-push .bp3-panel-stack2-appear{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0; }

.bp3-panel-stack2-push .bp3-panel-stack2-enter-active, .bp3-panel-stack2-push .bp3-panel-stack2-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack2-push .bp3-panel-stack2-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack2-push .bp3-panel-stack2-exit-active{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack2-pop .bp3-panel-stack2-enter, .bp3-panel-stack2-pop .bp3-panel-stack2-appear{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0; }

.bp3-panel-stack2-pop .bp3-panel-stack2-enter-active, .bp3-panel-stack2-pop .bp3-panel-stack2-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack2-pop .bp3-panel-stack2-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack2-pop .bp3-panel-stack2-exit-active{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }
.bp3-popover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1);
  border-radius:3px;
  display:inline-block;
  z-index:20; }
  .bp3-popover .bp3-popover-arrow{
    height:30px;
    position:absolute;
    width:30px; }
    .bp3-popover .bp3-popover-arrow::before{
      height:20px;
      margin:5px;
      width:20px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover{
    margin-bottom:17px;
    margin-top:-17px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
      bottom:-11px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover{
    margin-left:17px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
      left:-11px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover{
    margin-top:17px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
      top:-11px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover{
    margin-left:-17px;
    margin-right:17px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
      right:-11px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
    top:-0.3934px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
    right:-0.3934px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
    left:-0.3934px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
    bottom:-0.3934px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-popover .bp3-popover-content{
    background:#ffffff;
    color:inherit; }
  .bp3-popover .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-popover .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-popover .bp3-popover-arrow-fill{
    fill:#ffffff; }
  .bp3-popover-enter > .bp3-popover, .bp3-popover-appear > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3); }
  .bp3-popover-enter-active > .bp3-popover, .bp3-popover-appear-active > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-popover-exit > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-popover .bp3-popover-content{
    border-radius:3px;
    position:relative; }
  .bp3-popover.bp3-popover-content-sizing .bp3-popover-content{
    max-width:350px;
    padding:20px; }
  .bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing{
    width:350px; }
  .bp3-popover.bp3-minimal{
    margin:0 !important; }
    .bp3-popover.bp3-minimal .bp3-popover-arrow{
      display:none; }
    .bp3-popover.bp3-minimal.bp3-popover{
      -webkit-transform:scale(1);
              transform:scale(1); }
      .bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-popover.bp3-dark,
  .bp3-dark .bp3-popover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-popover .bp3-popover-content{
      background:#30404d;
      color:inherit; }
    .bp3-popover.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-popover .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-popover .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-popover.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-popover .bp3-popover-arrow-fill{
      fill:#30404d; }

.bp3-popover-arrow::before{
  border-radius:2px;
  content:"";
  display:block;
  position:absolute;
  -webkit-transform:rotate(45deg);
          transform:rotate(45deg); }

.bp3-tether-pinned .bp3-popover-arrow{
  display:none; }

.bp3-popover-backdrop{
  background:rgba(255, 255, 255, 0); }

.bp3-transition-container{
  opacity:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  z-index:20; }
  .bp3-transition-container.bp3-popover-enter, .bp3-transition-container.bp3-popover-appear{
    opacity:0; }
  .bp3-transition-container.bp3-popover-enter-active, .bp3-transition-container.bp3-popover-appear-active{
    opacity:1;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-transition-container.bp3-popover-exit{
    opacity:1; }
  .bp3-transition-container.bp3-popover-exit-active{
    opacity:0;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-transition-container:focus{
    outline:none; }
  .bp3-transition-container.bp3-popover-leave .bp3-popover-content{
    pointer-events:none; }
  .bp3-transition-container[data-x-out-of-boundaries]{
    display:none; }

span.bp3-popover-target{
  display:inline-block; }

.bp3-popover-wrapper.bp3-fill{
  width:100%; }

.bp3-portal{
  left:0;
  position:absolute;
  right:0;
  top:0; }
@-webkit-keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }
@keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }

.bp3-progress-bar{
  background:rgba(92, 112, 128, 0.2);
  border-radius:40px;
  display:block;
  height:8px;
  overflow:hidden;
  position:relative;
  width:100%; }
  .bp3-progress-bar .bp3-progress-meter{
    background:linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%);
    background-color:rgba(92, 112, 128, 0.8);
    background-size:30px 30px;
    border-radius:40px;
    height:100%;
    position:absolute;
    -webkit-transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    width:100%; }
  .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter{
    animation:linear-progress-bar-stripes 300ms linear infinite reverse; }
  .bp3-progress-bar.bp3-no-stripes .bp3-progress-meter{
    background-image:none; }

.bp3-dark .bp3-progress-bar{
  background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-progress-bar .bp3-progress-meter{
    background-color:#8a9ba8; }

.bp3-progress-bar.bp3-intent-primary .bp3-progress-meter{
  background-color:#137cbd; }

.bp3-progress-bar.bp3-intent-success .bp3-progress-meter{
  background-color:#0f9960; }

.bp3-progress-bar.bp3-intent-warning .bp3-progress-meter{
  background-color:#d9822b; }

.bp3-progress-bar.bp3-intent-danger .bp3-progress-meter{
  background-color:#db3737; }
@-webkit-keyframes skeleton-glow{
  from{
    background:rgba(206, 217, 224, 0.2);
    border-color:rgba(206, 217, 224, 0.2); }
  to{
    background:rgba(92, 112, 128, 0.2);
    border-color:rgba(92, 112, 128, 0.2); } }
@keyframes skeleton-glow{
  from{
    background:rgba(206, 217, 224, 0.2);
    border-color:rgba(206, 217, 224, 0.2); }
  to{
    background:rgba(92, 112, 128, 0.2);
    border-color:rgba(92, 112, 128, 0.2); } }
.bp3-skeleton{
  -webkit-animation:1000ms linear infinite alternate skeleton-glow;
          animation:1000ms linear infinite alternate skeleton-glow;
  background:rgba(206, 217, 224, 0.2);
  background-clip:padding-box !important;
  border-color:rgba(206, 217, 224, 0.2) !important;
  border-radius:2px;
  -webkit-box-shadow:none !important;
          box-shadow:none !important;
  color:transparent !important;
  cursor:default;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-skeleton::before, .bp3-skeleton::after,
  .bp3-skeleton *{
    visibility:hidden !important; }
.bp3-slider{
  height:40px;
  min-width:150px;
  width:100%;
  cursor:default;
  outline:none;
  position:relative;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-slider:hover{
    cursor:pointer; }
  .bp3-slider:active{
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-slider.bp3-disabled{
    cursor:not-allowed;
    opacity:0.5; }
  .bp3-slider.bp3-slider-unlabeled{
    height:16px; }

.bp3-slider-track,
.bp3-slider-progress{
  height:6px;
  left:0;
  right:0;
  top:5px;
  position:absolute; }

.bp3-slider-track{
  border-radius:3px;
  overflow:hidden; }

.bp3-slider-progress{
  background:rgba(92, 112, 128, 0.2); }
  .bp3-dark .bp3-slider-progress{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-slider-progress.bp3-intent-primary{
    background-color:#137cbd; }
  .bp3-slider-progress.bp3-intent-success{
    background-color:#0f9960; }
  .bp3-slider-progress.bp3-intent-warning{
    background-color:#d9822b; }
  .bp3-slider-progress.bp3-intent-danger{
    background-color:#db3737; }

.bp3-slider-handle{
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  color:#182026;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
  cursor:pointer;
  height:16px;
  left:0;
  position:absolute;
  top:0;
  width:16px; }
  .bp3-slider-handle:hover{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
  .bp3-slider-handle:active, .bp3-slider-handle.bp3-active{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-slider-handle:disabled, .bp3-slider-handle.bp3-disabled{
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    outline:none; }
    .bp3-slider-handle:disabled.bp3-active, .bp3-slider-handle:disabled.bp3-active:hover, .bp3-slider-handle.bp3-disabled.bp3-active, .bp3-slider-handle.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }
  .bp3-slider-handle:focus{
    z-index:1; }
  .bp3-slider-handle:hover{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    cursor:-webkit-grab;
    cursor:grab;
    z-index:2; }
  .bp3-slider-handle.bp3-active{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-disabled .bp3-slider-handle{
    background:#bfccd6;
    -webkit-box-shadow:none;
            box-shadow:none;
    pointer-events:none; }
  .bp3-dark .bp3-slider-handle{
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover, .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover{
      background-color:#30404d;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      background-color:#202b33;
      background-image:none;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-slider-handle:disabled, .bp3-dark .bp3-slider-handle.bp3-disabled{
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-slider-handle:disabled.bp3-active, .bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-slider-handle, .bp3-dark .bp3-slider-handle:hover{
      background-color:#394b59; }
    .bp3-dark .bp3-slider-handle.bp3-active{
      background-color:#293742; }
  .bp3-dark .bp3-disabled .bp3-slider-handle{
    background:#5c7080;
    border-color:#5c7080;
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-slider-handle .bp3-slider-label{
    background:#394b59;
    border-radius:3px;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
    color:#f5f8fa;
    margin-left:8px; }
    .bp3-dark .bp3-slider-handle .bp3-slider-label{
      background:#e1e8ed;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
      color:#394b59; }
    .bp3-disabled .bp3-slider-handle .bp3-slider-label{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-slider-handle.bp3-start, .bp3-slider-handle.bp3-end{
    width:8px; }
  .bp3-slider-handle.bp3-start{
    border-bottom-right-radius:0;
    border-top-right-radius:0; }
  .bp3-slider-handle.bp3-end{
    border-bottom-left-radius:0;
    border-top-left-radius:0;
    margin-left:8px; }
    .bp3-slider-handle.bp3-end .bp3-slider-label{
      margin-left:0; }

.bp3-slider-label{
  -webkit-transform:translate(-50%, 20px);
          transform:translate(-50%, 20px);
  display:inline-block;
  font-size:12px;
  line-height:1;
  padding:2px 5px;
  position:absolute;
  vertical-align:top; }

.bp3-slider.bp3-vertical{
  height:150px;
  min-width:40px;
  width:40px; }
  .bp3-slider.bp3-vertical .bp3-slider-track,
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    bottom:0;
    height:auto;
    left:5px;
    top:0;
    width:6px; }
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    top:auto; }
  .bp3-slider.bp3-vertical .bp3-slider-label{
    -webkit-transform:translate(20px, 50%);
            transform:translate(20px, 50%); }
  .bp3-slider.bp3-vertical .bp3-slider-handle{
    top:auto; }
    .bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label{
      margin-left:0;
      margin-top:-8px; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end, .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      height:8px;
      margin-left:0;
      width:16px; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      border-bottom-right-radius:3px;
      border-top-left-radius:0; }
      .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label{
        -webkit-transform:translate(20px);
                transform:translate(20px); }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end{
      border-bottom-left-radius:0;
      border-bottom-right-radius:0;
      border-top-left-radius:3px;
      margin-bottom:8px; }

@-webkit-keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

@keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

.bp3-spinner{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  overflow:visible;
  vertical-align:middle; }
  .bp3-spinner svg{
    display:block; }
  .bp3-spinner path{
    fill-opacity:0; }
  .bp3-spinner .bp3-spinner-head{
    stroke:rgba(92, 112, 128, 0.8);
    stroke-linecap:round;
    -webkit-transform-origin:center;
            transform-origin:center;
    -webkit-transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-spinner .bp3-spinner-track{
    stroke:rgba(92, 112, 128, 0.2); }

.bp3-spinner-animation{
  -webkit-animation:pt-spinner-animation 500ms linear infinite;
          animation:pt-spinner-animation 500ms linear infinite; }
  .bp3-no-spin > .bp3-spinner-animation{
    -webkit-animation:none;
            animation:none; }

.bp3-dark .bp3-spinner .bp3-spinner-head{
  stroke:#8a9ba8; }

.bp3-dark .bp3-spinner .bp3-spinner-track{
  stroke:rgba(16, 22, 26, 0.5); }

.bp3-spinner.bp3-intent-primary .bp3-spinner-head{
  stroke:#137cbd; }

.bp3-spinner.bp3-intent-success .bp3-spinner-head{
  stroke:#0f9960; }

.bp3-spinner.bp3-intent-warning .bp3-spinner-head{
  stroke:#d9822b; }

.bp3-spinner.bp3-intent-danger .bp3-spinner-head{
  stroke:#db3737; }
.bp3-tabs.bp3-vertical{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-tabs.bp3-vertical > .bp3-tab-list{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab{
      border-radius:3px;
      padding:0 10px;
      width:100%; }
      .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected="true"]{
        background-color:rgba(19, 124, 189, 0.2);
        -webkit-box-shadow:none;
                box-shadow:none; }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator{
      background-color:rgba(19, 124, 189, 0.2);
      border-radius:3px;
      bottom:0;
      height:auto;
      left:0;
      right:0;
      top:0; }
  .bp3-tabs.bp3-vertical > .bp3-tab-panel{
    margin-top:0;
    padding-left:20px; }

.bp3-tab-list{
  -webkit-box-align:end;
      -ms-flex-align:end;
          align-items:flex-end;
  border:none;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  list-style:none;
  margin:0;
  padding:0;
  position:relative; }
  .bp3-tab-list > *:not(:last-child){
    margin-right:20px; }

.bp3-tab{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  color:#182026;
  cursor:pointer;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  font-size:14px;
  line-height:30px;
  max-width:100%;
  position:relative;
  vertical-align:top; }
  .bp3-tab a{
    color:inherit;
    display:block;
    text-decoration:none; }
  .bp3-tab-indicator-wrapper ~ .bp3-tab{
    background-color:transparent !important;
    -webkit-box-shadow:none !important;
            box-shadow:none !important; }
  .bp3-tab[aria-disabled="true"]{
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
  .bp3-tab[aria-selected="true"]{
    border-radius:0;
    -webkit-box-shadow:inset 0 -3px 0 #106ba3;
            box-shadow:inset 0 -3px 0 #106ba3; }
  .bp3-tab[aria-selected="true"], .bp3-tab:not([aria-disabled="true"]):hover{
    color:#106ba3; }
  .bp3-tab:focus{
    -moz-outline-radius:0; }
  .bp3-large > .bp3-tab{
    font-size:16px;
    line-height:40px; }

.bp3-tab-panel{
  margin-top:20px; }
  .bp3-tab-panel[aria-hidden="true"]{
    display:none; }

.bp3-tab-indicator-wrapper{
  left:0;
  pointer-events:none;
  position:absolute;
  top:0;
  -webkit-transform:translateX(0), translateY(0);
          transform:translateX(0), translateY(0);
  -webkit-transition:height, width, -webkit-transform;
  transition:height, width, -webkit-transform;
  transition:height, transform, width;
  transition:height, transform, width, -webkit-transform;
  -webkit-transition-duration:200ms;
          transition-duration:200ms;
  -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
          transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tab-indicator-wrapper .bp3-tab-indicator{
    background-color:#106ba3;
    bottom:0;
    height:3px;
    left:0;
    position:absolute;
    right:0; }
  .bp3-tab-indicator-wrapper.bp3-no-animation{
    -webkit-transition:none;
    transition:none; }

.bp3-dark .bp3-tab{
  color:#f5f8fa; }
  .bp3-dark .bp3-tab[aria-disabled="true"]{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tab[aria-selected="true"]{
    -webkit-box-shadow:inset 0 -3px 0 #48aff0;
            box-shadow:inset 0 -3px 0 #48aff0; }
  .bp3-dark .bp3-tab[aria-selected="true"], .bp3-dark .bp3-tab:not([aria-disabled="true"]):hover{
    color:#48aff0; }

.bp3-dark .bp3-tab-indicator{
  background-color:#48aff0; }

.bp3-flex-expander{
  -webkit-box-flex:1;
      -ms-flex:1 1;
          flex:1 1; }
.bp3-tag{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background-color:#5c7080;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:none;
          box-shadow:none;
  color:#f5f8fa;
  font-size:12px;
  line-height:16px;
  max-width:100%;
  min-height:20px;
  min-width:20px;
  padding:2px 6px;
  position:relative; }
  .bp3-tag.bp3-interactive{
    cursor:pointer; }
    .bp3-tag.bp3-interactive:hover{
      background-color:rgba(92, 112, 128, 0.85); }
    .bp3-tag.bp3-interactive.bp3-active, .bp3-tag.bp3-interactive:active{
      background-color:rgba(92, 112, 128, 0.7); }
  .bp3-tag > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag::before,
  .bp3-tag > *{
    margin-right:4px; }
  .bp3-tag:empty::before,
  .bp3-tag > :last-child{
    margin-right:0; }
  .bp3-tag:focus{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:0;
    -moz-outline-radius:6px; }
  .bp3-tag.bp3-round{
    border-radius:30px;
    padding-left:8px;
    padding-right:8px; }
  .bp3-dark .bp3-tag{
    background-color:#bfccd6;
    color:#182026; }
    .bp3-dark .bp3-tag.bp3-interactive{
      cursor:pointer; }
      .bp3-dark .bp3-tag.bp3-interactive:hover{
        background-color:rgba(191, 204, 214, 0.85); }
      .bp3-dark .bp3-tag.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-interactive:active{
        background-color:rgba(191, 204, 214, 0.7); }
    .bp3-dark .bp3-tag > .bp3-icon, .bp3-dark .bp3-tag .bp3-icon-standard, .bp3-dark .bp3-tag .bp3-icon-large{
      fill:currentColor; }
  .bp3-tag > .bp3-icon, .bp3-tag .bp3-icon-standard, .bp3-tag .bp3-icon-large{
    fill:#ffffff; }
  .bp3-tag.bp3-large,
  .bp3-large .bp3-tag{
    font-size:14px;
    line-height:20px;
    min-height:30px;
    min-width:30px;
    padding:5px 10px; }
    .bp3-tag.bp3-large::before,
    .bp3-tag.bp3-large > *,
    .bp3-large .bp3-tag::before,
    .bp3-large .bp3-tag > *{
      margin-right:7px; }
    .bp3-tag.bp3-large:empty::before,
    .bp3-tag.bp3-large > :last-child,
    .bp3-large .bp3-tag:empty::before,
    .bp3-large .bp3-tag > :last-child{
      margin-right:0; }
    .bp3-tag.bp3-large.bp3-round,
    .bp3-large .bp3-tag.bp3-round{
      padding-left:12px;
      padding-right:12px; }
  .bp3-tag.bp3-intent-primary{
    background:#137cbd;
    color:#ffffff; }
    .bp3-tag.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.85); }
      .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.7); }
  .bp3-tag.bp3-intent-success{
    background:#0f9960;
    color:#ffffff; }
    .bp3-tag.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.85); }
      .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.7); }
  .bp3-tag.bp3-intent-warning{
    background:#d9822b;
    color:#ffffff; }
    .bp3-tag.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.85); }
      .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.7); }
  .bp3-tag.bp3-intent-danger{
    background:#db3737;
    color:#ffffff; }
    .bp3-tag.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.85); }
      .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.7); }
  .bp3-tag.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-tag.bp3-minimal > .bp3-icon, .bp3-tag.bp3-minimal .bp3-icon-standard, .bp3-tag.bp3-minimal .bp3-icon-large{
    fill:#5c7080; }
  .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
    background-color:rgba(138, 155, 168, 0.2);
    color:#182026; }
    .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
        background-color:rgba(92, 112, 128, 0.3); }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
        background-color:rgba(92, 112, 128, 0.4); }
    .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
      color:#f5f8fa; }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
          background-color:rgba(191, 204, 214, 0.3); }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
          background-color:rgba(191, 204, 214, 0.4); }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) > .bp3-icon, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-large{
        fill:#a7b6c2; }
  .bp3-tag.bp3-minimal.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15);
    color:#106ba3; }
    .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large{
      fill:#137cbd; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25);
      color:#48aff0; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
          background-color:rgba(19, 124, 189, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
          background-color:rgba(19, 124, 189, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15);
    color:#0d8050; }
    .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large{
      fill:#0f9960; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25);
      color:#3dcc91; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
          background-color:rgba(15, 153, 96, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
          background-color:rgba(15, 153, 96, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15);
    color:#bf7326; }
    .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large{
      fill:#d9822b; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25);
      color:#ffb366; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
          background-color:rgba(217, 130, 43, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
          background-color:rgba(217, 130, 43, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15);
    color:#c23030; }
    .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large{
      fill:#db3737; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25);
      color:#ff7373; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
          background-color:rgba(219, 55, 55, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
          background-color:rgba(219, 55, 55, 0.45); }

.bp3-tag-remove{
  background:none;
  border:none;
  color:inherit;
  cursor:pointer;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin-bottom:-2px;
  margin-right:-6px !important;
  margin-top:-2px;
  opacity:0.5;
  padding:2px;
  padding-left:0; }
  .bp3-tag-remove:hover{
    background:none;
    opacity:0.8;
    text-decoration:none; }
  .bp3-tag-remove:active{
    opacity:1; }
  .bp3-tag-remove:empty::before{
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-style:normal;
    font-weight:400;
    line-height:1;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    content:"\uE6D7"; }
  .bp3-large .bp3-tag-remove{
    margin-right:-10px !important;
    padding:0 5px 0 0; }
    .bp3-large .bp3-tag-remove:empty::before{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1; }
.bp3-tag-input{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  cursor:text;
  height:auto;
  line-height:inherit;
  min-height:30px;
  padding-left:5px;
  padding-right:0; }
  .bp3-tag-input > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag-input > .bp3-tag-input-values{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag-input .bp3-tag-input-icon{
    color:#5c7080;
    margin-left:2px;
    margin-right:7px;
    margin-top:7px; }
  .bp3-tag-input .bp3-tag-input-values{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -ms-flex-item-align:stretch;
        align-self:stretch;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    margin-right:7px;
    margin-top:5px;
    min-width:0; }
    .bp3-tag-input .bp3-tag-input-values > *{
      -webkit-box-flex:0;
          -ms-flex-positive:0;
              flex-grow:0;
      -ms-flex-negative:0;
          flex-shrink:0; }
    .bp3-tag-input .bp3-tag-input-values > .bp3-fill{
      -webkit-box-flex:1;
          -ms-flex-positive:1;
              flex-grow:1;
      -ms-flex-negative:1;
          flex-shrink:1; }
    .bp3-tag-input .bp3-tag-input-values::before,
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-right:5px; }
    .bp3-tag-input .bp3-tag-input-values:empty::before,
    .bp3-tag-input .bp3-tag-input-values > :last-child{
      margin-right:0; }
    .bp3-tag-input .bp3-tag-input-values:first-child .bp3-input-ghost:first-child{
      padding-left:5px; }
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-bottom:5px; }
  .bp3-tag-input .bp3-tag{
    overflow-wrap:break-word; }
    .bp3-tag-input .bp3-tag.bp3-active{
      outline:rgba(19, 124, 189, 0.6) auto 2px;
      outline-offset:0;
      -moz-outline-radius:6px; }
  .bp3-tag-input .bp3-input-ghost{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    line-height:20px;
    width:80px; }
    .bp3-tag-input .bp3-input-ghost:disabled, .bp3-tag-input .bp3-input-ghost.bp3-disabled{
      cursor:not-allowed; }
  .bp3-tag-input .bp3-button,
  .bp3-tag-input .bp3-spinner{
    margin:3px;
    margin-left:0; }
  .bp3-tag-input .bp3-button{
    min-height:24px;
    min-width:24px;
    padding:0 7px; }
  .bp3-tag-input.bp3-large{
    height:auto;
    min-height:40px; }
    .bp3-tag-input.bp3-large::before,
    .bp3-tag-input.bp3-large > *{
      margin-right:10px; }
    .bp3-tag-input.bp3-large:empty::before,
    .bp3-tag-input.bp3-large > :last-child{
      margin-right:0; }
    .bp3-tag-input.bp3-large .bp3-tag-input-icon{
      margin-left:5px;
      margin-top:10px; }
    .bp3-tag-input.bp3-large .bp3-input-ghost{
      line-height:30px; }
    .bp3-tag-input.bp3-large .bp3-button{
      min-height:30px;
      min-width:30px;
      padding:5px 10px;
      margin:5px;
      margin-left:0; }
    .bp3-tag-input.bp3-large .bp3-spinner{
      margin:8px;
      margin-left:0; }
  .bp3-tag-input.bp3-active{
    background-color:#ffffff;
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-tag-input .bp3-tag-input-icon, .bp3-tag-input.bp3-dark .bp3-tag-input-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-tag-input .bp3-input-ghost, .bp3-tag-input.bp3-dark .bp3-input-ghost{
    color:#f5f8fa; }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-moz-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder{
      color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tag-input.bp3-active, .bp3-tag-input.bp3-dark.bp3-active{
    background-color:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-primary, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-success, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-warning, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-danger, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-input-ghost{
  background:none;
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0; }
  .bp3-input-ghost::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost:focus{
    outline:none !important; }
.bp3-toast{
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  background-color:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:20px 0 0;
  max-width:500px;
  min-width:300px;
  pointer-events:all;
  position:relative !important; }
  .bp3-toast.bp3-toast-enter, .bp3-toast.bp3-toast-appear{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active, .bp3-toast.bp3-toast-appear-active{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-toast.bp3-toast-enter ~ .bp3-toast, .bp3-toast.bp3-toast-appear ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active ~ .bp3-toast, .bp3-toast.bp3-toast-appear-active ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-toast.bp3-toast-exit{
    opacity:1;
    -webkit-filter:blur(0);
            filter:blur(0); }
  .bp3-toast.bp3-toast-exit-active{
    opacity:0;
    -webkit-filter:blur(10px);
            filter:blur(10px);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:opacity, filter;
    transition-property:opacity, filter, -webkit-filter;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-toast.bp3-toast-exit ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0); }
  .bp3-toast.bp3-toast-exit-active ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px);
    -webkit-transition-delay:50ms;
            transition-delay:50ms;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-toast .bp3-button-group{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    padding:5px;
    padding-left:0; }
  .bp3-toast > .bp3-icon{
    color:#5c7080;
    margin:12px;
    margin-right:0; }
  .bp3-toast.bp3-dark,
  .bp3-dark .bp3-toast{
    background-color:#394b59;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-toast.bp3-dark > .bp3-icon,
    .bp3-dark .bp3-toast > .bp3-icon{
      color:#a7b6c2; }
  .bp3-toast[class*="bp3-intent-"] a{
    color:rgba(255, 255, 255, 0.7); }
    .bp3-toast[class*="bp3-intent-"] a:hover{
      color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] > .bp3-icon{
    color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button, .bp3-toast[class*="bp3-intent-"] .bp3-button::before,
  .bp3-toast[class*="bp3-intent-"] .bp3-button .bp3-icon, .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    color:rgba(255, 255, 255, 0.7) !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:focus{
    outline-color:rgba(255, 255, 255, 0.5); }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:hover{
    background-color:rgba(255, 255, 255, 0.15) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    background-color:rgba(255, 255, 255, 0.3) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button::after{
    background:rgba(255, 255, 255, 0.3) !important; }
  .bp3-toast.bp3-intent-primary{
    background-color:#137cbd;
    color:#ffffff; }
  .bp3-toast.bp3-intent-success{
    background-color:#0f9960;
    color:#ffffff; }
  .bp3-toast.bp3-intent-warning{
    background-color:#d9822b;
    color:#ffffff; }
  .bp3-toast.bp3-intent-danger{
    background-color:#db3737;
    color:#ffffff; }

.bp3-toast-message{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  padding:11px;
  word-break:break-word; }

.bp3-toast-container{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box !important;
  display:-ms-flexbox !important;
  display:flex !important;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  left:0;
  overflow:hidden;
  padding:0 20px 20px;
  pointer-events:none;
  right:0;
  z-index:40; }
  .bp3-toast-container.bp3-toast-container-in-portal{
    position:fixed; }
  .bp3-toast-container.bp3-toast-container-inline{
    position:absolute; }
  .bp3-toast-container.bp3-toast-container-top{
    top:0; }
  .bp3-toast-container.bp3-toast-container-bottom{
    bottom:0;
    -webkit-box-orient:vertical;
    -webkit-box-direction:reverse;
        -ms-flex-direction:column-reverse;
            flex-direction:column-reverse;
    top:auto; }
  .bp3-toast-container.bp3-toast-container-left{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
  .bp3-toast-container.bp3-toast-container-right{
    -webkit-box-align:end;
        -ms-flex-align:end;
            align-items:flex-end; }

.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast, .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active) ~ .bp3-toast,
.bp3-toast-container-bottom .bp3-toast.bp3-toast-exit-active ~ .bp3-toast,
.bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast{
  -webkit-transform:translateY(60px);
          transform:translateY(60px); }
.bp3-tooltip{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1); }
  .bp3-tooltip .bp3-popover-arrow{
    height:22px;
    position:absolute;
    width:22px; }
    .bp3-tooltip .bp3-popover-arrow::before{
      height:14px;
      margin:4px;
      width:14px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip{
    margin-bottom:11px;
    margin-top:-11px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
      bottom:-8px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip{
    margin-left:11px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
      left:-8px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip{
    margin-top:11px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
      top:-8px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip{
    margin-left:-11px;
    margin-right:11px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
      right:-8px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
    top:-0.22183px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
    right:-0.22183px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
    left:-0.22183px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
    bottom:-0.22183px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-tooltip .bp3-popover-content{
    background:#394b59;
    color:#f5f8fa; }
  .bp3-tooltip .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-tooltip .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-tooltip .bp3-popover-arrow-fill{
    fill:#394b59; }
  .bp3-popover-enter > .bp3-tooltip, .bp3-popover-appear > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8); }
  .bp3-popover-enter-active > .bp3-tooltip, .bp3-popover-appear-active > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-popover-exit > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tooltip .bp3-popover-content{
    padding:10px 12px; }
  .bp3-tooltip.bp3-dark,
  .bp3-dark .bp3-tooltip{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-tooltip .bp3-popover-content{
      background:#e1e8ed;
      color:#394b59; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill{
      fill:#e1e8ed; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-content{
    background:#137cbd;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill{
    fill:#137cbd; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-content{
    background:#0f9960;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill{
    fill:#0f9960; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-content{
    background:#d9822b;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill{
    fill:#d9822b; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-content{
    background:#db3737;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill{
    fill:#db3737; }

.bp3-tooltip-indicator{
  border-bottom:dotted 1px;
  cursor:help; }
.bp3-tree .bp3-icon, .bp3-tree .bp3-icon-standard, .bp3-tree .bp3-icon-large{
  color:#5c7080; }
  .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-tree .bp3-icon.bp3-intent-success, .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-tree-node-list{
  list-style:none;
  margin:0;
  padding-left:0; }

.bp3-tree-root{
  background-color:transparent;
  cursor:default;
  padding-left:0;
  position:relative; }

.bp3-tree-node-content-0{
  padding-left:0px; }

.bp3-tree-node-content-1{
  padding-left:23px; }

.bp3-tree-node-content-2{
  padding-left:46px; }

.bp3-tree-node-content-3{
  padding-left:69px; }

.bp3-tree-node-content-4{
  padding-left:92px; }

.bp3-tree-node-content-5{
  padding-left:115px; }

.bp3-tree-node-content-6{
  padding-left:138px; }

.bp3-tree-node-content-7{
  padding-left:161px; }

.bp3-tree-node-content-8{
  padding-left:184px; }

.bp3-tree-node-content-9{
  padding-left:207px; }

.bp3-tree-node-content-10{
  padding-left:230px; }

.bp3-tree-node-content-11{
  padding-left:253px; }

.bp3-tree-node-content-12{
  padding-left:276px; }

.bp3-tree-node-content-13{
  padding-left:299px; }

.bp3-tree-node-content-14{
  padding-left:322px; }

.bp3-tree-node-content-15{
  padding-left:345px; }

.bp3-tree-node-content-16{
  padding-left:368px; }

.bp3-tree-node-content-17{
  padding-left:391px; }

.bp3-tree-node-content-18{
  padding-left:414px; }

.bp3-tree-node-content-19{
  padding-left:437px; }

.bp3-tree-node-content-20{
  padding-left:460px; }

.bp3-tree-node-content{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:30px;
  padding-right:5px;
  width:100%; }
  .bp3-tree-node-content:hover{
    background-color:rgba(191, 204, 214, 0.4); }

.bp3-tree-node-caret,
.bp3-tree-node-caret-none{
  min-width:30px; }

.bp3-tree-node-caret{
  color:#5c7080;
  cursor:pointer;
  padding:7px;
  -webkit-transform:rotate(0deg);
          transform:rotate(0deg);
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tree-node-caret:hover{
    color:#182026; }
  .bp3-dark .bp3-tree-node-caret{
    color:#a7b6c2; }
    .bp3-dark .bp3-tree-node-caret:hover{
      color:#f5f8fa; }
  .bp3-tree-node-caret.bp3-tree-node-caret-open{
    -webkit-transform:rotate(90deg);
            transform:rotate(90deg); }
  .bp3-tree-node-caret.bp3-icon-standard::before{
    content:"\uE695"; }

.bp3-tree-node-icon{
  margin-right:7px;
  position:relative; }

.bp3-tree-node-label{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  position:relative;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-label span{
    display:inline; }

.bp3-tree-node-secondary-label{
  padding:0 5px;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-secondary-label .bp3-popover-wrapper,
  .bp3-tree-node-secondary-label .bp3-popover-target{
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; }

.bp3-tree-node.bp3-disabled .bp3-tree-node-content{
  background-color:inherit;
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-tree-node.bp3-disabled .bp3-tree-node-caret,
.bp3-tree-node.bp3-disabled .bp3-tree-node-icon{
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large{
    color:#ffffff; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before{
    color:rgba(255, 255, 255, 0.7); }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before{
    color:#ffffff; }

.bp3-dark .bp3-tree-node-content:hover{
  background-color:rgba(92, 112, 128, 0.3); }

.bp3-dark .bp3-tree .bp3-icon, .bp3-dark .bp3-tree .bp3-icon-standard, .bp3-dark .bp3-tree .bp3-icon-large{
  color:#a7b6c2; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
.bp3-omnibar{
  -webkit-filter:blur(0);
          filter:blur(0);
  opacity:1;
  background-color:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  left:calc(50% - 250px);
  top:20vh;
  width:500px;
  z-index:21; }
  .bp3-omnibar.bp3-overlay-enter, .bp3-omnibar.bp3-overlay-appear{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2; }
  .bp3-omnibar.bp3-overlay-enter-active, .bp3-omnibar.bp3-overlay-appear-active{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-omnibar.bp3-overlay-exit{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1; }
  .bp3-omnibar.bp3-overlay-exit-active{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-omnibar .bp3-input{
    background-color:transparent;
    border-radius:0; }
    .bp3-omnibar .bp3-input, .bp3-omnibar .bp3-input:focus{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-omnibar .bp3-menu{
    background-color:transparent;
    border-radius:0;
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
    max-height:calc(60vh - 40px);
    overflow:auto; }
    .bp3-omnibar .bp3-menu:empty{
      display:none; }
  .bp3-dark .bp3-omnibar, .bp3-omnibar.bp3-dark{
    background-color:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }

.bp3-omnibar-overlay .bp3-overlay-backdrop{
  background-color:rgba(16, 22, 26, 0.2); }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-height:300px;
  max-width:400px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }

.bp3-multi-select{
  min-width:150px; }

.bp3-multi-select-popover .bp3-menu{
  max-height:300px;
  max-width:400px;
  overflow:auto; }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-height:300px;
  max-width:400px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

/* Icons urls */

:root {
  --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-code: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTExLjQgMTguNkw2LjggMTRMMTEuNCA5LjRMMTAgOEw0IDE0TDEwIDIwTDExLjQgMTguNlpNMTYuNiAxOC42TDIxLjIgMTRMMTYuNiA5LjRMMTggOEwyNCAxNEwxOCAyMEwxNi42IDE4LjZWMTguNloiLz4KCTwvZz4KPC9zdmc+Cg==);
  --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1pY29uLWJyYW5kMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNmZmYiPgogICAgPHBhdGggZD0iTTEwNSAxMjcuM2g0MHYxMi44aC00MHpNNTEuMSA3N0w3NCA5OS45bC0yMy4zIDIzLjMgMTAuNSAxMC41IDIzLjMtMjMuM0w5NSA5OS45IDg0LjUgODkuNCA2MS42IDY2LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-copyright: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+CiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0xMS44OCw5LjE0YzEuMjgsMC4wNiwxLjYxLDEuMTUsMS42MywxLjY2aDEuNzljLTAuMDgtMS45OC0xLjQ5LTMuMTktMy40NS0zLjE5QzkuNjQsNy42MSw4LDksOCwxMi4xNCBjMCwxLjk0LDAuOTMsNC4yNCwzLjg0LDQuMjRjMi4yMiwwLDMuNDEtMS42NSwzLjQ0LTIuOTVoLTEuNzljLTAuMDMsMC41OS0wLjQ1LDEuMzgtMS42MywxLjQ0QzEwLjU1LDE0LjgzLDEwLDEzLjgxLDEwLDEyLjE0IEMxMCw5LjI1LDExLjI4LDkuMTYsMTEuODgsOS4xNHogTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwyMGMtNC40MSwwLTgtMy41OS04LTggczMuNTktOCw4LThzOCwzLjU5LDgsOFMxNi40MSwyMCwxMiwyMHoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
  --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
  --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNGOUE4MjUiPgogICAgPHBhdGggZD0iTTIwLjIgMTEuOGMtMS42IDAtMS43LjUtMS43IDEgMCAuNC4xLjkuMSAxLjMuMS41LjEuOS4xIDEuMyAwIDEuNy0xLjQgMi4zLTMuNSAyLjNoLS45di0xLjloLjVjMS4xIDAgMS40IDAgMS40LS44IDAtLjMgMC0uNi0uMS0xIDAtLjQtLjEtLjgtLjEtMS4yIDAtMS4zIDAtMS44IDEuMy0yLTEuMy0uMi0xLjMtLjctMS4zLTIgMC0uNC4xLS44LjEtMS4yLjEtLjQuMS0uNy4xLTEgMC0uOC0uNC0uNy0xLjQtLjhoLS41VjQuMWguOWMyLjIgMCAzLjUuNyAzLjUgMi4zIDAgLjQtLjEuOS0uMSAxLjMtLjEuNS0uMS45LS4xIDEuMyAwIC41LjIgMSAxLjcgMXYxLjh6TTEuOCAxMC4xYzEuNiAwIDEuNy0uNSAxLjctMSAwLS40LS4xLS45LS4xLTEuMy0uMS0uNS0uMS0uOS0uMS0xLjMgMC0xLjYgMS40LTIuMyAzLjUtMi4zaC45djEuOWgtLjVjLTEgMC0xLjQgMC0xLjQuOCAwIC4zIDAgLjYuMSAxIDAgLjIuMS42LjEgMSAwIDEuMyAwIDEuOC0xLjMgMkM2IDExLjIgNiAxMS43IDYgMTNjMCAuNC0uMS44LS4xIDEuMi0uMS4zLS4xLjctLjEgMSAwIC44LjMuOCAxLjQuOGguNXYxLjloLS45Yy0yLjEgMC0zLjUtLjYtMy41LTIuMyAwLS40LjEtLjkuMS0xLjMuMS0uNS4xLS45LjEtMS4zIDAtLjUtLjItMS0xLjctMXYtMS45eiIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMy44IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY3g9IjExIiBjeT0iOC4yIiByPSIyLjEiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-julia: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDMyNSAzMDAiPgogIDxnIGNsYXNzPSJqcC1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjY2IzYzMzIj4KICAgIDxwYXRoIGQ9Ik0gMTUwLjg5ODQzOCAyMjUgQyAxNTAuODk4NDM4IDI2Ni40MjE4NzUgMTE3LjMyMDMxMiAzMDAgNzUuODk4NDM4IDMwMCBDIDM0LjQ3NjU2MiAzMDAgMC44OTg0MzggMjY2LjQyMTg3NSAwLjg5ODQzOCAyMjUgQyAwLjg5ODQzOCAxODMuNTc4MTI1IDM0LjQ3NjU2MiAxNTAgNzUuODk4NDM4IDE1MCBDIDExNy4zMjAzMTIgMTUwIDE1MC44OTg0MzggMTgzLjU3ODEyNSAxNTAuODk4NDM4IDIyNSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzM4OTgyNiI+CiAgICA8cGF0aCBkPSJNIDIzNy41IDc1IEMgMjM3LjUgMTE2LjQyMTg3NSAyMDMuOTIxODc1IDE1MCAxNjIuNSAxNTAgQyAxMjEuMDc4MTI1IDE1MCA4Ny41IDExNi40MjE4NzUgODcuNSA3NSBDIDg3LjUgMzMuNTc4MTI1IDEyMS4wNzgxMjUgMCAxNjIuNSAwIEMgMjAzLjkyMTg3NSAwIDIzNy41IDMzLjU3ODEyNSAyMzcuNSA3NSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzk1NThiMiI+CiAgICA8cGF0aCBkPSJNIDMyNC4xMDE1NjIgMjI1IEMgMzI0LjEwMTU2MiAyNjYuNDIxODc1IDI5MC41MjM0MzggMzAwIDI0OS4xMDE1NjIgMzAwIEMgMjA3LjY3OTY4OCAzMDAgMTc0LjEwMTU2MiAyNjYuNDIxODc1IDE3NC4xMDE1NjIgMjI1IEMgMTc0LjEwMTU2MiAxODMuNTc4MTI1IDIwNy42Nzk2ODggMTUwIDI0OS4xMDE1NjIgMTUwIEMgMjkwLjUyMzQzOCAxNTAgMzI0LjEwMTU2MiAxODMuNTc4MTI1IDMyNC4xMDE1NjIgMjI1Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgPGcgY2xhc3M9ImpwLWljb24td2FybjAiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
  --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
  --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
  --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
  --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4=);
  --jp-icon-listings-info: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MC45NzggNTAuOTc4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MC45NzggNTAuOTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTQzLjUyLDcuNDU4QzM4LjcxMSwyLjY0OCwzMi4zMDcsMCwyNS40ODksMEMxOC42NywwLDEyLjI2NiwyLjY0OCw3LjQ1OCw3LjQ1OAoJCQljLTkuOTQzLDkuOTQxLTkuOTQzLDI2LjExOSwwLDM2LjA2MmM0LjgwOSw0LjgwOSwxMS4yMTIsNy40NTYsMTguMDMxLDcuNDU4YzAsMCwwLjAwMSwwLDAuMDAyLDAKCQkJYzYuODE2LDAsMTMuMjIxLTIuNjQ4LDE4LjAyOS03LjQ1OGM0LjgwOS00LjgwOSw3LjQ1Ny0xMS4yMTIsNy40NTctMTguMDNDNTAuOTc3LDE4LjY3LDQ4LjMyOCwxMi4yNjYsNDMuNTIsNy40NTh6CgkJCSBNNDIuMTA2LDQyLjEwNWMtNC40MzIsNC40MzEtMTAuMzMyLDYuODcyLTE2LjYxNSw2Ljg3MmgtMC4wMDJjLTYuMjg1LTAuMDAxLTEyLjE4Ny0yLjQ0MS0xNi42MTctNi44NzIKCQkJYy05LjE2Mi05LjE2My05LjE2Mi0yNC4wNzEsMC0zMy4yMzNDMTMuMzAzLDQuNDQsMTkuMjA0LDIsMjUuNDg5LDJjNi4yODQsMCwxMi4xODYsMi40NCwxNi42MTcsNi44NzIKCQkJYzQuNDMxLDQuNDMxLDYuODcxLDEwLjMzMiw2Ljg3MSwxNi42MTdDNDguOTc3LDMxLjc3Miw0Ni41MzYsMzcuNjc1LDQyLjEwNiw0Mi4xMDV6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yMy41NzgsMzIuMjE4Yy0wLjAyMy0xLjczNCwwLjE0My0zLjA1OSwwLjQ5Ni0zLjk3MmMwLjM1My0wLjkxMywxLjExLTEuOTk3LDIuMjcyLTMuMjUzCgkJCWMwLjQ2OC0wLjUzNiwwLjkyMy0xLjA2MiwxLjM2Ny0xLjU3NWMwLjYyNi0wLjc1MywxLjEwNC0xLjQ3OCwxLjQzNi0yLjE3NWMwLjMzMS0wLjcwNywwLjQ5NS0xLjU0MSwwLjQ5NS0yLjUKCQkJYzAtMS4wOTYtMC4yNi0yLjA4OC0wLjc3OS0yLjk3OWMtMC41NjUtMC44NzktMS41MDEtMS4zMzYtMi44MDYtMS4zNjljLTEuODAyLDAuMDU3LTIuOTg1LDAuNjY3LTMuNTUsMS44MzIKCQkJYy0wLjMwMSwwLjUzNS0wLjUwMywxLjE0MS0wLjYwNywxLjgxNGMtMC4xMzksMC43MDctMC4yMDcsMS40MzItMC4yMDcsMi4xNzRoLTIuOTM3Yy0wLjA5MS0yLjIwOCwwLjQwNy00LjExNCwxLjQ5My01LjcxOQoJCQljMS4wNjItMS42NCwyLjg1NS0yLjQ4MSw1LjM3OC0yLjUyN2MyLjE2LDAuMDIzLDMuODc0LDAuNjA4LDUuMTQxLDEuNzU4YzEuMjc4LDEuMTYsMS45MjksMi43NjQsMS45NSw0LjgxMQoJCQljMCwxLjE0Mi0wLjEzNywyLjExMS0wLjQxLDIuOTExYy0wLjMwOSwwLjg0NS0wLjczMSwxLjU5My0xLjI2OCwyLjI0M2MtMC40OTIsMC42NS0xLjA2OCwxLjMxOC0xLjczLDIuMDAyCgkJCWMtMC42NSwwLjY5Ny0xLjMxMywxLjQ3OS0xLjk4NywyLjM0NmMtMC4yMzksMC4zNzctMC40MjksMC43NzctMC41NjUsMS4xOTljLTAuMTYsMC45NTktMC4yMTcsMS45NTEtMC4xNzEsMi45NzkKCQkJQzI2LjU4OSwzMi4yMTgsMjMuNTc4LDMyLjIxOCwyMy41NzgsMzIuMjE4eiBNMjMuNTc4LDM4LjIydi0zLjQ4NGgzLjA3NnYzLjQ4NEgyMy41Nzh6Ii8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
  --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-numbering: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTQgMTlINlYxOS41SDVWMjAuNUg2VjIxSDRWMjJIN1YxOEg0VjE5Wk01IDEwSDZWNkg0VjdINVYxMFpNNCAxM0g1LjhMNCAxNS4xVjE2SDdWMTVINS4yTDcgMTIuOVYxMkg0VjEzWk05IDdWOUgyM1Y3SDlaTTkgMjFIMjNWMTlIOVYyMVpNOSAxNUgyM1YxM0g5VjE1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-offline-bolt: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-pdf: url(data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiIgd2lkdGg9IjE2Ij4KICAgIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0ZGMkEyQSIKICAgICAgIGQ9Im0gMjIuMzQ0MzY5LC0zLjAxNjM2NDIgaCA1LjYzODYwNCB2IDEuNTc5MjQzMyBoIC0zLjU0OTIyNyB2IDEuNTA4NjkyOTkgaCAzLjMzNzU3NiBWIDEuNjUwODE1NCBoIC0zLjMzNzU3NiB2IDMuNDM1MjYxMyBoIC0yLjA4OTM3NyB6IG0gLTcuMTM2NDQ0LDEuNTc5MjQzMyB2IDQuOTQzOTU0MyBoIDAuNzQ4OTIgcSAxLjI4MDc2MSwwIDEuOTUzNzAzLC0wLjYzNDk1MzUgMC42NzgzNjksLTAuNjM0OTUzNSAwLjY3ODM2OSwtMS44NDUxNjQxIDAsLTEuMjA0NzgzNTUgLTAuNjcyOTQyLC0xLjgzNDMxMDExIC0wLjY3Mjk0MiwtMC42Mjk1MjY1OSAtMS45NTkxMywtMC42Mjk1MjY1OSB6IG0gLTIuMDg5Mzc3LC0xLjU3OTI0MzMgaCAyLjIwMzM0MyBxIDEuODQ1MTY0LDAgMi43NDYwMzksMC4yNjU5MjA3IDAuOTA2MzAxLDAuMjYwNDkzNyAxLjU1MjEwOCwwLjg5MDAyMDMgMC41Njk4MywwLjU0ODEyMjMgMC44NDY2MDUsMS4yNjQ0ODAwNiAwLjI3Njc3NCwwLjcxNjM1NzgxIDAuMjc2Nzc0LDEuNjIyNjU4OTQgMCwwLjkxNzE1NTEgLTAuMjc2Nzc0LDEuNjM4OTM5OSAtMC4yNzY3NzUsMC43MTYzNTc4IC0wLjg0NjYwNSwxLjI2NDQ4IC0wLjY1MTIzNCwwLjYyOTUyNjYgLTEuNTYyOTYyLDAuODk1NDQ3MyAtMC45MTE3MjgsMC4yNjA0OTM3IC0yLjczNTE4NSwwLjI2MDQ5MzcgaCAtMi4yMDMzNDMgeiBtIC04LjE0NTg1NjUsMCBoIDMuNDY3ODIzIHEgMS41NDY2ODE2LDAgMi4zNzE1Nzg1LDAuNjg5MjIzIDAuODMwMzI0LDAuNjgzNzk2MSAwLjgzMDMyNCwxLjk1MzcwMzE0IDAsMS4yNzUzMzM5NyAtMC44MzAzMjQsMS45NjQ1NTcwNiBRIDkuOTg3MTk2MSwyLjI3NDkxNSA4LjQ0MDUxNDUsMi4yNzQ5MTUgSCA3LjA2MjA2ODQgViA1LjA4NjA3NjcgSCA0Ljk3MjY5MTUgWiBtIDIuMDg5Mzc2OSwxLjUxNDExOTkgdiAyLjI2MzAzOTQzIGggMS4xNTU5NDEgcSAwLjYwNzgxODgsMCAwLjkzODg2MjksLTAuMjkzMDU1NDcgMC4zMzEwNDQxLC0wLjI5ODQ4MjQxIDAuMzMxMDQ0MSwtMC44NDExNzc3MiAwLC0wLjU0MjY5NTMxIC0wLjMzMTA0NDEsLTAuODM1NzUwNzQgLTAuMzMxMDQ0MSwtMC4yOTMwNTU1IC0wLjkzODg2MjksLTAuMjkzMDU1NSB6IgovPgo8L3N2Zz4K);
  --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMEQ0N0ExIj4KICAgIDxwYXRoIGQ9Ik0xMS4xIDYuOVY1LjhINi45YzAtLjUgMC0xLjMuMi0xLjYuNC0uNy44LTEuMSAxLjctMS40IDEuNy0uMyAyLjUtLjMgMy45LS4xIDEgLjEgMS45LjkgMS45IDEuOXY0LjJjMCAuNS0uOSAxLjYtMiAxLjZIOC44Yy0xLjUgMC0yLjQgMS40LTIuNCAyLjh2Mi4ySDQuN0MzLjUgMTUuMSAzIDE0IDMgMTMuMVY5Yy0uMS0xIC42LTIgMS44LTIgMS41LS4xIDYuMy0uMSA2LjMtLjF6Ii8+CiAgICA8cGF0aCBkPSJNMTAuOSAxNS4xdjEuMWg0LjJjMCAuNSAwIDEuMy0uMiAxLjYtLjQuNy0uOCAxLjEtMS43IDEuNC0xLjcuMy0yLjUuMy0zLjkuMS0xLS4xLTEuOS0uOS0xLjktMS45di00LjJjMC0uNS45LTEuNiAyLTEuNmgzLjhjMS41IDAgMi40LTEuNCAyLjQtMi44VjYuNmgxLjdDMTguNSA2LjkgMTkgOCAxOSA4LjlWMTNjMCAxLS43IDIuMS0xLjkgMi4xaC02LjJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
  --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-redo: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
  --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-table-rows: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2eiIvPgogICAgPC9nPgo8L3N2Zz4=);
  --jp-icon-tag: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0MyAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTI4LjgzMzIgMTIuMzM0TDMyLjk5OTggMTYuNTAwN0wzNy4xNjY1IDEyLjMzNEgyOC44MzMyWiIvPgoJCTxwYXRoIGQ9Ik0xNi4yMDk1IDIxLjYxMDRDMTUuNjg3MyAyMi4xMjk5IDE0Ljg0NDMgMjIuMTI5OSAxNC4zMjQ4IDIxLjYxMDRMNi45ODI5IDE0LjcyNDVDNi41NzI0IDE0LjMzOTQgNi4wODMxMyAxMy42MDk4IDYuMDQ3ODYgMTMuMDQ4MkM1Ljk1MzQ3IDExLjUyODggNi4wMjAwMiA4LjYxOTQ0IDYuMDY2MjEgNy4wNzY5NUM2LjA4MjgxIDYuNTE0NzcgNi41NTU0OCA2LjA0MzQ3IDcuMTE4MDQgNi4wMzA1NUM5LjA4ODYzIDUuOTg0NzMgMTMuMjYzOCA1LjkzNTc5IDEzLjY1MTggNi4zMjQyNUwyMS43MzY5IDEzLjYzOUMyMi4yNTYgMTQuMTU4NSAyMS43ODUxIDE1LjQ3MjQgMjEuMjYyIDE1Ljk5NDZMMTYuMjA5NSAyMS42MTA0Wk05Ljc3NTg1IDguMjY1QzkuMzM1NTEgNy44MjU2NiA4LjYyMzUxIDcuODI1NjYgOC4xODI4IDguMjY1QzcuNzQzNDYgOC43MDU3MSA3Ljc0MzQ2IDkuNDE3MzMgOC4xODI4IDkuODU2NjdDOC42MjM4MiAxMC4yOTY0IDkuMzM1ODIgMTAuMjk2NCA5Ljc3NTg1IDkuODU2NjdDMTAuMjE1NiA5LjQxNzMzIDEwLjIxNTYgOC43MDUzMyA5Ljc3NTg1IDguMjY1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiMzMzMzMzMiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uLWFjY2VudDIganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGQ9Ik01LjA1NjY0IDguNzYxNzJDNS4wNTY2NCA4LjU5NzY2IDUuMDMxMjUgOC40NTMxMiA0Ljk4MDQ3IDguMzI4MTJDNC45MzM1OSA4LjE5OTIyIDQuODU1NDcgOC4wODIwMyA0Ljc0NjA5IDcuOTc2NTZDNC42NDA2MiA3Ljg3MTA5IDQuNSA3Ljc3NTM5IDQuMzI0MjIgNy42ODk0NUM0LjE1MjM0IDcuNTk5NjEgMy45NDMzNiA3LjUxMTcyIDMuNjk3MjcgNy40MjU3OEMzLjMwMjczIDcuMjg1MTYgMi45NDMzNiA3LjEzNjcyIDIuNjE5MTQgNi45ODA0N0MyLjI5NDkyIDYuODI0MjIgMi4wMTc1OCA2LjY0MjU4IDEuNzg3MTEgNi40MzU1NUMxLjU2MDU1IDYuMjI4NTIgMS4zODQ3NyA1Ljk4ODI4IDEuMjU5NzcgNS43MTQ4NEMxLjEzNDc3IDUuNDM3NSAxLjA3MjI3IDUuMTA5MzggMS4wNzIyNyA0LjczMDQ3QzEuMDcyMjcgNC4zOTg0NCAxLjEyODkxIDQuMDk1NyAxLjI0MjE5IDMuODIyMjdDMS4zNTU0NyAzLjU0NDkyIDEuNTE1NjIgMy4zMDQ2OSAxLjcyMjY2IDMuMTAxNTZDMS45Mjk2OSAyLjg5ODQ0IDIuMTc5NjkgMi43MzQzNyAyLjQ3MjY2IDIuNjA5MzhDMi43NjU2MiAyLjQ4NDM4IDMuMDkxOCAyLjQwNDMgMy40NTExNyAyLjM2OTE0VjEuMTA5MzhINC4zODg2N1YyLjM4MDg2QzQuNzQwMjMgMi40Mjc3MyA1LjA1NjY0IDIuNTIzNDQgNS4zMzc4OSAyLjY2Nzk3QzUuNjE5MTQgMi44MTI1IDUuODU3NDIgMy4wMDE5NSA2LjA1MjczIDMuMjM2MzNDNi4yNTE5NSAzLjQ2NjggNi40MDQzIDMuNzQwMjMgNi41MDk3NyA0LjA1NjY0QzYuNjE5MTQgNC4zNjkxNCA2LjY3MzgzIDQuNzIwNyA2LjY3MzgzIDUuMTExMzNINS4wNDQ5MkM1LjA0NDkyIDQuNjM4NjcgNC45Mzc1IDQuMjgxMjUgNC43MjI2NiA0LjAzOTA2QzQuNTA3ODEgMy43OTI5NyA0LjIxNjggMy42Njk5MiAzLjg0OTYxIDMuNjY5OTJDMy42NTAzOSAzLjY2OTkyIDMuNDc2NTYgMy42OTcyNyAzLjMyODEyIDMuNzUxOTVDMy4xODM1OSAzLjgwMjczIDMuMDY0NDUgMy44NzY5NSAyLjk3MDcgMy45NzQ2MUMyLjg3Njk1IDQuMDY4MzYgMi44MDY2NCA0LjE3OTY5IDIuNzU5NzcgNC4zMDg1OUMyLjcxNjggNC40Mzc1IDIuNjk1MzEgNC41NzgxMiAyLjY5NTMxIDQuNzMwNDdDMi42OTUzMSA0Ljg4MjgxIDIuNzE2OCA1LjAxOTUzIDIuNzU5NzcgNS4xNDA2MkMyLjgwNjY0IDUuMjU3ODEgMi44ODI4MSA1LjM2NzE5IDIuOTg4MjggNS40Njg3NUMzLjA5NzY2IDUuNTcwMzEgMy4yNDAyMyA1LjY2Nzk3IDMuNDE2MDIgNS43NjE3MkMzLjU5MTggNS44NTE1NiAzLjgxMDU1IDUuOTQzMzYgNC4wNzIyNyA2LjAzNzExQzQuNDY2OCA2LjE4NTU1IDQuODI0MjIgNi4zMzk4NCA1LjE0NDUzIDYuNUM1LjQ2NDg0IDYuNjU2MjUgNS43MzgyOCA2LjgzOTg0IDUuOTY0ODQgNy4wNTA3OEM2LjE5NTMxIDcuMjU3ODEgNi4zNzEwOSA3LjUgNi40OTIxOSA3Ljc3NzM0QzYuNjE3MTkgOC4wNTA3OCA2LjY3OTY5IDguMzc1IDYuNjc5NjkgOC43NUM2LjY3OTY5IDkuMDkzNzUgNi42MjMwNSA5LjQwNDMgNi41MDk3NyA5LjY4MTY0QzYuMzk2NDggOS45NTUwOCA2LjIzNDM4IDEwLjE5MTQgNi4wMjM0NCAxMC4zOTA2QzUuODEyNSAxMC41ODk4IDUuNTU4NTkgMTAuNzUgNS4yNjE3MiAxMC44NzExQzQuOTY0ODQgMTAuOTg4MyA0LjYzMjgxIDExLjA2NDUgNC4yNjU2MiAxMS4wOTk2VjEyLjI0OEgzLjMzMzk4VjExLjA5OTZDMy4wMDE5NSAxMS4wNjg0IDIuNjc5NjkgMTAuOTk2MSAyLjM2NzE5IDEwLjg4MjhDMi4wNTQ2OSAxMC43NjU2IDEuNzc3MzQgMTAuNTk3NyAxLjUzNTE2IDEwLjM3ODlDMS4yOTY4OCAxMC4xNjAyIDEuMTA1NDcgOS44ODQ3NyAwLjk2MDkzOCA5LjU1MjczQzAuODE2NDA2IDkuMjE2OCAwLjc0NDE0MSA4LjgxNDQ1IDAuNzQ0MTQxIDguMzQ1N0gyLjM3ODkxQzIuMzc4OTEgOC42MjY5NSAyLjQxOTkyIDguODYzMjggMi41MDE5NSA5LjA1NDY5QzIuNTgzOTggOS4yNDIxOSAyLjY4OTQ1IDkuMzkyNTggMi44MTgzNiA5LjUwNTg2QzIuOTUxMTcgOS42MTUyMyAzLjEwMTU2IDkuNjkzMzYgMy4yNjk1MyA5Ljc0MDIzQzMuNDM3NSA5Ljc4NzExIDMuNjA5MzggOS44MTA1NSAzLjc4NTE2IDkuODEwNTVDNC4yMDMxMiA5LjgxMDU1IDQuNTE5NTMgOS43MTI4OSA0LjczNDM4IDkuNTE3NThDNC45NDkyMiA5LjMyMjI3IDUuMDU2NjQgOS4wNzAzMSA1LjA1NjY0IDguNzYxNzJaTTEzLjQxOCAxMi4yNzE1SDguMDc0MjJWMTFIMTMuNDE4VjEyLjI3MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk1MjY0IDYpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-toc: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik03LDVIMjFWN0g3VjVNNywxM1YxMUgyMVYxM0g3TTQsNC41QTEuNSwxLjUgMCAwLDEgNS41LDZBMS41LDEuNSAwIDAsMSA0LDcuNUExLjUsMS41IDAgMCwxIDIuNSw2QTEuNSwxLjUgMCAwLDEgNCw0LjVNNCwxMC41QTEuNSwxLjUgMCAwLDEgNS41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMy41QTEuNSwxLjUgMCAwLDEgMi41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMC41TTcsMTlWMTdIMjFWMTlIN000LDE2LjVBMS41LDEuNSAwIDAsMSA1LjUsMThBMS41LDEuNSAwIDAsMSA0LDE5LjVBMS41LDEuNSAwIDAsMSAyLjUsMThBMS41LDEuNSAwIDAsMSA0LDE2LjVaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tree-view: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMiAxMVYzaC03djNIOVYzSDJ2OGg3VjhoMnYxMGg0djNoN3YtOGgtN3YzaC0yVjhoMnYzeiIvPgogICAgPC9nPgo8L3N2Zz4=);
  --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
  --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/* Icon CSS class declarations */

.jp-AddIcon {
  background-image: var(--jp-icon-add);
}
.jp-BugIcon {
  background-image: var(--jp-icon-bug);
}
.jp-BuildIcon {
  background-image: var(--jp-icon-build);
}
.jp-CaretDownEmptyIcon {
  background-image: var(--jp-icon-caret-down-empty);
}
.jp-CaretDownEmptyThinIcon {
  background-image: var(--jp-icon-caret-down-empty-thin);
}
.jp-CaretDownIcon {
  background-image: var(--jp-icon-caret-down);
}
.jp-CaretLeftIcon {
  background-image: var(--jp-icon-caret-left);
}
.jp-CaretRightIcon {
  background-image: var(--jp-icon-caret-right);
}
.jp-CaretUpEmptyThinIcon {
  background-image: var(--jp-icon-caret-up-empty-thin);
}
.jp-CaretUpIcon {
  background-image: var(--jp-icon-caret-up);
}
.jp-CaseSensitiveIcon {
  background-image: var(--jp-icon-case-sensitive);
}
.jp-CheckIcon {
  background-image: var(--jp-icon-check);
}
.jp-CircleEmptyIcon {
  background-image: var(--jp-icon-circle-empty);
}
.jp-CircleIcon {
  background-image: var(--jp-icon-circle);
}
.jp-ClearIcon {
  background-image: var(--jp-icon-clear);
}
.jp-CloseIcon {
  background-image: var(--jp-icon-close);
}
.jp-CodeIcon {
  background-image: var(--jp-icon-code);
}
.jp-ConsoleIcon {
  background-image: var(--jp-icon-console);
}
.jp-CopyIcon {
  background-image: var(--jp-icon-copy);
}
.jp-CopyrightIcon {
  background-image: var(--jp-icon-copyright);
}
.jp-CutIcon {
  background-image: var(--jp-icon-cut);
}
.jp-DownloadIcon {
  background-image: var(--jp-icon-download);
}
.jp-EditIcon {
  background-image: var(--jp-icon-edit);
}
.jp-EllipsesIcon {
  background-image: var(--jp-icon-ellipses);
}
.jp-ExtensionIcon {
  background-image: var(--jp-icon-extension);
}
.jp-FastForwardIcon {
  background-image: var(--jp-icon-fast-forward);
}
.jp-FileIcon {
  background-image: var(--jp-icon-file);
}
.jp-FileUploadIcon {
  background-image: var(--jp-icon-file-upload);
}
.jp-FilterListIcon {
  background-image: var(--jp-icon-filter-list);
}
.jp-FolderIcon {
  background-image: var(--jp-icon-folder);
}
.jp-Html5Icon {
  background-image: var(--jp-icon-html5);
}
.jp-ImageIcon {
  background-image: var(--jp-icon-image);
}
.jp-InspectorIcon {
  background-image: var(--jp-icon-inspector);
}
.jp-JsonIcon {
  background-image: var(--jp-icon-json);
}
.jp-JuliaIcon {
  background-image: var(--jp-icon-julia);
}
.jp-JupyterFaviconIcon {
  background-image: var(--jp-icon-jupyter-favicon);
}
.jp-JupyterIcon {
  background-image: var(--jp-icon-jupyter);
}
.jp-JupyterlabWordmarkIcon {
  background-image: var(--jp-icon-jupyterlab-wordmark);
}
.jp-KernelIcon {
  background-image: var(--jp-icon-kernel);
}
.jp-KeyboardIcon {
  background-image: var(--jp-icon-keyboard);
}
.jp-LauncherIcon {
  background-image: var(--jp-icon-launcher);
}
.jp-LineFormIcon {
  background-image: var(--jp-icon-line-form);
}
.jp-LinkIcon {
  background-image: var(--jp-icon-link);
}
.jp-ListIcon {
  background-image: var(--jp-icon-list);
}
.jp-ListingsInfoIcon {
  background-image: var(--jp-icon-listings-info);
}
.jp-MarkdownIcon {
  background-image: var(--jp-icon-markdown);
}
.jp-NewFolderIcon {
  background-image: var(--jp-icon-new-folder);
}
.jp-NotTrustedIcon {
  background-image: var(--jp-icon-not-trusted);
}
.jp-NotebookIcon {
  background-image: var(--jp-icon-notebook);
}
.jp-NumberingIcon {
  background-image: var(--jp-icon-numbering);
}
.jp-OfflineBoltIcon {
  background-image: var(--jp-icon-offline-bolt);
}
.jp-PaletteIcon {
  background-image: var(--jp-icon-palette);
}
.jp-PasteIcon {
  background-image: var(--jp-icon-paste);
}
.jp-PdfIcon {
  background-image: var(--jp-icon-pdf);
}
.jp-PythonIcon {
  background-image: var(--jp-icon-python);
}
.jp-RKernelIcon {
  background-image: var(--jp-icon-r-kernel);
}
.jp-ReactIcon {
  background-image: var(--jp-icon-react);
}
.jp-RedoIcon {
  background-image: var(--jp-icon-redo);
}
.jp-RefreshIcon {
  background-image: var(--jp-icon-refresh);
}
.jp-RegexIcon {
  background-image: var(--jp-icon-regex);
}
.jp-RunIcon {
  background-image: var(--jp-icon-run);
}
.jp-RunningIcon {
  background-image: var(--jp-icon-running);
}
.jp-SaveIcon {
  background-image: var(--jp-icon-save);
}
.jp-SearchIcon {
  background-image: var(--jp-icon-search);
}
.jp-SettingsIcon {
  background-image: var(--jp-icon-settings);
}
.jp-SpreadsheetIcon {
  background-image: var(--jp-icon-spreadsheet);
}
.jp-StopIcon {
  background-image: var(--jp-icon-stop);
}
.jp-TabIcon {
  background-image: var(--jp-icon-tab);
}
.jp-TableRowsIcon {
  background-image: var(--jp-icon-table-rows);
}
.jp-TagIcon {
  background-image: var(--jp-icon-tag);
}
.jp-TerminalIcon {
  background-image: var(--jp-icon-terminal);
}
.jp-TextEditorIcon {
  background-image: var(--jp-icon-text-editor);
}
.jp-TocIcon {
  background-image: var(--jp-icon-toc);
}
.jp-TreeViewIcon {
  background-image: var(--jp-icon-tree-view);
}
.jp-TrustedIcon {
  background-image: var(--jp-icon-trusted);
}
.jp-UndoIcon {
  background-image: var(--jp-icon-undo);
}
.jp-VegaIcon {
  background-image: var(--jp-icon-vega);
}
.jp-YamlIcon {
  background-image: var(--jp-icon-yaml);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

.jp-Icon,
.jp-MaterialIcon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/**
 * (DEPRECATED) Support for specific CSS icon sizes
 */

.jp-Icon-16 {
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-18 {
  background-size: 18px;
  min-width: 18px;
  min-height: 18px;
}

.jp-Icon-20 {
  background-size: 20px;
  min-width: 20px;
  min-height: 20px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for icons as inline SVG HTMLElements
 */

/* recolor the primary elements of an icon */
.jp-icon0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}
/* recolor the accent elements of an icon */
.jp-icon-accent0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-accent1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-accent2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-accent3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-accent4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-accent1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-accent2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-accent3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-accent4[stroke] {
  stroke: var(--jp-layout-color4);
}
/* set the color of an icon to transparent */
.jp-icon-none[fill] {
  fill: none;
}

.jp-icon-none[stroke] {
  stroke: none;
}
/* brand icon colors. Same for light and dark */
.jp-icon-brand0[fill] {
  fill: var(--jp-brand-color0);
}
.jp-icon-brand1[fill] {
  fill: var(--jp-brand-color1);
}
.jp-icon-brand2[fill] {
  fill: var(--jp-brand-color2);
}
.jp-icon-brand3[fill] {
  fill: var(--jp-brand-color3);
}
.jp-icon-brand4[fill] {
  fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
  stroke: var(--jp-brand-color0);
}
.jp-icon-brand1[stroke] {
  stroke: var(--jp-brand-color1);
}
.jp-icon-brand2[stroke] {
  stroke: var(--jp-brand-color2);
}
.jp-icon-brand3[stroke] {
  stroke: var(--jp-brand-color3);
}
.jp-icon-brand4[stroke] {
  stroke: var(--jp-brand-color4);
}
/* warn icon colors. Same for light and dark */
.jp-icon-warn0[fill] {
  fill: var(--jp-warn-color0);
}
.jp-icon-warn1[fill] {
  fill: var(--jp-warn-color1);
}
.jp-icon-warn2[fill] {
  fill: var(--jp-warn-color2);
}
.jp-icon-warn3[fill] {
  fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
  stroke: var(--jp-warn-color0);
}
.jp-icon-warn1[stroke] {
  stroke: var(--jp-warn-color1);
}
.jp-icon-warn2[stroke] {
  stroke: var(--jp-warn-color2);
}
.jp-icon-warn3[stroke] {
  stroke: var(--jp-warn-color3);
}
/* icon colors that contrast well with each other and most backgrounds */
.jp-icon-contrast0[fill] {
  fill: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[fill] {
  fill: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[fill] {
  fill: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[fill] {
  fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
  stroke: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[stroke] {
  stroke: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[stroke] {
  stroke: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[stroke] {
  stroke: var(--jp-icon-contrast-color3);
}

/* CSS for icons in selected items in the settings editor */
#setting-editor .jp-PluginList .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
#setting-editor
  .jp-PluginList
  .jp-mod-selected
  .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected filebrowser listing items */
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected tabs in the sidebar tab manager */
#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable[fill] {
  fill: #fff;
}

#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable[fill] {
  fill: var(--jp-brand-color1);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable-inverse[fill] {
  fill: #fff;
}

/**
 * TODO: come up with non css-hack solution for showing the busy icon on top
 *  of the close icon
 * CSS for complex behavior of close icon of tabs in the sidebar tab manager
 */
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-dirty.jp-mod-active
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: #fff;
}

/**
* TODO: come up with non css-hack solution for showing the busy icon on top
*  of the close icon
* CSS for complex behavior of close icon of tabs in the main area tabbar
*/
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

/* CSS for icons in status bar */
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
/* special handling for splash icon CSS. While the theme CSS reloads during
   splash, the splash icon can loose theming. To prevent that, we set a
   default for its color variable */
:root {
  --jp-warn-color0: var(--md-orange-700);
}

/* not sure what to do with this one, used in filebrowser listing */
.jp-DragIcon {
  margin-right: 4px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for alt colors for icons as inline SVG HTMLElements
 */

/* alt recolor the primary elements of an icon */
.jp-icon-alt .jp-icon0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* alt recolor the accent elements of an icon */
.jp-icon-alt .jp-icon-accent0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-icon-hoverShow:not(:hover) svg {
  display: none !important;
}

/**
 * Support for hover colors for icons as inline SVG HTMLElements
 */

/**
 * regular colors
 */

/* recolor the primary elements of an icon */
.jp-icon-hover :hover .jp-icon0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
  fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
  stroke: none;
}

/**
 * inverse colors
 */

/* inverse recolor the primary elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* inverse recolor the accent elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-switch {
  display: flex;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  font-size: var(--jp-ui-font-size1);
  background-color: transparent;
  color: var(--jp-ui-font-color1);
  border: none;
  height: 20px;
}

.jp-switch:hover {
  background-color: var(--jp-layout-color2);
}

.jp-switch-label {
  margin-right: 5px;
}

.jp-switch-track {
  cursor: pointer;
  background-color: var(--jp-border-color1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  height: 16px;
  width: 35px;
  position: relative;
}

.jp-switch-track::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  margin: 3px;
  left: 0px;
  background-color: var(--jp-ui-inverse-font-color1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.jp-switch[aria-checked='true'] .jp-switch-track {
  background-color: var(--jp-warn-color0);
}

.jp-switch[aria-checked='true'] .jp-switch-track::before {
  /* track width (35) - margins (3 + 3) - thumb width (10) */
  left: 19px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* Sibling imports */

/* Override Blueprint's _reset.scss styles */
html {
  box-sizing: unset;
}

*,
*::before,
*::after {
  box-sizing: unset;
}

body {
  color: unset;
  font-family: var(--jp-ui-font-family);
}

p {
  margin-top: unset;
  margin-bottom: unset;
}

small {
  font-size: unset;
}

strong {
  font-weight: unset;
}

/* Override Blueprint's _typography.scss styles */
a {
  text-decoration: unset;
  color: unset;
}
a:hover {
  text-decoration: unset;
  color: unset;
}

/* Override Blueprint's _accessibility.scss styles */
:focus {
  outline: unset;
  outline-offset: unset;
  -moz-outline-radius: unset;
}

/* Styles for ui-components */
.jp-Button {
  border-radius: var(--jp-border-radius);
  padding: 0px 12px;
  font-size: var(--jp-ui-font-size1);
}

/* Use our own theme for hover styles */
button.jp-Button.bp3-button.bp3-minimal:hover {
  background-color: var(--jp-layout-color2);
}
.jp-Button.minimal {
  color: unset !important;
}

.jp-Button.jp-ToolbarButtonComponent {
  text-transform: none;
}

.jp-InputGroup input {
  box-sizing: border-box;
  border-radius: 0;
  background-color: transparent;
  color: var(--jp-ui-font-color0);
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.jp-InputGroup input:focus {
  box-shadow: inset 0 0 0 var(--jp-border-width)
      var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input::placeholder,
input::placeholder {
  color: var(--jp-ui-font-color3);
}

.jp-BPIcon {
  display: inline-block;
  vertical-align: middle;
  margin: auto;
}

/* Stop blueprint futzing with our icon fills */
.bp3-icon.jp-BPIcon > svg:not([fill]) {
  fill: var(--jp-inverse-layout-color3);
}

.jp-InputGroupAction {
  padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: var(--jp-ui-font-color0);
  display: block;
  font-size: var(--jp-ui-font-size1);
  height: 24px;
  line-height: 14px;
  padding: 0 25px 0 10px;
  text-align: left;
  -moz-appearance: none;
  -webkit-appearance: none;
}

/* Use our own theme for hover and option styles */
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color0);
}
select {
  box-sizing: border-box;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapse {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 1px solid var(--jp-border-color2);
  border-bottom: 1px solid var(--jp-border-color2);
}

.jp-Collapse-header {
  padding: 1px 12px;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size2);
}

.jp-Collapse-header:hover {
  background-color: var(--jp-layout-color2);
}

.jp-Collapse-contents {
  padding: 0px 12px 0px 12px;
  background-color: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-commandpalette-search-height: 28px;
}

/*-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  padding-bottom: 0px;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Modal variant
|----------------------------------------------------------------------------*/

.jp-ModalCommandPalette {
  position: absolute;
  z-index: 10000;
  top: 38px;
  left: 30%;
  margin: 0;
  padding: 4px;
  width: 40%;
  box-shadow: var(--jp-elevation-z4);
  border-radius: 4px;
  background: var(--jp-layout-color0);
}

.jp-ModalCommandPalette .lm-CommandPalette {
  max-height: 40vh;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-close-icon::after {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-header {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-item {
  margin-left: 4px;
  margin-right: 4px;
}

.jp-ModalCommandPalette
  .lm-CommandPalette
  .lm-CommandPalette-item.lm-mod-disabled {
  display: none;
}

/*-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------*/

.lm-CommandPalette-search {
  padding: 4px;
  background-color: var(--jp-layout-color1);
  z-index: 2;
}

.lm-CommandPalette-wrapper {
  overflow: overlay;
  padding: 0px 9px;
  background-color: var(--jp-input-active-background);
  height: 30px;
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
  box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-SearchIconGroup {
  color: white;
  background-color: var(--jp-brand-color1);
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 5px 5px 1px 5px;
}

.jp-SearchIconGroup svg {
  height: 20px;
  width: 20px;
}

.jp-SearchIconGroup .jp-icon3[fill] {
  fill: var(--jp-layout-color0);
}

.lm-CommandPalette-input {
  background: transparent;
  width: calc(100% - 18px);
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
  color: var(--jp-ui-font-color2);
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------*/

.lm-CommandPalette-header:first-child {
  margin-top: 0px;
}

.lm-CommandPalette-header {
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 8px;
  padding: 8px 0 8px 12px;
  text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
  padding: 4px 12px 4px 4px;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
  color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item.lm-mod-active {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-inverse-font-color0);
}

.lm-CommandPalette-item.lm-mod-active .jp-icon-selectable[fill] {
  fill: var(--jp-layout-color0);
}

.lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-inverse-font-color0);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
  overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
  color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
  margin: 0 4px 0 0;
  position: relative;
  width: 16px;
  top: 2px;
  flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
  opacity: 0.6;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
  display: none;
}

.lm-CommandPalette-content {
  background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty:after {
  content: 'No results';
  margin: auto;
  margin-top: 20px;
  width: 100px;
  display: block;
  font-size: var(--jp-ui-font-size2);
  font-family: var(--jp-ui-font-family);
  font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
  text-align: center;
  margin-top: 24px;
  line-height: 1.32;
  padding: 0px 8px;
  color: var(--jp-content-font-color3);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Dialog {
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-dialog-background);
}

.jp-Dialog-content {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: var(--jp-layout-color1);
  padding: 24px;
  padding-bottom: 12px;
  min-width: 300px;
  min-height: 150px;
  max-width: 1000px;
  max-height: 500px;
  box-sizing: border-box;
  box-shadow: var(--jp-elevation-z20);
  word-wrap: break-word;
  border-radius: var(--jp-border-radius);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
  resize: both;
}

.jp-Dialog-button {
  overflow: visible;
}

button.jp-Dialog-button:focus {
  outline: 1px solid var(--jp-brand-color1);
  outline-offset: 4px;
  -moz-outline-radius: 0px;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
  border: 0;
}

button.jp-Dialog-close-button {
  padding: 0;
  height: 100%;
  min-width: unset;
  min-height: unset;
}

.jp-Dialog-header {
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  padding-bottom: 12px;
  font-size: var(--jp-ui-font-size3);
  font-weight: 400;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: var(--jp-ui-font-size1);
  background: var(--jp-layout-color1);
  overflow: auto;
}

.jp-Dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 auto;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}

.jp-Dialog-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
  width: 100%;
}

.jp-Dialog-body > button {
  padding: 0px 16px;
}

.jp-Dialog-body > label {
  line-height: 1.4;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
  margin-right: 12px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-HoverBox {
  position: fixed;
}

.jp-HoverBox.jp-mod-outofview {
  display: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-IFrame {
  width: 100%;
  height: 100%;
}

.jp-IFrame > iframe {
  border: none;
}

/*
When drag events occur, \`p-mod-override-cursor\` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-IFrame {
  position: relative;
}

body.lm-mod-override-cursor .jp-IFrame:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

.jp-Input-Boolean-Dialog {
  flex-direction: row-reverse;
  align-items: end;
  width: 100%;
}

.jp-Input-Boolean-Dialog > label {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MainAreaWidget > :focus {
  outline: none;
}

/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */
:root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;

  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;

  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #aa00ff;

  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;

  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;

  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;

  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;

  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;

  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;

  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;

  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;

  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;

  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ffff00;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;

  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;

  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;

  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;

  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;

  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eeeeee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;

  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-layout-color0);
  outline: none;
}

.jp-SpinnerContent {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--jp-brand-color3);
  background: linear-gradient(
    to right,
    #f37626 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent:before {
  width: 50%;
  height: 50%;
  background: #f37626;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.jp-SpinnerContent:after {
  background: var(--jp-layout-color0);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

button.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 32px;
  height: 32px;
  padding: 0px 12px;
  letter-spacing: 0.8px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled {
  background: var(--jp-input-background);
  height: 28px;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color1);
  padding-left: 7px;
  padding-right: 7px;
  font-size: var(--jp-ui-font-size2);
  color: var(--jp-ui-font-color0);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type='checkbox'].jp-mod-styled {
  appearance: checkbox;
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  height: auto;
}

input.jp-mod-styled:focus {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-FileDialog-Checkbox {
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 100%;
}

.jp-FileDialog-Checkbox > label {
  flex: 1 1 auto;
}

.jp-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1px;
  background-color: var(--jp-layout-color1);
  height: 28px;
  box-sizing: border-box;
  margin-bottom: 12px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
  background-color: var(--jp-layout-color1);
  cursor: pointer;
  color: var(--jp-ui-font-color0);
  background-color: var(--jp-input-hover-background);
  box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
  flex: 1 1 auto;
  height: 32px;
  width: 100%;
  font-size: var(--jp-ui-font-size2);
  background: var(--jp-input-background);
  color: var(--jp-ui-font-color0);
  padding: 0 25px 0 8px;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toolbar-height: calc(
    28px + var(--jp-border-width)
  ); /* leave 28px for content */
}

.jp-Toolbar {
  color: var(--jp-ui-font-color1);
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: 2px;
  z-index: 1;
  overflow-x: auto;
}

/* Toolbar items */

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
  display: inline-block;
  width: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  font-size: var(--jp-ui-font-size1);
  line-height: var(--jp-private-toolbar-height);
  height: 100%;
}

/* Toolbar buttons */

/* This is the div we use to wrap the react component into a Widget */
div.jp-ToolbarButton {
  color: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px;
  margin: 0px;
}

button.jp-ToolbarButtonComponent {
  background: var(--jp-layout-color1);
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px 6px;
  margin: 0px;
  height: 24px;
  border-radius: var(--jp-border-radius);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  min-width: unset;
  min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
  opacity: 0.4;
}

button.jp-ToolbarButtonComponent span {
  padding: 0px;
  flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  padding-left: 2px;
  color: var(--jp-ui-font-color1);
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar.jp-Toolbar-micro {
  padding: 0;
  min-height: 0;
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar {
  border: none;
  box-shadow: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ body.p-mod-override-cursor *, /* </DEPRECATED> */
body.lm-mod-override-cursor * {
  cursor: inherit !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-JSONEditor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.jp-JSONEditor-host {
  flex: 1 1 auto;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  background: var(--jp-layout-color0);
  min-height: 50px;
  padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
  border-color: red;
  outline-color: red;
}

.jp-JSONEditor-header {
  display: flex;
  flex: 1 0 auto;
  padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
  flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
  height: 16px;
  width: 16px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
  background-color: var(--jp-input-active-background);
  border: 1px solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr;
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 4px; /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white; /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap;
}
.CodeMirror-linenumbers {}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker { color: black; }
.CodeMirror-guttermarker-subtle { color: #999; }

/* CURSOR */

.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0;
}
/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver;
}
.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7;
}
.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1;
}
.cm-fat-cursor-mark {
  background-color: rgba(20, 255, 20, 0.5);
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
}
.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7;
}
@-moz-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@-webkit-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}

/* Can style cursor different in overwrite (non-insert) mode */
.CodeMirror-overwrite .CodeMirror-cursor {}

.cm-tab { display: inline-block; text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0; right: 0; top: -50px; bottom: 0;
  overflow: hidden;
}
.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0; bottom: 0;
  position: absolute;
}

/* DEFAULT THEME */

.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {color: #708;}
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }

/* Default styles for common addons */

div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
.CodeMirror-activeline-background {background: #e8f2ff;}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 50px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -50px; margin-right: -50px;
  padding-bottom: 50px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 50px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
  outline: none;
}
.CodeMirror-vscrollbar {
  right: 0; top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0; left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0; bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0; bottom: 0;
}

.CodeMirror-gutters {
  position: absolute; left: 0; top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -50px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0; bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection { background-color: transparent }
.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-widget {}

.CodeMirror-rtl pre { direction: rtl; }

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre { position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected { background: #d9d9d9; }
.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
.CodeMirror-crosshair { cursor: crosshair; }
.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, .4);
}

/* Used to force a border model for a node */
.cm-force-border { padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after { content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext { background: none; }

.CodeMirror-dialog {
  position: absolute;
  left: 0; right: 0;
  background: inherit;
  z-index: 15;
  padding: .1em .8em;
  overflow: hidden;
  color: inherit;
}

.CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}

.CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}

.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}

.CodeMirror-dialog button {
  font-size: 70%;
}

.CodeMirror-foldmarker {
  color: blue;
  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
  font-family: arial;
  line-height: .3;
  cursor: pointer;
}
.CodeMirror-foldgutter {
  width: .7em;
}
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded {
  cursor: pointer;
}
.CodeMirror-foldgutter-open:after {
  content: "\\25BE";
}
.CodeMirror-foldgutter-folded:after {
  content: "\\25B8";
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.CodeMirror {
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  border: 0;
  border-radius: 0;
  height: auto;
  /* Changed to auto to autogrow */
}

.CodeMirror pre {
  padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-dialog {
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* This causes https://github.com/jupyter/jupyterlab/issues/522 */
/* May not cause it not because we changed it! */
.CodeMirror-lines {
  padding: var(--jp-code-padding) 0;
}

.CodeMirror-linenumber {
  padding: 0 8px;
}

.jp-CodeMirrorEditor {
  cursor: text;
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}

/* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width1) solid
      var(--jp-editor-cursor-color);
  }
}

/* When zoomed out less than 33% */
@media screen and (min-width: 4320px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width2) solid
      var(--jp-editor-cursor-color);
  }
}

.CodeMirror.jp-mod-readOnly .CodeMirror-cursor {
  display: none;
}

.CodeMirror-gutters {
  border-right: 1px solid var(--jp-border-color2);
  background-color: var(--jp-layout-color0);
}

.jp-CollaboratorCursor {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: none;
  border-bottom: 3px solid;
  background-clip: content-box;
  margin-left: -5px;
  margin-right: -5px;
}

.CodeMirror-selectedtext.cm-searching {
  background-color: var(--jp-search-selected-match-background-color) !important;
  color: var(--jp-search-selected-match-color) !important;
}

.cm-searching {
  background-color: var(
    --jp-search-unselected-match-background-color
  ) !important;
  color: var(--jp-search-unselected-match-color) !important;
}

.CodeMirror-focused .CodeMirror-selected {
  background-color: var(--jp-editor-selected-focused-background);
}

.CodeMirror-selected {
  background-color: var(--jp-editor-selected-background);
}

.jp-CollaboratorCursor-hover {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  color: white;
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  font-size: var(--jp-ui-font-size1);
  white-space: nowrap;
}

.jp-CodeMirror-ruler {
  border-left: 1px dashed var(--jp-border-color2);
}

/**
 * Here is our jupyter theme for CodeMirror syntax highlighting
 * This is used in our marked.js syntax highlighting and CodeMirror itself
 * The string "jupyter" is set in ../codemirror/widget.DEFAULT_CODEMIRROR_THEME
 * This came from the classic notebook, which came form highlight.js/GitHub
 */

/**
 * CodeMirror themes are handling the background/color in this way. This works
 * fine for CodeMirror editors outside the notebook, but the notebook styles
 * these things differently.
 */
.CodeMirror.cm-s-jupyter {
  background: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* In the notebook, we want this styling to be handled by its container */
.jp-CodeConsole .CodeMirror.cm-s-jupyter,
.jp-Notebook .CodeMirror.cm-s-jupyter {
  background: transparent;
}

.cm-s-jupyter .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}
.cm-s-jupyter span.cm-keyword {
  color: var(--jp-mirror-editor-keyword-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-atom {
  color: var(--jp-mirror-editor-atom-color);
}
.cm-s-jupyter span.cm-number {
  color: var(--jp-mirror-editor-number-color);
}
.cm-s-jupyter span.cm-def {
  color: var(--jp-mirror-editor-def-color);
}
.cm-s-jupyter span.cm-variable {
  color: var(--jp-mirror-editor-variable-color);
}
.cm-s-jupyter span.cm-variable-2 {
  color: var(--jp-mirror-editor-variable-2-color);
}
.cm-s-jupyter span.cm-variable-3 {
  color: var(--jp-mirror-editor-variable-3-color);
}
.cm-s-jupyter span.cm-punctuation {
  color: var(--jp-mirror-editor-punctuation-color);
}
.cm-s-jupyter span.cm-property {
  color: var(--jp-mirror-editor-property-color);
}
.cm-s-jupyter span.cm-operator {
  color: var(--jp-mirror-editor-operator-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-comment {
  color: var(--jp-mirror-editor-comment-color);
  font-style: italic;
}
.cm-s-jupyter span.cm-string {
  color: var(--jp-mirror-editor-string-color);
}
.cm-s-jupyter span.cm-string-2 {
  color: var(--jp-mirror-editor-string-2-color);
}
.cm-s-jupyter span.cm-meta {
  color: var(--jp-mirror-editor-meta-color);
}
.cm-s-jupyter span.cm-qualifier {
  color: var(--jp-mirror-editor-qualifier-color);
}
.cm-s-jupyter span.cm-builtin {
  color: var(--jp-mirror-editor-builtin-color);
}
.cm-s-jupyter span.cm-bracket {
  color: var(--jp-mirror-editor-bracket-color);
}
.cm-s-jupyter span.cm-tag {
  color: var(--jp-mirror-editor-tag-color);
}
.cm-s-jupyter span.cm-attribute {
  color: var(--jp-mirror-editor-attribute-color);
}
.cm-s-jupyter span.cm-header {
  color: var(--jp-mirror-editor-header-color);
}
.cm-s-jupyter span.cm-quote {
  color: var(--jp-mirror-editor-quote-color);
}
.cm-s-jupyter span.cm-link {
  color: var(--jp-mirror-editor-link-color);
}
.cm-s-jupyter span.cm-error {
  color: var(--jp-mirror-editor-error-color);
}
.cm-s-jupyter span.cm-hr {
  color: #999;
}

.cm-s-jupyter span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}

.cm-s-jupyter .CodeMirror-activeline-background,
.cm-s-jupyter .CodeMirror-gutter {
  background-color: var(--jp-layout-color2);
}

/* Styles for shared cursors (remote cursor locations and selected ranges) */
.jp-CodeMirrorEditor .remote-caret {
  position: relative;
  border-left: 2px solid black;
  margin-left: -1px;
  margin-right: -1px;
  box-sizing: border-box;
}

.jp-CodeMirrorEditor .remote-caret > div {
  white-space: nowrap;
  position: absolute;
  top: -1.15em;
  padding-bottom: 0.05em;
  left: -2px;
  font-size: 0.95em;
  background-color: rgb(250, 129, 0);
  font-family: var(--jp-ui-font-family);
  font-weight: bold;
  line-height: normal;
  user-select: none;
  color: white;
  padding-left: 2px;
  padding-right: 2px;
  z-index: 3;
  transition: opacity 0.3s ease-in-out;
}

.jp-CodeMirrorEditor .remote-caret.hide-name > div {
  transition-delay: 0.7s;
  opacity: 0;
}

.jp-CodeMirrorEditor .remote-caret:hover > div {
  opacity: 1;
  transition-delay: 0s;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------*/

:root {
  /* This is the padding value to fill the gaps between lines containing spans with background color. */
  --jp-private-code-span-padding: calc(
    (var(--jp-code-line-height) - 1) * var(--jp-code-font-size) / 2
  );
}

.jp-RenderedText {
  text-align: left;
  padding-left: var(--jp-code-padding);
  line-height: var(--jp-code-line-height);
  font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
  border: none;
  margin: 0px;
  padding: 0px;
}

.jp-RenderedText pre a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* console foregrounds and backgrounds */
.jp-RenderedText pre .ansi-black-fg {
  color: #3e424d;
}
.jp-RenderedText pre .ansi-red-fg {
  color: #e75c58;
}
.jp-RenderedText pre .ansi-green-fg {
  color: #00a250;
}
.jp-RenderedText pre .ansi-yellow-fg {
  color: #ddb62b;
}
.jp-RenderedText pre .ansi-blue-fg {
  color: #208ffb;
}
.jp-RenderedText pre .ansi-magenta-fg {
  color: #d160c4;
}
.jp-RenderedText pre .ansi-cyan-fg {
  color: #60c6c8;
}
.jp-RenderedText pre .ansi-white-fg {
  color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
  background-color: #3e424d;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-red-bg {
  background-color: #e75c58;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-green-bg {
  background-color: #00a250;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-yellow-bg {
  background-color: #ddb62b;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-blue-bg {
  background-color: #208ffb;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-magenta-bg {
  background-color: #d160c4;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-cyan-bg {
  background-color: #60c6c8;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-white-bg {
  background-color: #c5c1b4;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-black-intense-fg {
  color: #282c36;
}
.jp-RenderedText pre .ansi-red-intense-fg {
  color: #b22b31;
}
.jp-RenderedText pre .ansi-green-intense-fg {
  color: #007427;
}
.jp-RenderedText pre .ansi-yellow-intense-fg {
  color: #b27d12;
}
.jp-RenderedText pre .ansi-blue-intense-fg {
  color: #0065ca;
}
.jp-RenderedText pre .ansi-magenta-intense-fg {
  color: #a03196;
}
.jp-RenderedText pre .ansi-cyan-intense-fg {
  color: #258f8f;
}
.jp-RenderedText pre .ansi-white-intense-fg {
  color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
  background-color: #282c36;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-red-intense-bg {
  background-color: #b22b31;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-green-intense-bg {
  background-color: #007427;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-yellow-intense-bg {
  background-color: #b27d12;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-blue-intense-bg {
  background-color: #0065ca;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-magenta-intense-bg {
  background-color: #a03196;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-cyan-intense-bg {
  background-color: #258f8f;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-white-intense-bg {
  background-color: #a1a6b2;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
  color: var(--jp-ui-inverse-font-color0);
}
.jp-RenderedText pre .ansi-default-inverse-bg {
  background-color: var(--jp-inverse-layout-color0);
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-bold {
  font-weight: bold;
}
.jp-RenderedText pre .ansi-underline {
  text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
  background: var(--jp-rendermime-error-background);
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------*/

.jp-RenderedLatex {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
}

/* Left-justify outputs.*/
.jp-OutputArea-output.jp-RenderedLatex {
  padding: var(--jp-code-padding);
  text-align: left;
}

/*-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------*/

.jp-RenderedHTMLCommon {
  color: var(--jp-content-font-color1);
  font-family: var(--jp-content-font-family);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
  /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
  padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
  font-style: italic;
}

.jp-RenderedHTMLCommon strong {
  font-weight: bold;
}

.jp-RenderedHTMLCommon u {
  text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* Headings */

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
  line-height: var(--jp-content-heading-line-height);
  font-weight: var(--jp-content-heading-font-weight);
  font-style: normal;
  margin: var(--jp-content-heading-margin-top) 0
    var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
  margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
  margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
  font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
  font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
  font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
  font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
  font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
  font-size: var(--jp-content-font-size0);
}

/* Lists */

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
  padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
  list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
  list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
  list-style: circle;
}

.jp-RenderedHTMLCommon ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
  list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
  list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
  list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
  margin-bottom: 0em;
}

.jp-RenderedHTMLCommon hr {
  color: var(--jp-border-color2);
  background-color: var(--jp-border-color1);
  margin-top: 1em;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
  margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
  border: 0;
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  line-height: var(--jp-code-line-height);
  padding: 0;
  white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
  background-color: var(--jp-layout-color2);
  padding: 1px 5px;
}

/* Tables */

.jp-RenderedHTMLCommon table {
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  color: var(--jp-ui-font-color1);
  font-size: 12px;
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
  max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
  text-align: right;
}

.jp-RenderedHTMLCommon th {
  font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
  background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
  background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
  background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon table {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon p {
  text-align: left;
  margin: 0px;
}

.jp-RenderedHTMLCommon p {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
  -moz-force-broken-image-icon: 1;
}

/* Restrict to direct children as other images could be nested in other content. */
.jp-RenderedHTMLCommon > img {
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1em;
}

/* Change color behind transparent images if they need it... */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
  background-color: var(--jp-inverse-layout-color1);
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
  background-color: var(--jp-inverse-layout-color1);
}
/* ...or leave it untouched if they don't */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-dark-background {
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-light-background {
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
  max-width: 100%;
  height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
  max-width: none;
}

.jp-RenderedHTMLCommon .alert {
  padding: var(--jp-notebook-padding);
  border: var(--jp-border-width) solid transparent;
  border-radius: var(--jp-border-radius);
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
  color: var(--jp-info-color0);
  background-color: var(--jp-info-color3);
  border-color: var(--jp-info-color2);
}
.jp-RenderedHTMLCommon .alert-info hr {
  border-color: var(--jp-info-color3);
}
.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
  color: var(--jp-warn-color0);
  background-color: var(--jp-warn-color3);
  border-color: var(--jp-warn-color2);
}
.jp-RenderedHTMLCommon .alert-warning hr {
  border-color: var(--jp-warn-color3);
}
.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
  color: var(--jp-success-color0);
  background-color: var(--jp-success-color3);
  border-color: var(--jp-success-color2);
}
.jp-RenderedHTMLCommon .alert-success hr {
  border-color: var(--jp-success-color3);
}
.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
  color: var(--jp-error-color0);
  background-color: var(--jp-error-color3);
  border-color: var(--jp-error-color2);
}
.jp-RenderedHTMLCommon .alert-danger hr {
  border-color: var(--jp-error-color3);
}
.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
  margin: 1em 2em;
  padding: 0 1em;
  border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
  visibility: hidden;
  margin-left: 8px;
  color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
  visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
  background-color: var(--jp-rendermime-table-row-background);
  border: 1px solid var(--jp-border-color0);
  border-bottom-color: var(--jp-border-color2);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 0.8em;
  line-height: 1em;
  padding: 0.2em 0.5em;
}

/* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
 * At the bottom of cells this is a bit too much as there is also spacing
 * between cells. Going all the way to 0 gets too tight between markdown and
 * code cells.
 */
.jp-RenderedHTMLCommon > *:last-child {
  margin-bottom: 0.5em;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MimeDocument {
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-filebrowser-button-height: 28px;
  --jp-private-filebrowser-button-width: 48px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FileBrowser {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  border-bottom: none;
  height: auto;
  margin: var(--jp-toolbar-header-margin);
  box-shadow: none;
}

.jp-BreadCrumbs {
  flex: 0 0 auto;
  margin: 8px 12px 8px 12px;
}

.jp-BreadCrumbs-item {
  margin: 0px 2px;
  padding: 0px 2px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
  margin-left: 0px;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
  background-color: var(--jp-brand-color2);
  opacity: 0.7;
}

/*-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------*/

.jp-FileBrowser-toolbar.jp-Toolbar {
  padding: 0px;
  margin: 8px 12px 0px 12px;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  justify-content: flex-start;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-Toolbar-item {
  flex: 0 0 auto;
  padding-left: 0px;
  padding-right: 2px;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {
  width: 40px;
}

.jp-FileBrowser-toolbar.jp-Toolbar
  .jp-Toolbar-item:first-child
  .jp-ToolbarButtonComponent {
  width: 72px;
  background: var(--jp-brand-color1);
}

.jp-FileBrowser-toolbar.jp-Toolbar
  .jp-Toolbar-item:first-child
  .jp-ToolbarButtonComponent:focus-visible {
  background-color: var(--jp-brand-color0);
}

.jp-FileBrowser-toolbar.jp-Toolbar
  .jp-Toolbar-item:first-child
  .jp-ToolbarButtonComponent
  .jp-icon3 {
  fill: white;
}

/*-----------------------------------------------------------------------------
| Other styles
|----------------------------------------------------------------------------*/

.jp-FileDialog.jp-mod-conflict input {
  color: var(--jp-error-color1);
}

.jp-FileDialog .jp-new-name-title {
  margin-top: 12px;
}

.jp-LastModified-hidden {
  display: none;
}

.jp-FileBrowser-filterBox {
  padding: 0px;
  flex: 0 0 auto;
  margin: 8px 12px 0px 12px;
}

/*-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------*/

.jp-DirListing {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  outline: 0;
}

.jp-DirListing:focus-visible {
  border: 1px solid var(--jp-brand-color1);
}

.jp-DirListing-header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-top: var(--jp-border-width) solid var(--jp-border-color2);
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.jp-DirListing-headerItem {
  padding: 4px 12px 2px 12px;
  font-weight: 500;
}

.jp-DirListing-headerItem:hover {
  background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
  flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
  flex: 0 0 112px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-id-narrow {
  display: none;
  flex: 0 0 5px;
  padding: 4px 4px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
  color: var(--jp-border-color2);
}

.jp-DirListing-narrow .jp-id-narrow {
  display: block;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
  display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
  font-weight: 600;
}

/* increase specificity to override bundled default */
.jp-DirListing-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-DirListing-content mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.jp-DirListing-content .jp-DirListing-item.jp-mod-selected mark {
  color: var(--jp-ui-inverse-font-color0);
}

/* Style the directory listing content when a user drops a file to upload */
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
  outline: 5px dashed rgba(128, 128, 128, 0.5);
  outline-offset: -10px;
  cursor: copy;
}

.jp-DirListing-item {
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-DirListing-item[data-is-dot] {
  opacity: 75%;
}

.jp-DirListing-item.jp-mod-selected {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
  background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
  background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
  flex: 0 0 20px;
  margin-right: 4px;
}

.jp-DirListing-itemText {
  flex: 1 0 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.jp-DirListing-itemModified {
  flex: 0 0 125px;
  text-align: right;
}

.jp-DirListing-editor {
  flex: 1 0 64px;
  outline: none;
  border: none;
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon:before {
  color: var(--jp-success-color1);
  content: '\\25CF';
  font-size: 8px;
  position: absolute;
  left: -8px;
}

.jp-DirListing-item.jp-mod-running.jp-mod-selected
  .jp-DirListing-itemIcon:before {
  color: var(--jp-ui-inverse-font-color1);
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
  font-size: var(--jp-ui-font-size1);
  padding-left: 4px;
  margin-left: 4px;
  width: 160px;
  background-color: var(--jp-ui-inverse-font-color2);
  box-shadow: var(--jp-elevation-z2);
  border-radius: 0px;
  color: var(--jp-ui-font-color1);
  transform: translateX(-40%) translateY(-58%);
}

.jp-DirListing-deadSpace {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-Document {
  min-width: 120px;
  min-height: 120px;
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
}

/*-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------*/

.jp-OutputArea {
  overflow-y: auto;
}

.jp-OutputArea-child {
  display: flex;
  flex-direction: row;
}

body[data-format='mobile'] .jp-OutputArea-child {
  flex-direction: column;
}

.jp-OutputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-outprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body[data-format='mobile'] .jp-OutputPrompt {
  flex: 0 0 auto;
  text-align: left;
}

.jp-OutputArea-output {
  height: auto;
  overflow: auto;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.jp-OutputArea-child .jp-OutputArea-output {
  flex-grow: 1;
  flex-shrink: 1;
}

body[data-format='mobile'] .jp-OutputArea-child .jp-OutputArea-output {
  margin-left: var(--jp-notebook-padding);
}

/**
 * Isolated output.
 */
.jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
}

/*
When drag events occur, \`p-mod-override-cursor\` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
  position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/* pre */

.jp-OutputArea-output pre {
  border: none;
  margin: 0px;
  padding: 0px;
  overflow-x: auto;
  overflow-y: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* tables */

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
  margin-left: 0;
  margin-right: 0;
}

/* description lists */

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
  display: block;
}

.jp-OutputArea-output dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dt {
  font-weight: bold;
  float: left;
  width: 20%;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dd {
  float: left;
  width: 80%;
  padding: 0;
  margin: 0;
}

/* Hide the gutter in case of
 *  - nested output areas (e.g. in the case of output widgets)
 *  - mirrored output areas
 */
.jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
  display: none;
}

/*-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------*/

.jp-OutputArea-output.jp-OutputArea-executeResult {
  margin-left: 0px;
  flex: 1 1 auto;
}

/* Text output with the Out[] prompt needs a top padding to match the
 * alignment of the Out[] prompt itself.
 */
.jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
  border-top: var(--jp-border-width) solid transparent;
}

/*-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------*/

.jp-OutputArea-stdin {
  line-height: var(--jp-code-line-height);
  padding-top: var(--jp-code-padding);
  display: flex;
}

.jp-Stdin-prompt {
  color: var(--jp-content-font-color0);
  padding-right: var(--jp-code-padding);
  vertical-align: baseline;
  flex: 0 0 auto;
}

.jp-Stdin-input {
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  width: 42%;
  min-width: 200px;
  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;
  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0em 0.25em;
  margin: 0em 0.25em;
  flex: 0 0 70%;
}

.jp-Stdin-input:focus {
  box-shadow: none;
}

/*-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------*/

.jp-LinkedOutputView .jp-OutputArea {
  height: 100%;
  display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
  height: 100%;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapser {
  flex: 0 0 var(--jp-cell-collapser-width);
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: var(--jp-border-radius);
  opacity: 1;
}

.jp-Collapser-child {
  display: block;
  width: 100%;
  box-sizing: border-box;
  /* height: 100% doesn't work because the height of its parent is computed from content */
  position: absolute;
  top: 0px;
  bottom: 0px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------*/

/* Hidden by zero height by default */
.jp-CellHeader,
.jp-CellFooter {
  height: 0px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------*/

/* All input areas */
.jp-InputArea {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

body[data-format='mobile'] .jp-InputArea {
  flex-direction: column;
}

.jp-InputArea-editor {
  flex: 1 1 auto;
  overflow: hidden;
}

.jp-InputArea-editor {
  /* This is the non-active, default styling */
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0px;
  background: var(--jp-cell-editor-background);
}

body[data-format='mobile'] .jp-InputArea-editor {
  margin-left: var(--jp-notebook-padding);
}

.jp-InputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-inprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  opacity: var(--jp-cell-prompt-opacity);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body[data-format='mobile'] .jp-InputPrompt {
  flex: 0 0 auto;
  text-align: left;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Placeholder {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
}

.jp-Placeholder-prompt {
  box-sizing: border-box;
}

.jp-Placeholder-content {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  height: 20px;
  box-sizing: border-box;
}

.jp-Placeholder-content .jp-MoreHorizIcon {
  width: 32px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
  border: 1px solid var(--jp-border-color1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--jp-layout-color0);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-cell-scrolling-output-offset: 5px;
}

/*-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------*/

.jp-Cell {
  padding: var(--jp-cell-padding);
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------*/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  /* Added to reveal the box-shadow on the input and output collapsers. */
  overflow: visible;
}

/* Only input/output areas inside cells */
.jp-Cell-inputArea,
.jp-Cell-outputArea {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------*/

/* Make the output collapser disappear when there is not output, but do so
 * in a manner that leaves it in the layout and preserves its width.
 */
.jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
}

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
  min-height: var(--jp-cell-collapser-min-height);
}

/*-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------*/

/* Put a space between input and output when there IS output */
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
  margin-top: 5px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
  overflow-y: auto;
  max-height: 200px;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
  margin-left: var(--jp-private-cell-scrolling-output-offset);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  flex: 0 0
    calc(
      var(--jp-cell-prompt-width) -
        var(--jp-private-cell-scrolling-output-offset)
    );
}

/*-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------*/

.jp-MarkdownOutput {
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
  overflow: auto;
}

.jp-showHiddenCellsButton {
  margin-left: calc(var(--jp-cell-prompt-width) + 2 * var(--jp-code-padding));
  margin-top: var(--jp-code-padding);
  border: 1px solid var(--jp-border-color2);
  background-color: var(--jp-border-color3) !important;
  color: var(--jp-content-font-color0) !important;
}

.jp-showHiddenCellsButton:hover {
  background-color: var(--jp-border-color2) !important;
}

.jp-collapseHeadingButton {
  display: none;
}

.jp-MarkdownCell:hover .jp-collapseHeadingButton {
  display: flex;
  min-height: var(--jp-cell-collapser-min-height);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-NotebookPanel-toolbar {
  padding: 2px;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
  border: none;
  box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
  height: 24px;
  font-size: var(--jp-ui-font-size1);
  line-height: 14px;
  border-radius: 0;
  display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
  top: 5px !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-notebook-dragImage-width: 304px;
  --jp-private-notebook-dragImage-height: 36px;
  --jp-private-notebook-selected-color: var(--md-blue-400);
  --jp-private-notebook-active-color: var(--md-green-400);
}

/*-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------*/

.jp-NotebookPanel {
  display: block;
  height: 100%;
}

.jp-NotebookPanel.jp-Document {
  min-width: 240px;
  min-height: 120px;
}

.jp-Notebook {
  padding: var(--jp-notebook-padding);
  outline: none;
  overflow: auto;
  background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
  display: block;
  content: '';
  min-height: var(--jp-notebook-scroll-padding);
}

.jp-MainAreaWidget-ContainStrict .jp-Notebook * {
  contain: strict;
}

.jp-Notebook-render * {
  contain: none !important;
}

.jp-Notebook .jp-Cell {
  overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
  cursor: move;
  float: left;
}

/*-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
|   - Command
|   - Edit
| - Cell
|   - None
|   - Active (only one can be active)
|   - Selected (the cells actions are applied to)
|   - Multiselected (when multiple selected, the cursor)
|   - No outputs
|----------------------------------------------------------------------------*/

/* Command or edit modes */

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

/* cell is active */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
  background: var(--jp-brand-color1);
}

/* cell is dirty */
.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt {
  color: var(--jp-warn-color1);
}
.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt:before {
  color: var(--jp-warn-color1);
  content: '\u2022';
}

.jp-Notebook .jp-Cell.jp-mod-active.jp-mod-dirty .jp-Collapser {
  background: var(--jp-warn-color1);
}

/* collapser is hovered */
.jp-Notebook .jp-Cell .jp-Collapser:hover {
  box-shadow: var(--jp-elevation-z2);
  background: var(--jp-brand-color1);
  opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/* cell is active and collapser is hovered */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/* Command mode */

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
  background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
  background: transparent;
}

/* Edit mode */

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-cell-editor-active-background);
}

/*-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------*/

.jp-Notebook-cell.jp-mod-dropSource {
  opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
  .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
  border-top-color: var(--jp-private-notebook-selected-color);
  border-top-style: solid;
  border-top-width: 2px;
}

.jp-dragImage {
  display: block;
  flex-direction: row;
  width: var(--jp-private-notebook-dragImage-width);
  height: var(--jp-private-notebook-dragImage-height);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
  overflow: visible;
}

.jp-dragImage-singlePrompt {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
  flex: 1 1 auto;
  z-index: 2;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
  padding: var(--jp-code-padding);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background-color);
  color: var(--jp-content-font-color3);
  text-align: left;
  margin: 4px 4px 4px 0px;
}

.jp-dragImage .jp-dragImage-prompt {
  flex: 0 0 auto;
  min-width: 36px;
  color: var(--jp-cell-inprompt-font-color);
  padding: var(--jp-code-padding);
  padding-left: 12px;
  font-family: var(--jp-cell-prompt-font-family);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: 1.9;
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
  z-index: -1;
  position: absolute;
  height: 32px;
  width: 300px;
  top: 8px;
  left: 8px;
  background: var(--jp-layout-color2);
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

/*-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------*/

.jp-NotebookTools {
  display: block;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
    * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

.jp-NotebookTools-tool {
  padding: 0px 12px 0 12px;
}

.jp-ActiveCellTool {
  padding: 12px;
  background-color: var(--jp-layout-color1);
  border-top: none !important;
}

.jp-ActiveCellTool .jp-InputArea-prompt {
  flex: 0 0 auto;
  padding-left: 0px;
}

.jp-ActiveCellTool .jp-InputArea-editor {
  flex: 1 1 auto;
  background: var(--jp-cell-editor-background);
  border-color: var(--jp-cell-editor-border-color);
}

.jp-ActiveCellTool .jp-InputArea-editor .CodeMirror {
  background: transparent;
}

.jp-MetadataEditorTool {
  flex-direction: column;
  padding: 12px 0px 12px 0px;
}

.jp-RankedPanel > :not(:first-child) {
  margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label {
  line-height: 1.4;
}

.jp-NotebookTools .jp-select-wrapper {
  margin-top: 4px;
  margin-bottom: 0px;
}

.jp-NotebookTools .jp-Collapse {
  margin-top: 16px;
}

/*-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------*/

.jp-mod-presentationMode .jp-Notebook {
  --jp-content-font-size1: var(--jp-content-presentation-font-size1);
  --jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
  flex: 0 0 110px;
}

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Cell-Placeholder {
  padding-left: 55px;
}

.jp-Cell-Placeholder-wrapper {
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 10px 15px;
}

.jp-Cell-Placeholder-wrapper-inner {
  padding: 15px;
  position: relative;
}

.jp-Cell-Placeholder-wrapper-body {
  background-repeat: repeat;
  background-size: 50% auto;
}

.jp-Cell-Placeholder-wrapper-body div {
  background: #f6f7f8;
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  height: 104px;
  position: relative;
}

.jp-Cell-Placeholder-wrapper-body div {
  position: absolute;
  right: 15px;
  left: 15px;
  top: 15px;
}

div.jp-Cell-Placeholder-h1 {
  top: 20px;
  height: 20px;
  left: 15px;
  width: 150px;
}

div.jp-Cell-Placeholder-h2 {
  left: 15px;
  top: 50px;
  height: 10px;
  width: 100px;
}

div.jp-Cell-Placeholder-content-1,
div.jp-Cell-Placeholder-content-2,
div.jp-Cell-Placeholder-content-3 {
  left: 15px;
  right: 15px;
  height: 10px;
}

div.jp-Cell-Placeholder-content-1 {
  top: 100px;
}

div.jp-Cell-Placeholder-content-2 {
  top: 120px;
}

div.jp-Cell-Placeholder-content-3 {
  top: 140px;
}

</style>

    <style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, \`--jp-border-color1\` should
be used with \`--jp-layout-color1\`. The numbers have the following meanings:

* 0: super-primary, reserved for special emphasis
* 1: primary, most important under normal situations
* 2: secondary, next most important under normal situations
* 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
*/

:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-shadow-base-lightness: 0;
  --jp-shadow-umbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.2
  );
  --jp-shadow-penumbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.14
  );
  --jp-shadow-ambient-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.12
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1: 0px 2px 1px -1px var(--jp-shadow-umbra-color),
    0px 1px 1px 0px var(--jp-shadow-penumbra-color),
    0px 1px 3px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z2: 0px 3px 1px -2px var(--jp-shadow-umbra-color),
    0px 2px 2px 0px var(--jp-shadow-penumbra-color),
    0px 1px 5px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z4: 0px 2px 4px -1px var(--jp-shadow-umbra-color),
    0px 4px 5px 0px var(--jp-shadow-penumbra-color),
    0px 1px 10px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z6: 0px 3px 5px -1px var(--jp-shadow-umbra-color),
    0px 6px 10px 0px var(--jp-shadow-penumbra-color),
    0px 1px 18px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z8: 0px 5px 5px -3px var(--jp-shadow-umbra-color),
    0px 8px 10px 1px var(--jp-shadow-penumbra-color),
    0px 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12: 0px 7px 8px -4px var(--jp-shadow-umbra-color),
    0px 12px 17px 2px var(--jp-shadow-penumbra-color),
    0px 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16: 0px 8px 10px -5px var(--jp-shadow-umbra-color),
    0px 16px 24px 2px var(--jp-shadow-penumbra-color),
    0px 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20: 0px 10px 13px -6px var(--jp-shadow-umbra-color),
    0px 20px 31px 3px var(--jp-shadow-penumbra-color),
    0px 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24: 0px 11px 15px -7px var(--jp-shadow-umbra-color),
    0px 24px 38px 3px var(--jp-shadow-penumbra-color),
    0px 9px 46px 8px var(--jp-shadow-ambient-color);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-400);
  --jp-border-color1: var(--md-grey-400);
  --jp-border-color2: var(--md-grey-300);
  --jp-border-color3: var(--md-grey-200);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.83333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 1.2em;
  --jp-ui-font-size3: 1.44em;

  --jp-ui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgba(0, 0, 0, 1);
  --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
  --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
  --jp-ui-font-color3: rgba(0, 0, 0, 0.38);

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
  --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.83333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;

  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgba(0, 0, 0, 1);
  --jp-content-font-color1: rgba(0, 0, 0, 0.87);
  --jp-content-font-color2: rgba(0, 0, 0, 0.54);
  --jp-content-font-color3: rgba(0, 0, 0, 0.38);

  --jp-content-link-color: var(--md-blue-700);

  --jp-content-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: white;
  --jp-layout-color1: white;
  --jp-layout-color2: var(--md-grey-200);
  --jp-layout-color3: var(--md-grey-400);
  --jp-layout-color4: var(--md-grey-600);

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: #111111;
  --jp-inverse-layout-color1: var(--md-grey-900);
  --jp-inverse-layout-color2: var(--md-grey-800);
  --jp-inverse-layout-color3: var(--md-grey-700);
  --jp-inverse-layout-color4: var(--md-grey-600);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-900);
  --jp-brand-color1: var(--md-blue-700);
  --jp-brand-color2: var(--md-blue-300);
  --jp-brand-color3: var(--md-blue-100);
  --jp-brand-color4: var(--md-blue-50);

  --jp-accent-color0: var(--md-green-900);
  --jp-accent-color1: var(--md-green-700);
  --jp-accent-color2: var(--md-green-300);
  --jp-accent-color3: var(--md-green-100);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-900);
  --jp-warn-color1: var(--md-orange-700);
  --jp-warn-color2: var(--md-orange-300);
  --jp-warn-color3: var(--md-orange-100);

  --jp-error-color0: var(--md-red-900);
  --jp-error-color1: var(--md-red-700);
  --jp-error-color2: var(--md-red-300);
  --jp-error-color3: var(--md-red-100);

  --jp-success-color0: var(--md-green-900);
  --jp-success-color1: var(--md-green-700);
  --jp-success-color2: var(--md-green-300);
  --jp-success-color3: var(--md-green-100);

  --jp-info-color0: var(--md-cyan-900);
  --jp-info-color1: var(--md-cyan-700);
  --jp-info-color2: var(--md-cyan-300);
  --jp-info-color3: var(--md-cyan-100);

  /* Cell specific styles */

  --jp-cell-padding: 5px;

  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;

  --jp-cell-editor-background: var(--md-grey-100);
  --jp-cell-editor-border-color: var(--md-grey-300);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);

  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: var(--jp-code-font-family-default);
  --jp-cell-prompt-letter-spacing: 0px;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 0.5;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-700);
  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;
  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: var(--md-blue-50);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: #fdd;
  --jp-rendermime-table-row-background: var(--md-grey-100);
  --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

  /* Dialog specific styles */

  --jp-dialog-background: rgba(0, 0, 0, 0.25);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color1);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.24);
  --jp-toolbar-header-margin: 4px 4px 0px 4px;
  --jp-toolbar-active-background: var(--md-grey-300);

  /* Statusbar specific styles */

  --jp-statusbar-height: 24px;

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-input-active-background: var(--jp-layout-color1);
  --jp-input-hover-background: var(--jp-layout-color1);
  --jp-input-background: var(--md-grey-100);
  --jp-input-border-color: var(--jp-border-color1);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

  /* General editor styles */

  --jp-editor-selected-background: #d9d9d9;
  --jp-editor-selected-focused-background: #d7d4f0;
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: #008000;
  --jp-mirror-editor-atom-color: #88f;
  --jp-mirror-editor-number-color: #080;
  --jp-mirror-editor-def-color: #00f;
  --jp-mirror-editor-variable-color: var(--md-grey-900);
  --jp-mirror-editor-variable-2-color: #05a;
  --jp-mirror-editor-variable-3-color: #085;
  --jp-mirror-editor-punctuation-color: #05a;
  --jp-mirror-editor-property-color: #05a;
  --jp-mirror-editor-operator-color: #aa22ff;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ba2121;
  --jp-mirror-editor-string-2-color: #708;
  --jp-mirror-editor-meta-color: #aa22ff;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: #008000;
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: #170;
  --jp-mirror-editor-attribute-color: #00c;
  --jp-mirror-editor-header-color: blue;
  --jp-mirror-editor-quote-color: #090;
  --jp-mirror-editor-link-color: #00c;
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /* Vega extension styles */

  --jp-vega-background: white;

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 250px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.5;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(245, 200, 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600);
  --jp-icon-contrast-color1: var(--md-green-600);
  --jp-icon-contrast-color2: var(--md-pink-600);
  --jp-icon-contrast-color3: var(--md-blue-600);
}
</style>

<style type="text/css">
/* Force rendering true colors when outputing to pdf */
* {
  -webkit-print-color-adjust: exact;
}

/* Misc */
a.anchor-link {
  display: none;
}

/* Input area styling */
.jp-InputArea {
  overflow: hidden;
}

.jp-InputArea-editor {
  overflow: hidden;
}

.CodeMirror.cm-s-jupyter .highlight pre {
/* weird, but --jp-code-padding defined to be 5px but 4px horizontal padding is hardcoded for pre.CodeMirror-line */
  padding: var(--jp-code-padding) 4px;
  margin: 0;

  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;

}

.jp-OutputArea-output pre {
  line-height: inherit;
  font-family: inherit;
}

.jp-RenderedText pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
}

/* Using table instead of flexbox so that we can use break-inside property */
/* CSS rules under this comment should not be required anymore after we move to the JupyterLab 4.0 CSS */


.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  min-width: calc(
    var(--jp-cell-prompt-width) - var(--jp-private-cell-scrolling-output-offset)
  );
}

.jp-OutputArea-child {
  display: table;
  width: 100%;
}

.jp-OutputPrompt {
  display: table-cell;
  vertical-align: top;
  min-width: var(--jp-cell-prompt-width);
}

body[data-format='mobile'] .jp-OutputPrompt {
  display: table-row;
}

.jp-OutputArea-output {
  display: table-cell;
  width: 100%;
}

body[data-format='mobile'] .jp-OutputArea-child .jp-OutputArea-output {
  display: table-row;
}

.jp-OutputArea-output.jp-OutputArea-executeResult {
  width: 100%;
}

/* Hiding the collapser by default */
.jp-Collapser {
  display: none;
}

@media print {
  .jp-Cell-inputWrapper,
  .jp-Cell-outputWrapper {
    display: block;
  }

  .jp-OutputArea-child {
    break-inside: avoid-page;
  }
}
</style>

<!-- Load mathjax -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"> <\/script>
    <!-- MathJax configuration -->
    <script type="text/x-mathjax-config">
    init_mathjax = function() {
        if (window.MathJax) {
        // MathJax loaded
            MathJax.Hub.Config({
                TeX: {
                    equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                    }
                },
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\\\(","\\\\)"] ],
                    displayMath: [ ['$$','$$'], ["\\\\[","\\\\]"] ],
                    processEscapes: true,
                    processEnvironments: true
                },
                displayAlign: 'center',
                CommonHTML: {
                    linebreaks: {
                    automatic: true
                    }
                }
            });

            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }
    init_mathjax();
    <\/script>
    <!-- End of mathjax configuration --></head>
<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">

<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h1 id="Empirical-growth-testing">Empirical growth testing<a class="anchor-link" href="#Empirical-growth-testing">&#182;</a></h1>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The <a href="https://en.wikipedia.org/wiki/Time_complexity">time</a> and <a href="https://en.wikipedia.org/wiki/Computational_complexity">computational</a> complexity are critical fields of algorithms research since birth of computer science. However in modern world where applications are more and more often implemented as sets of communicating services (or processes) without hard guarantees the message delivery time direct analysis becomes problematic. But since hardware or software update can change behaviour of whole system, the need to estimate scalability of the new solution is still present. In this document I show methods I have created to:</p>
<ul>
<li>Phase 1: find out which of implementations showing signs of bad scalability(exponetial growth)</li>
<li>Phase 2: compare implementations with the polynomial scalability (find degree of polynomial)</li>
</ul>
<p>based on regular empirical sample we can get from a standard testing.</p>
<p>In the phase 1 we we assume null hypothesis that the growth is not at least exponential, if we are able to reject it algorithm is not interesting for us. Else we go to the phase 2 where we try to estimate if the growth is polynomial and what is the degree of the polynomial (useful for comparison to other algorithms). We assume that a checked algorithm needs for resources grows monotically with the amount of data we are processing. In the case the measure errors break this assumption you can use <a href="https://en.wikipedia.org/wiki/Isotonic_regression">isotonic regression</a> to create good values.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<div style="text-align: right"> Best wishes <br/> 
<a href="http://zxama.qr.ai/">Mathias Green</a>
</div>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[1]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">sympy</span> <span class="k">as</span> <span class="nn">sp</span>
<span class="kn">import</span> <span class="nn">scipy</span> <span class="k">as</span> <span class="nn">sc</span>
<span class="kn">from</span> <span class="nn">scipy</span> <span class="kn">import</span> <span class="n">optimize</span>
<span class="kn">from</span> <span class="nn">sympy</span> <span class="kn">import</span> <span class="n">limit</span><span class="p">,</span> <span class="n">sin</span><span class="p">,</span> <span class="n">Symbol</span><span class="p">,</span> <span class="n">oo</span>
<span class="n">sp</span><span class="o">.</span><span class="n">init_printing</span><span class="p">(</span><span class="n">use_latex</span><span class="o">=</span><span class="s1">'mathjax'</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Phase-1:-Exponetial-growth-testing">Phase 1: Exponetial growth testing<a class="anchor-link" href="#Phase-1:-Exponetial-growth-testing">&#182;</a></h3>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We know that we know that f is monotonicly growing function, so we can present it as $f(x)=e^{g(x)}$. Which gives:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\nonumber\\ln(f(x))=\\ln(e^{g(x)})=g(x)\\end{equation}
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The f is monotonicly growing function, so $\\forall_{x&gt;0} g(x) &gt; 1$. If the growth of $g$ is constant or increasing then $f$ grows exponetially or faster.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>So we can present the growth as derivatives:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\tag{1}\\frac{d}{dx}\\ln(f(x))=\\frac{d}{dx}(\\ln(e^{g(x)}))=\\frac{d}{dx}g(x)\\end{equation}<p><a id='log_identity'></a></p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Since $g$ is growing:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\nonumber \\frac{d}{dx}g(x)\\geq 0\\end{equation}
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>If $\\frac{d}{dx}g(x)$ goes to $\\infty$ the $f$ grows exponentially or more. Lets assume that $\\exists l&gt;0$ so:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\tag{2}\\lim_{x\\to \\infty}\\frac{d}{dx}g(x)=l\\end{equation}<p><a id='l_eq'></a></p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can give $h(x)= l\\cdot x - k$ with $k$ big enough, so $\\forall_{x&gt;0}\\ h(x) \\leq g(x)$.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Since $e^{h(x)}$ grows at least exponetially, so $f$ does.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>So if $\\frac{d}{dx}g(x)$ goes towards limit higher than $0$ it means the $f$ grows at least exponentially.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can also point out that if $g(x)=ln(x^n)$ then:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\nonumber f(x)=e^{ln(x^n)}=e^{n\\cdot ln(x)}=x^n\\end{equation}
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>It means $f$ has at most polynomial growth if g(x) if $g$ has at most logaritmic growth.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can use sympy(or other CAS) to estimate cooefficients in above considerations. Lets assume exponetially growing $f$ has form:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\nonumber f(x)=b\\cdot e^{c\\cdot (x^s)}+d\\end{equation}
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[2]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">a</span><span class="p">,</span><span class="n">b</span><span class="p">,</span><span class="n">c</span><span class="p">,</span><span class="n">d</span><span class="p">,</span><span class="n">s</span><span class="p">,</span><span class="n">x</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s1">'a b c d s x'</span><span class="p">)</span>
<span class="n">SymF</span> <span class="o">=</span> <span class="n">b</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="n">s</span><span class="p">))</span><span class="o">+</span><span class="n">d</span>
<span class="n">SymF</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[2]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$b^{c x^{s}} + d$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>And \\begin{equation}\\nonumber g(x)=\\log_a({f(x)})\\end{equation}</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[3]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">SymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">SymF</span><span class="p">,</span><span class="n">a</span><span class="p">)</span>
<span class="n">SymG</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[3]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\frac{\\log{\\left (b^{c x^{s}} + d \\right )}}{\\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[4]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">DSymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">diff</span><span class="p">(</span><span class="n">SymG</span><span class="p">,</span><span class="n">x</span><span class="p">)</span>
<span class="n">DSymG</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[4]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\frac{b^{c x^{s}} c s x^{s} \\log{\\left (b \\right )}}{x \\left(b^{c x^{s}} + d\\right) \\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[5]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">try</span><span class="p">:</span>
    <span class="n">sp</span><span class="o">.</span><span class="n">limit</span><span class="p">(</span><span class="n">DSymG</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">oo</span><span class="p">)</span>
<span class="k">except</span> <span class="ne">Exception</span> <span class="k">as</span> <span class="n">inst</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="n">inst</span><span class="o">.</span><span class="n">__context__</span><span class="p">)</span>  
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>Result depends on the sign of sign(s)
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can assume that all the values are positive and the $b$ is bigger than $0$.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Lets check $s=1$:</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[6]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">a</span><span class="p">,</span><span class="n">b</span><span class="p">,</span><span class="n">c</span><span class="p">,</span><span class="n">d</span><span class="p">,</span><span class="n">s</span><span class="p">,</span><span class="n">x</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s1">'a b c d s x'</span><span class="p">,</span> <span class="n">positive</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">SymF</span> <span class="o">=</span> <span class="p">(</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="p">(</span><span class="mi">1</span><span class="p">)))</span><span class="o">+</span><span class="n">d</span>
<span class="n">SymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">SymF</span><span class="p">,</span><span class="n">a</span><span class="p">)</span>
<span class="n">DSymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">diff</span><span class="p">(</span><span class="n">SymG</span><span class="p">,</span><span class="n">x</span><span class="p">)</span>
<span class="n">DSymG</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[6]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\frac{c \\left(b + 1\\right)^{c x} \\log{\\left (b + 1 \\right )}}{\\left(d + \\left(b + 1\\right)^{c x}\\right) \\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[7]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sp</span><span class="o">.</span><span class="n">limit</span><span class="p">(</span><span class="n">DSymG</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">oo</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[7]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\frac{c \\log{\\left (b + 1 \\right )}}{\\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can try to estimate how fast the function aproaches limit:</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">p</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s1">'p'</span><span class="p">,</span> <span class="n">positive</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">DSymGP</span> <span class="o">=</span> <span class="n">DSymG</span><span class="o">.</span><span class="n">subs</span><span class="p">((</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="n">x</span><span class="p">),</span><span class="n">p</span><span class="p">)</span>
<span class="n">sp</span><span class="o">.</span><span class="n">apart</span><span class="p">(</span><span class="n">DSymGP</span><span class="p">,</span><span class="n">p</span><span class="p">)</span><span class="o">.</span><span class="n">subs</span><span class="p">(</span><span class="n">p</span><span class="p">,(</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="n">x</span><span class="p">))</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[8]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$- \\frac{c d \\log{\\left (b + 1 \\right )}}{\\left(d + \\left(b + 1\\right)^{c x}\\right) \\log{\\left (a \\right )}} + \\frac{c \\log{\\left (b + 1 \\right )}}{\\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>It looks with exponetial acceleration.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We get form of the constant $l$ above $0$. Lets check $s&gt;1$:</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[9]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">a</span><span class="p">,</span><span class="n">b</span><span class="p">,</span><span class="n">c</span><span class="p">,</span><span class="n">d</span><span class="p">,</span><span class="n">s</span><span class="p">,</span><span class="n">x</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s1">'a b c d s x'</span><span class="p">,</span> <span class="n">positive</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">SymF</span> <span class="o">=</span> <span class="p">(</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="p">(</span><span class="mi">1</span><span class="o">+</span><span class="n">s</span><span class="p">)))</span><span class="o">+</span><span class="n">d</span>
<span class="n">SymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">SymF</span><span class="p">,</span><span class="n">a</span><span class="p">)</span>
<span class="n">DSymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">diff</span><span class="p">(</span><span class="n">SymG</span><span class="p">,</span><span class="n">x</span><span class="p">)</span>
<span class="n">DSymG</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[9]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\frac{c x^{s + 1} \\left(b + 1\\right)^{c x^{s + 1}} \\left(s + 1\\right) \\log{\\left (b + 1 \\right )}}{x \\left(d + \\left(b + 1\\right)^{c x^{s + 1}}\\right) \\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[10]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sp</span><span class="o">.</span><span class="n">limit</span><span class="p">(</span><span class="n">DSymG</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">oo</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[10]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\infty \\operatorname{sign}{\\left (\\frac{1}{\\log{\\left (a \\right )}} \\right )}$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>For $s\\in [0,1)$ we should get to $0$.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[11]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">a</span><span class="p">,</span><span class="n">b</span><span class="p">,</span><span class="n">c</span><span class="p">,</span><span class="n">d</span><span class="p">,</span><span class="n">s</span><span class="p">,</span><span class="n">x</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s1">'a b c d s x'</span><span class="p">,</span> <span class="n">positive</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">SymF</span> <span class="o">=</span> <span class="p">(</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="p">(</span><span class="n">s</span><span class="o">/</span><span class="p">(</span><span class="mi">1</span><span class="o">+</span><span class="n">s</span><span class="p">))))</span><span class="o">+</span><span class="n">d</span>
<span class="n">SymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">SymF</span><span class="p">,</span><span class="n">a</span><span class="p">)</span>
<span class="n">DSymG</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">diff</span><span class="p">(</span><span class="n">SymG</span><span class="p">,</span><span class="n">x</span><span class="p">)</span>
<span class="n">DSymG</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[11]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\frac{c s x^{\\frac{s}{s + 1}} \\left(b + 1\\right)^{c x^{\\frac{s}{s + 1}}} \\log{\\left (b + 1 \\right )}}{x \\left(d + \\left(b + 1\\right)^{c x^{\\frac{s}{s + 1}}}\\right) \\left(s + 1\\right) \\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[12]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sp</span><span class="o">.</span><span class="n">limit</span><span class="p">(</span><span class="n">DSymG</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">oo</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[12]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$0$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[13]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">p</span> <span class="o">=</span> <span class="n">sp</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s1">'p'</span><span class="p">,</span> <span class="n">positive</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">DSymGP</span> <span class="o">=</span> <span class="n">DSymG</span><span class="o">.</span><span class="n">subs</span><span class="p">((</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="p">(</span><span class="n">s</span><span class="o">/</span><span class="p">(</span><span class="n">s</span><span class="o">+</span><span class="mi">1</span><span class="p">)))),</span><span class="n">p</span><span class="p">)</span>
<span class="n">sp</span><span class="o">.</span><span class="n">apart</span><span class="p">(</span><span class="n">DSymGP</span><span class="p">,</span><span class="n">p</span><span class="p">)</span><span class="o">.</span><span class="n">subs</span><span class="p">(</span><span class="n">p</span><span class="p">,(</span><span class="n">b</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="n">c</span><span class="o">*</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="p">(</span><span class="n">s</span><span class="o">/</span><span class="p">(</span><span class="n">s</span><span class="o">+</span><span class="mi">1</span><span class="p">)))))</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[13]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$- \\frac{c d s x^{\\frac{s}{s + 1}} \\log{\\left (b + 1 \\right )}}{x \\left(d + \\left(b + 1\\right)^{c x^{\\frac{s}{s + 1}}}\\right) \\left(s + 1\\right) \\log{\\left (a \\right )}} + \\frac{c s x^{\\frac{s}{s + 1}} \\log{\\left (b + 1 \\right )}}{s x \\log{\\left (a \\right )} + x \\log{\\left (a \\right )}}$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The first part is going to zero at least with exponetial acceleration, the second with $x^{\\frac{s-1}{s+1}}=x^{-2}$ quadratic acceleration.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="How-to-test:">How to test:<a class="anchor-link" href="#How-to-test:">&#182;</a></h3>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We test a hypothesis that $f$ has at least exponetial growth.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>To check if the $f(x)$ grows we check behaviour of the $\\frac{d}{dx}g(x)$. If it does not go to $0$ with at least $\\mathcal(\\frac{a}{x}+const)$ acceleration then we have that the $f$ is an exponetially growing function.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol>
<li>We start with calculating $\\frac{d}{dx}g(x)$:</li>
</ol>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>We compute derivate based on the stencil method <a href="http://web.media.mit.edu/~crtaylor/calculator.html">link</a></li>
</ul>
<p>I have chosen locations of sampled points equal to 0,1,2,3,4,5 since I do not want use negative locations with limited data.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[14]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">df_1</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="n">f</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    <span class="n">h</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">h</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">f</span><span class="p">,</span> <span class="n">h</span><span class="p">:((</span><span class="o">-</span><span class="mi">137</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="mi">300</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">-</span><span class="mi">300</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="mi">200</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">-</span><span class="mi">75</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">+</span><span class="mi">12</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">5</span><span class="p">])</span><span class="o">/</span><span class="p">(</span><span class="mi">60</span><span class="o">*</span><span class="mf">1.0</span><span class="o">*</span><span class="n">h</span><span class="p">))</span>
    <span class="k">return</span> <span class="p">[</span><span class="n">df</span><span class="p">(</span><span class="n">f</span><span class="p">[</span><span class="n">j</span><span class="p">:</span><span class="n">j</span><span class="o">+</span><span class="mi">6</span><span class="p">],</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">f</span><span class="o">.</span><span class="n">size</span><span class="o">-</span><span class="mi">6</span><span class="p">)]</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>We then use logarithm identity to estimate $\\frac{d}{dx}g(x)$:</li>
</ul>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
\\begin{equation}\\nonumber\\frac{d}{dx}g(x)=\\frac{d}{dx}(\\ln(f(x)))\\end{equation}
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[15]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">d_g</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">df_1</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">f</span><span class="p">),</span><span class="n">h</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol start="2">
<li>We make statistical tests to check if the $\\frac{d}{dx}g(x)$ has all necessary properties:</li>
</ol>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>We calculate <a href="https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient">Spearman rank coefficient</a> to check if it is monotonically decreasing, otherwise we can assume $f$ is growing at least exponentially.</li>
</ul>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>We test for existence of unit root with <a href="https://en.wikipedia.org/wiki/KPSS_test">KPSS test</a> and <a href="https://en.wikipedia.org/wiki/Augmented_Dickey%E2%80%93Fuller_test">Augmented Dickey Fuller test</a>, if there is no unit root and the $\\frac{d}{dx}g(x)$ is stationary around value significantly bigger than zero, we can assume $f$ is growing at least exponentially.</li>
</ul>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>We do curve fitting for $a_0\\cdot x +b+0$, $\\frac{a_1}{x}+b_1$ and $\\frac{a_2}{x^2}+b_2$ check p-values of ordinary regressions. If the p-value of the first is smaller than the others, there is something fishy.</li>
</ul>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol start="3">
<li>If all test went through we cannot reject the hypothesis.</li>
</ol>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Phase-2:-Polynomial-growth-testing">Phase 2: Polynomial growth testing<a class="anchor-link" href="#Phase-2:-Polynomial-growth-testing">&#182;</a></h3>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can assume $a\\cdot x^n = f(x)=e^{g(x)}$.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>So \\begin{equation}\\nonumber g(x)=n\\cdot \\ln(x)+\\ln(a)\\end{equation}</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We try to find $n$:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol>
<li><p>We try do curve fitting for $g(x)$, we get estimated $n$ parameter, we should check p-values of ordinary regression.</p>
<p>We can try two aproaches from <a href="https://en.wikipedia.org/wiki/Degree_of_a_polynomial">wiki</a>
\\begin{equation}\\nonumber \\deg\\ f = \\lim_{x\\to\\infty}\\frac{log\\lvert f(x)\\rvert}{log(x)} = \\lim_{x\\to\\infty}\\frac{g(x)}{log(x)} \\end{equation}</p>
\\begin{equation}\\nonumber \\deg\\ f = \\lim_{x\\to\\infty}\\frac{x\\cdot \\frac{d}{dx}f(x)}{f(x)} \\end{equation}</li>
</ol>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol start="2">
<li>We compute the $n$th and $(n+1)$th derivate of $f$ based on the stencil method <a href="http://web.media.mit.edu/~crtaylor/calculator.html">link</a></li>
</ol>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol start="3">
<li>Check with <a href="https://en.wikipedia.org/wiki/KPSS_test">KPSS test</a> and/or <a href="https://en.wikipedia.org/wiki/Augmented_Dickey%E2%80%93Fuller_test">Augmented Dickey Fuller test</a> if</li>
</ol>
<p>\\begin{equation}\\nonumber\\frac{d^{n+1}}{dx^{n+1}}f(x)\\equiv 0\\end{equation}</p>
<ul>
<li>If not try to divide  $(n+1)$th by $n$th derivate and check if it is close to $0$, it should be since it is $\\frac{0}{const}$.</li>
<li>Also execute polynomial regression and check if the residuals confim the findings.</li>
</ul>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Alternative:</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can try use <a href="https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem">Stolz\u2013Ces\xE0ro theorem</a> to estimate limit.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
$$\\lim_{x\\to\\infty}\\frac{1}{x}=0$$<p>so $$\\lim_{x\\to\\infty}\\frac{1}{\\frac{1}{x}}=\\infty$$  and is monotonic. Lets try reach 
$$\\lim_{x\\to\\infty}\\frac{\\frac{1}{\\frac{dg}{dx}(x)}}{x^n}$$ for $n &gt; 0$</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>This is tricky alternative since Stolz\u2013Ces\xE0ro theorem assumes that we differentiate strongly growing function. It is the case for the first iteration, but later Spearman rank coefficient test has to be applied every step and isotonic regression in case some strange outliners.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="Examples-for-exponetial-growth-testing:">Examples for exponetial growth testing:<a class="anchor-link" href="#Examples-for-exponetial-growth-testing:">&#182;</a></h2>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[16]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">statsmodels.tsa.stattools</span> <span class="k">as</span> <span class="nn">stat</span>
<span class="kn">import</span> <span class="nn">statsmodels.api</span> <span class="k">as</span> <span class="nn">sm</span>
<span class="kn">import</span> <span class="nn">scipy.stats</span> <span class="k">as</span> <span class="nn">sps</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="c1">#%matplotlib inline</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Example:-$2%5Ex+1$">Example: $2^x+1$<a class="anchor-link" href="#Example:-$2%5Ex+1$">&#182;</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[18]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Exponential</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span><span class="n">x</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">d_g</span><span class="p">(</span><span class="n">Exponential</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">dg</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[18]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.34505258, 0.4608561 , 0.55417653, 0.61620674, 0.65251573,
       0.67224712, 0.68254505, 0.6878073 , 0.69046744, 0.69180484,
       0.6924754 , 0.69281113, 0.69297912, 0.69306314, 0.69310516,
       0.69312617, 0.69313667, 0.69314193, 0.69314455, 0.69314587,
       0.69314652, 0.69314685, 0.69314702, 0.6931471 , 0.69314714,
       0.69314716, 0.69314717, 0.69314718, 0.69314718, 0.69314718,
       0.69314718, 0.69314718, 0.69314718, 0.69314718, 0.69314718,
       0.69314718, 0.69314718, 0.69314718, 0.69314718, 0.69314718,
       0.69314718, 0.69314718, 0.69314718, 0.69314718])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Quite clearly the series going asymptoticly to value in $[0,1]$.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[19]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sps</span><span class="o">.</span><span class="n">spearmanr</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[19]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 1.0, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The first value is correlation rank. Since it is more than $0$ the hypothesis is that the function is monoticaly growing.
The second value is p-value. p-value numerically equals $0$, so the hypothesis is valid. So $f$ grows at least exponetially.
<a id='2toN'></a></p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>It is not necessary, we will go through the second point.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[20]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">kpss</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[20]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.3623642052052117, \\quad 0.09337749775637427\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[21]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">adfuller</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">maxlag</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[21]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -133.98253644647903, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>With Augmented Dickey Fuller test we reject (p-value $= 0$) thesis that there is an unit root. KPSS doesn't allow us to reject a thesis that the $\\frac{d}{dx}g(x)$ is not stationary (big R-score, p-value over $5\\%$). The series stabilizes around value significally bigger than $0$. So $f$ grows at least exponetially.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Example:-$e%5Ex+1$">Example: $e^x+1$<a class="anchor-link" href="#Example:-$e%5Ex+1$">&#182;</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[22]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Exponential_2</span>  <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="n">x</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">d_g</span><span class="p">(</span><span class="n">Exponential_2</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">dg</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[22]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.48959582, 0.72902316, 0.88184034, 0.95341181, 0.98239963,
       0.99346056, 0.99758542, 0.99911052, 0.99967262, 0.99987954,
       0.99995568, 0.9999837 , 0.999994  , 0.99999779, 0.99999919,
       0.9999997 , 0.99999989, 0.99999996, 0.99999999, 0.99999999,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        ])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[23]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sps</span><span class="o">.</span><span class="n">spearmanr</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[23]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.9913654818079233, \\quad 1.082667291052979e-38\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The same situation as in the <a href="#2toN">example above</a>. So $f$ grows at least exponetially.
<a id='eXplus1'></a></p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[24]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">kpss</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[24]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.3532316372910417, \\quad 0.09731394944351651\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[25]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">adfuller</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">maxlag</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[25]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.6528647035117663, \\quad 0.8585839204616077\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Actually we cannot reject or accept thesis about stationarity of the series, even if we can see that it stabilizes around $1$.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Lets check linear regresion then:</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[26]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">OLS</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span><span class="n">X</span><span class="p">)</span>
<span class="n">results</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="n">results</span><span class="o">.</span><span class="n">params</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[26]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.91674754, 0.00284251])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[27]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[27]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.002842513280343845, \\quad 0.9167475394082137, \\quad 0.4175112951442124, \\quad 0.00480573955412877\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can see that slope is minimal and above $0$, intercept close to $1$ and the p-value is way below $0.05$. So $f$ grows at least exponetially.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>NOTE: Negative slope would be indicator that there is posibility of a smaller growth, but with spearman rank positive it should not happen.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Example:-$4x%5E2+1$">Example: $4x^2+1$<a class="anchor-link" href="#Example:-$4x%5E2+1$">&#182;</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[28]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Polynomial_2</span>   <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="mi">4</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">d_g</span><span class="p">(</span><span class="n">Polynomial_2</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">dg</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[28]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([1.6225559 , 1.57766426, 0.93294137, 0.64632756, 0.4915153 ,
       0.39572265, 0.33089144, 0.2841931 , 0.24898944, 0.22151706,
       0.19948851, 0.1814354 , 0.16637274, 0.15361554, 0.14267287,
       0.13318376, 0.12487692, 0.11754456, 0.11102484, 0.10518986,
       0.0999372 , 0.09518387, 0.09086195, 0.08691529, 0.08329705,
       0.07996791, 0.07689456, 0.07404861, 0.07140575, 0.06894498,
       0.06664812, 0.06449932, 0.06248472, 0.06059213, 0.05881079,
       0.05713118, 0.05554483, 0.05404417, 0.05262246, 0.05127362,
       0.04999218, 0.04877323, 0.04761229, 0.04650534])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[29]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sps</span><span class="o">.</span><span class="n">spearmanr</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[29]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -1.0, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We have low p-value so it is a monotonic series. The correlation is negative, so series is decreasing.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[30]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">kpss</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[30]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.43023195326686203, \\quad 0.06412415807462844\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[31]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">adfuller</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">maxlag</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[31]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -28.294795735916757, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The tests suggest that values of the function are stationary. (The final values are already close to $0$, but this is not exactly valid argument since changes in coefficients could streach values of the last value without changing $\\mathcal{O}$ )</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[32]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">OLS</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span><span class="n">X</span><span class="p">)</span>
<span class="n">results</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="n">results</span><span class="o">.</span><span class="n">params</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[32]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 0.6021629 , -0.01765693])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[33]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.0001</span><span class="p">,</span><span class="n">dg</span><span class="p">)</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[33]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.017656927229575837, \\quad 0.6021646697365991, \\quad -0.6485915273763738, \\quad 1.925247670517773e-06\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Negative slope with low p-value, suggest we should reject hypothesis that $f$ is at least exponetial.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Let try to estimate the highest power of the polynomial.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[34]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">g</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">Polynomial_2</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">g</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[34]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.        , 1.60943791, 2.83321334, 3.61091791, 4.17438727,
       4.61512052, 4.97673374, 5.28320373, 5.54907608, 5.78382518,
       5.99396143, 6.18414889, 6.35784227, 6.51767127, 6.66568372,
       6.80350526, 6.93244789, 7.05358573, 7.16780918, 7.2758646 ,
       7.37838371, 7.47590597, 7.56889566, 7.65775527, 7.74283596,
       7.82444593, 7.90285719, 7.97831097, 8.05102221, 8.12118324,
       8.18896686, 8.25452888, 8.31801028, 8.37953903, 8.43923165,
       8.49719454, 8.55352512, 8.60831278, 8.6616398 , 8.71358201,
       8.76420951, 8.8135872 , 8.86177531, 8.90882979, 8.95480275,
       8.99974279, 9.04369529, 9.08670273, 9.12880488, 9.17003908])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[35]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Polynomial_2</span>   <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="mi">4</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="k">def</span> <span class="nf">log_func</span><span class="p">(</span><span class="n">X</span><span class="p">,</span><span class="n">n</span><span class="p">,</span><span class="n">a</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">n</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">X</span><span class="p">)</span> <span class="o">+</span> <span class="n">a</span>
<span class="k">def</span> <span class="nf">exp_func</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">n</span><span class="p">,</span> <span class="n">ln_a</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="n">n</span><span class="p">)</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="n">ln_a</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[36]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> \\
    <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">),</span><span class="n">g</span><span class="p">)</span>
<span class="n">params</span><span class="o">=</span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[36]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 2.2994597684966256, \\quad 0.3000269557211599, \\quad 0.9977654344289512, \\quad 4.5049772992744054e-58\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Double check with algorithm from the <a href="http://mathworld.wolfram.com/LeastSquaresFittingLogarithmic.html">wolfram mathworld</a>.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[37]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">log_linregress</span><span class="p">(</span><span class="n">X</span><span class="p">,</span><span class="n">Y</span><span class="p">):</span>
    <span class="n">n</span> <span class="o">=</span>  <span class="n">Y</span><span class="o">.</span><span class="n">size</span>
    <span class="n">logX</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
    <span class="n">num_b</span> <span class="o">=</span> <span class="n">n</span><span class="o">*</span><span class="p">(</span><span class="n">logX</span><span class="o">.</span><span class="n">dot</span><span class="p">(</span><span class="n">Y</span><span class="p">))</span><span class="o">-</span> <span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">logX</span><span class="p">)</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">Y</span><span class="p">)</span>
    <span class="n">den_b</span> <span class="o">=</span> <span class="n">n</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">logX</span><span class="p">,</span><span class="mi">2</span><span class="p">))</span><span class="o">-</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">logX</span><span class="p">),</span><span class="mi">2</span><span class="p">))</span>
    <span class="n">slope</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">divide</span><span class="p">(</span><span class="n">num_b</span><span class="p">,</span><span class="n">den_b</span><span class="p">)</span>
    <span class="n">intercept</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">divide</span><span class="p">((</span><span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">Y</span><span class="p">)</span> <span class="o">-</span> <span class="n">slope</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">logX</span><span class="p">)),</span><span class="n">n</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">slope</span><span class="p">,</span><span class="n">intercept</span>

<span class="n">log_linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span><span class="n">g</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[37]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 2.2994597684966185, \\quad 0.30002695572118115\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[38]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">g</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'g'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">log_func</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">params</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function g'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[39]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_2</span><span class="p">),</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">exp_func</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">params</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>In the $f$ picture we can already see that we should check if the function grows exponetially, since in later values the exponetial function starts to grow much faster.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We compute the $2$nd and $3$rd derivate of $f$ based on the stencil method <a href="http://web.media.mit.edu/~crtaylor/calculator.html">link</a></p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[40]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">df_2</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="n">f</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    <span class="n">h</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">h</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">f</span><span class="p">,</span> <span class="n">h</span><span class="p">:((</span><span class="mi">45</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">-</span><span class="mi">154</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="mi">214</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">-</span><span class="mi">156</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">+</span><span class="mi">61</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">-</span><span class="mi">10</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">5</span><span class="p">])</span><span class="o">/</span><span class="p">(</span><span class="mi">12</span><span class="o">*</span><span class="mf">1.0</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">h</span><span class="p">,</span><span class="mi">2</span><span class="p">)))</span>
    <span class="k">return</span> <span class="p">[</span><span class="n">df</span><span class="p">(</span><span class="n">f</span><span class="p">[</span><span class="n">j</span><span class="p">:</span><span class="n">j</span><span class="o">+</span><span class="mi">6</span><span class="p">],</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">f</span><span class="o">.</span><span class="n">size</span><span class="o">-</span><span class="mi">6</span><span class="p">)]</span>

<span class="n">df_2</span><span class="p">(</span><span class="n">Polynomial_2</span><span class="p">,</span><span class="mi">100</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[40]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left [ 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0, \\quad 8.0\\right ]$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[41]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">df_3</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="n">f</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    <span class="n">h</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">h</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">f</span><span class="p">,</span> <span class="n">h</span><span class="p">:((</span><span class="o">-</span><span class="mi">17</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="mi">71</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">-</span><span class="mi">118</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="mi">98</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">-</span><span class="mi">41</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">+</span><span class="mi">7</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">5</span><span class="p">])</span><span class="o">/</span><span class="p">(</span><span class="mi">4</span><span class="o">*</span><span class="mf">1.0</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">h</span><span class="p">,</span><span class="mi">3</span><span class="p">)))</span>
    <span class="k">return</span> <span class="p">[</span><span class="n">df</span><span class="p">(</span><span class="n">f</span><span class="p">[</span><span class="n">j</span><span class="p">:</span><span class="n">j</span><span class="o">+</span><span class="mi">6</span><span class="p">],</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">f</span><span class="o">.</span><span class="n">size</span><span class="o">-</span><span class="mi">6</span><span class="p">)]</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[42]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df_3</span><span class="p">(</span><span class="n">Polynomial_2</span><span class="p">,</span><span class="mi">100</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[42]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left [ 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0, \\quad 0.0\\right ]$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>$\\mathcal{O}(x^2)$ confirmed.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Example:-$x%5E%7B9%7D+1$">Example: $x^{9}+1$<a class="anchor-link" href="#Example:-$x%5E%7B9%7D+1$">&#182;</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[43]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Polynomial_12</span>  <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="mi">9</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">d_g</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">dg</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[43]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([-7.4759333 ,  6.88871961,  4.43439504,  2.98624815,  2.24576562,
        1.79839245,  1.49929662,  1.28537274,  1.12482032,  0.99989926,
        0.8999405 ,  0.81814512,  0.74997653,  0.6922922 ,  0.64284663,
        0.5999927 ,  0.56249482,  0.52940802,  0.49999725,  0.47368216,
        0.44999845,  0.42857024,  0.40908999,  0.39130363,  0.37499943,
        0.35999954,  0.34615348,  0.33333304,  0.32142833,  0.31034463,
        0.29999984,  0.29032244,  0.28124989,  0.27272718,  0.2647058 ,
        0.25714279,  0.24999994,  0.24324319,  0.23684206,  0.23076919,
        0.22499997,  0.21951217,  0.21428569,  0.2093023 ])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[44]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sps</span><span class="o">.</span><span class="n">spearmanr</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[44]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.8666666666666667, \\quad 2.902552001617057e-14\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We have low p-value so it is a monotonic series. The correlation is negative, so the series is decreasing.
<a id='highPoly'></a></p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[45]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">kpss</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[45]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.3472144503812251, \\quad 0.09990756449085124\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[46]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">adfuller</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">maxlag</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[46]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -19.084067750858985, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The tests suggest that values of the function are stationary. (The final values are already close to $0$, but this is not exactly valid argument since changes in coefficients could streach values of the last value without changing $\\mathcal{O}$ )</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[47]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">OLS</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span><span class="n">X</span><span class="p">)</span>
<span class="n">results</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="n">results</span><span class="o">.</span><span class="n">params</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[47]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 1.42462432, -0.03510295])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[48]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.0001</span><span class="p">,</span><span class="n">dg</span><span class="p">)</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[48]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.035102953732727746, \\quad 1.4246278254726625, \\quad -0.2561180955200621, \\quad 0.09332625873625347\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Negative slope with low p-value, suggest we cannot reject hypothesis that $f$ is not at least exponetial. We will try to show that it is polynomial.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Let try to estimate the highest power of the polynomial.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[49]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">g</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">g</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[49]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 0.        ,  0.69314718,  6.24027585,  9.8875614 , 12.47665306,
       14.48494172, 16.12583532, 17.51319137, 18.71497388, 19.7750212 ,
       20.72326584, 21.58105746, 22.36415985, 23.08454422, 23.75151597,
       24.37245181, 24.9532985 , 25.4989201 , 26.01334582, 26.49995081,
       26.96159046, 27.40070194, 27.81938208, 28.21944794, 28.60248447,
       28.96988242, 29.32286884, 29.66253179, 29.98984059, 30.30566247,
       30.61077643, 30.90588484, 31.19162313, 31.46856805, 31.73724472,
       31.99813255, 32.25167045, 32.49826121, 32.73827544, 32.97205482,
       33.19991509, 33.4221486 , 33.63902656, 33.85080104, 34.05770671,
       34.25996241, 34.45777257, 34.65132842, 34.8408091 , 35.02638268])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[50]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> \\
    <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">),</span><span class="n">g</span><span class="p">)</span>
<span class="n">params</span><span class="o">=</span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[50]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 9.912647997753384, \\quad -3.4880813827104937, \\quad 0.9971427111538101, \\quad 1.6329331027984163e-55\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[51]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">log_linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span><span class="n">g</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[51]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 9.912647997753359, \\quad -3.4880813827104205\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[52]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">g</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'g'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">log_func</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">params</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function g'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[53]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">exp_func</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">params</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAecAAAEDCAYAAAAP2MzAAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDIuMi4yLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvhp/UCwAAIABJREFUeJzt3Xt4VdWd//H3lyQkQQhBQIRwCShyU0gkUJBqLVZBRUXrBS+1jr+2o7ZTOx2p0M4odepIi79itV6q1dZ2rFoVI95gHAFBsWggXFTuECAJl0AIF0kglzV/5CQm4STnBE6y9zn5vJ6Hh5y9V3K+2Zp8WGuvvZY55xARERH/aOd1ASIiIlKfwllERMRnFM4iIiI+o3AWERHxGYWziIiIzyicRUREfMbTcDaz58xsj5l9FkbbC8xshZlVmNm1Dc5VmtnKwJ+5LVexiIhIy/O65/xnYGKYbbcDtwF/C3Ku1DmXEfhzZYRqExER8YSn4eycWwwU1z1mZmeY2TwzW25mS8xscKBtnnNuNVDlRa0iIiKtxeueczBPA//inBsJ3AM8EcbnJJlZjpn9w8wmt2x5IiIiLSve6wLqMrOOwHnAK2ZWczgxjE/t65wrNLMBwAIzW+Oc29xSdYqIiLQkX4Uz1T35EudcRnM+yTlXGPh7i5ktAjIBhbOIiEQlXw1rO+cOAlvN7DoAqzaiqc8xsy5mlhj4uBswDviixYsVERFpIeblrlRm9iJwIdAN2A3cDywAngR6AgnAS865B8xsFPA60AUoA3Y554aZ2XnAH6ieKNYOeMQ592xrfy8iIiKR4mk4i4iIyPF8NawtIiIiHk4I69atm0tPT/fq7UVERFrd8uXL9zrnuodq51k4p6enk5OT49Xbi4iItDoz2xZOOw1ri4iI+IzCWURExGcUziIiIj7jqxXCysvLyc/Pp6yszOtS5CQlJSXRu3dvEhISvC5FRCTq+Cqc8/Pz6dSpE+np6dRZW1uijHOOffv2kZ+fT//+/b0uR0Qk6vhqWLusrIyuXbsqmKOcmdG1a1eNgIiInCBfhTOgYI4R+u8oInLifBfOIiIiXlu2ZR+PL9zEkWMVnry/wrmBuLg4MjIyav/k5eWRk5PDj3/8YwAWLVrE0qVLa9tnZ2fzxRfN3wSrY8eOQY8/+uijDBkyhJtvvvnEvoEg8vLy+Nvf/lb7uu73c7JeeeUVhgwZwje/+c2IfD0RET94e81OHl+4ifZx3sSkryaE+UFycjIrV66sdyw9PZ2srCygOpw7duzIeeedB1SH86RJkxg6dGhE3v+JJ57g3XffjehEqppwvummmwDIysqq/X5O1rPPPssTTzyhcBaRmPJp3n7O7duFeI/CWT3nMCxatIhJkyaRl5fHU089xezZs8nIyOCDDz5g7ty5TJ06lYyMDDZv3szmzZuZOHEiI0eO5Pzzz2fdunUAbN26lbFjxzJq1Cj+4z/+I+j73HHHHWzZsoUrr7yS2bNnM2PGDB5++OHa82effTZ5eXnk5eUxZMgQvv/97zNs2DAuueQSSktLAdi0aRPf+ta3GDFiBOeeey6bN29m2rRpLFmyhIyMDGbPnl37/QAUFxczefJkhg8fzpgxY1i9ejUAM2bM4Pbbb+fCCy9kwIABPProo8fV+8ADD/Dhhx9yxx13MHXq1IhecxERrxwqK2f9roOM7NfFsxp823P+5Zuf80XhwYh+zaG9Urj/imFNtiktLSUjIwOA/v378/rrr9eeS09P54477qBjx47cc889AFx55ZVMmjSJa6+9FoCLLrqIp556ioEDB7Js2TLuuusuFixYwN13382dd97JrbfeyuOPPx70vZ966inmzZvHwoUL6datGzNmzGi0zo0bN/Liiy/yzDPPcP311/Paa69xyy23cPPNNzNt2jSuvvpqysrKqKqqYubMmTz88MO89dZbQPU/Nmrcf//9ZGZmkp2dzYIFC7j11ltrRw7WrVvHwoULOXToEIMGDeLOO++s99zyfffdx4IFC3j44Ycj1hMXEfFa7vYSqhxkpSucfSPYsHa4Dh8+zNKlS7nuuutqjx09ehSAjz76iNdeew2A73znO9x7770nVWf//v1r/xExcuRI8vLyOHToEAUFBVx99dVA9UIgoXz44Ye1dY0fP559+/Zx4MABAC6//HISExNJTEzktNNOY/fu3fTu3fuk6hYR8bucbftpZ5DZV+F8nFA9XD+qqqoiNTW10XBv7uNF8fHxVFVV1b6u+9xwYmJi7cdxcXGUlpbinGtmxQT9nJo6G75HRYU3sxZFRFrT8m3FDD49hY6J3kWk7jk3U6dOnTh06FDQ1ykpKfTv359XXnkFqA6+VatWATBu3DheeuklAF544YWw3is9PZ0V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
"
class="
"
>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We compute the $9$th and $10$th derivate of $f$ based on the stencil method <a href="http://web.media.mit.edu/~crtaylor/calculator.html">link</a></p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[54]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">df_9</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="n">f</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    <span class="n">h</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">h</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">f</span><span class="p">,</span> <span class="n">h</span><span class="p">:(</span><span class="o">-</span><span class="mi">1</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="mi">9</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">-</span><span class="mi">36</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="mi">84</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">-</span><span class="mi">126</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">+</span><span class="mi">126</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span><span class="o">-</span><span class="mi">84</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span><span class="o">+</span><span class="mi">36</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span><span class="o">-</span><span class="mi">9</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">8</span><span class="p">]</span><span class="o">+</span><span class="mi">1</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">9</span><span class="p">])</span><span class="o">/</span><span class="p">(</span><span class="mi">1</span><span class="o">*</span><span class="mf">1.0</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">h</span><span class="p">,</span><span class="mi">9</span><span class="p">))</span>
    <span class="k">return</span> <span class="p">[</span><span class="n">df</span><span class="p">(</span><span class="n">f</span><span class="p">[</span><span class="n">j</span><span class="p">:</span><span class="n">j</span><span class="o">+</span><span class="mi">10</span><span class="p">],</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">f</span><span class="o">.</span><span class="n">size</span><span class="o">-</span><span class="mi">10</span><span class="p">)]</span>

<span class="n">df9</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">df_9</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">df9</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[54]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([362880., 362880., 362880., 362880., 362880., 362880., 362880.,
       362880., 362880., 362880., 362880., 362880., 362880., 362880.,
       362880., 362880., 362880., 362880., 362880., 362880., 362880.,
       362880., 362880., 362880., 362880., 362880., 362880., 362880.,
       362880., 362880., 362880., 362880., 362880., 362883., 362879.,
       362881., 362881., 362879., 362883., 362877.])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[55]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">df9</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.1</span><span class="p">,</span> <span class="n">df9</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">df9</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">repeat</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">df9</span><span class="p">),</span><span class="n">df9</span><span class="o">.</span><span class="n">size</span><span class="p">)),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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PvUpjj/+eA455BCuvvrqV9R7xRVXcPfddzNv3jza2tpG9c9cUm1Nmdw4pPaiq7fxVHJT10nAhszcDBARy4Bjgf8FUP5+4m8BbcDXRlLMwn//Nb/Z9OxIdvEKh02ZxILTDt9jn97eXlpaWgCYMWMGy5cv3/na9OnTmTdvHhMnTuTSSy8F4PTTT+fUU0/lgx/8IAAnnngi119/PYceeij33nsvn/3sZ1m5ciUXX3wxF1xwAR//+Me55pprBjz29ddfz49+9CPuuOMODjroINrb21+1zt/+9rfcfPPNfOUrX+HDH/4wt912G+eccw5nn302l112GWeeeSYvvvgiO3bs4Morr2Tx4sV8//vfB0r/weizYMECZs+eTUdHBytXruTjH//4zhWCBx98kDvuuIPnnnuO5uZmLrjggl3eV3z55ZezcuVKFi9ePGpn3JKKoW1OM/OXrd1lmbdxfANtc5prWNXw1dt4KgnkR4FjImJfSkvWJwKdEfEXmflQ+RryacCDVayzqgZasq7U888/zz333MOHPvShnW0vvfQSAD//+c+57bbbADj33HP5whe+MKI6Z8yYsfM/DkcddRTd3d0899xz9PT0cOaZZwKlD+cYzN13372zrhNOOIGnnnqKZ555BoD3ve997LPPPuyzzz688Y1v5PHHH2fatGkjqltSfei7+7he7koeTL2Np5JryPdGxHeA1cA2oAtYCqyMiEmU3vZ0H3DBSIsZ7Ey2iHbs2MHkyZNfNdCH+lagcePGsWPHjp3P+7+vd5999tn5uKGhgd7eXjKHfi/dQNv01bn7MbZt2zbk/UuqX2fMnlrYwBqOehpPRXdZZ+aCzHxrZh6Rmedm5kuZeVxm/mW57ey+u67Hov3335/nnntuwOeTJk1ixowZ3HrrrUAp7O677z4AjjvuOG655RYAbrzxxoqONX36dFavXg3A6tWr2bBhwx77T5o0iWnTptHR0QGUzs5feOGFV9Tc37ve9a6d9dx5550cdNBBTJo0qaL6JEnVUfNP6qoHp512GsuXL6elpYW77rqLs846i0WLFjF79mzWr1/PjTfeyA033MCRRx7J4Ycfzne/+10ArrrqKq655hqOPvronUvCg/nABz7A008/TUtLC9dddx1vectbBt3mm9/8JldffTWzZs3i2GOP5fe//z2zZs1i3LhxHHnkkSxZsmSX/u3t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
"
class="
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[56]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">df_10</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="n">f</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    <span class="n">h</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">h</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">f</span><span class="p">,</span> <span class="n">h</span><span class="p">:</span> \\
    <span class="p">(</span><span class="mi">1</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">-</span><span class="mi">10</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="mi">45</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">-</span><span class="mi">120</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">+</span><span class="mi">210</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">-</span><span class="mi">252</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span><span class="o">+</span><span class="mi">210</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span><span class="o">-</span><span class="mi">120</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span><span class="o">+</span><span class="mi">45</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">8</span><span class="p">]</span><span class="o">-</span><span class="mi">10</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">9</span><span class="p">]</span><span class="o">+</span><span class="mi">1</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">10</span><span class="p">])</span>\\
    <span class="o">/</span><span class="p">(</span><span class="mi">1</span><span class="o">*</span><span class="mf">1.0</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">h</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span>
    <span class="k">return</span> <span class="p">[</span><span class="n">df</span><span class="p">(</span><span class="n">f</span><span class="p">[</span><span class="n">j</span><span class="p">:</span><span class="n">j</span><span class="o">+</span><span class="mi">11</span><span class="p">],</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">f</span><span class="o">.</span><span class="n">size</span><span class="o">-</span><span class="mi">11</span><span class="p">)]</span>

<span class="n">df10</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">df_10</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">df10</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[56]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([  0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,
         0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,
         0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,  -2.,   0.,  -7.,
        -4.,  -3.,  -8., -15.,  -2.,   1.])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[57]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sc</span><span class="o">.</span><span class="n">stats</span><span class="o">.</span><span class="n">ttest_1samp</span><span class="p">(</span><span class="n">df10</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[57]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -2.170312697477995, \\quad 0.036300258703963376\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Quite interesting average doesn't pass a t-test for the mean of $0$.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>But when we compare $10$th and $9$th derivate we will get conclusion.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[58]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">linalg</span><span class="o">.</span><span class="n">norm</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">divide</span><span class="p">(</span><span class="n">df10</span><span class="p">,</span><span class="n">df9</span><span class="p">[:</span><span class="o">-</span><span class="mi">1</span><span class="p">]))</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[58]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$5.315050375076482e-05$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>NOTE: The assumption that we deal with growing function and polynomial is important here. In that case we know that $10$th derivative is $0$, $9$th is constant and $8$th is linear with significant slope (if slope is not significant then $9$th will be close to $0$).</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can just go for polynomial regression and check residuals.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[59]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">residuals</span><span class="p">,</span> <span class="n">rank</span><span class="p">,</span> <span class="n">singular_values</span><span class="p">,</span> <span class="n">rcond</span><span class="p">)</span> <span class="o">=</span> \\
<span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="mi">8</span><span class="p">,</span> <span class="n">full</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">residuals</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[59]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([3.78438246e+21])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[60]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">residuals</span><span class="p">,</span> <span class="n">rank</span><span class="p">,</span> <span class="n">singular_values</span><span class="p">,</span> <span class="n">rcond</span><span class="p">)</span> <span class="o">=</span> \\
<span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="mi">10</span><span class="p">,</span> <span class="n">full</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">residuals</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[60]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.09337854])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[61]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">residuals</span><span class="p">,</span> <span class="n">rank</span><span class="p">,</span> <span class="n">singular_values</span><span class="p">,</span> <span class="n">rcond</span><span class="p">)</span> <span class="o">=</span> \\
<span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="mi">9</span><span class="p">,</span> <span class="n">full</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">residuals</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[61]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.17609507])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[62]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">polyval</span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>So polynomial with degree $9$ fits not much worse than with degree $10$, but degree $8$ is not enough.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Two time the same conclusion, should be ok.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h4 id="Lets-try-add-a-little-errors,-since-we-obviously-will-get-them-in-a-product-environment.">Lets try add a little errors, since we obviously will get them in a product environment.<a class="anchor-link" href="#Lets-try-add-a-little-errors,-since-we-obviously-will-get-them-in-a-product-environment.">&#182;</a></h4>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Example:-$e%5Ex+1$-with-added-error">Example: $e^x+1$ with added error<a class="anchor-link" href="#Example:-$e%5Ex+1$-with-added-error">&#182;</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[63]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Exponential_2</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="n">x</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="n">Exponential_2</span> <span class="o">=</span> <span class="n">Exponential_2</span> <span class="o">+</span> <span class="mf">0.05</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="n">size</span><span class="o">=</span><span class="n">Exponential_2</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">d_g</span><span class="p">(</span><span class="n">Exponential_2</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">dg</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[63]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.35672085, 0.79619849, 0.87504548, 0.96479317, 0.98049073,
       0.99251302, 0.99779631, 0.99917234, 0.99957221, 0.99990326,
       0.99994926, 0.99998321, 0.99999292, 0.99999805, 0.99999919,
       0.99999975, 0.99999989, 0.99999996, 0.99999999, 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        , 1.        ,
       1.        , 1.        , 1.        , 1.        ])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[64]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sps</span><span class="o">.</span><span class="n">spearmanr</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[64]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.9913654818079233, \\quad 1.082667291052979e-38\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The same situation as in the example <a href="#eXplus1">without error</a>. So $f$ grows at least exponetially.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[65]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">kpss</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[65]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.3526416023062061, \\quad 0.0975682748680146\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[66]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">adfuller</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">maxlag</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[66]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -78.42780401185223, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>What is very interesting, for me adding normal errors made augmented Dickey\u2013Fuller test to work. We can now state that the series is stationary.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Lets check linear regresion then, we want to know intercept:</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[67]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">OLS</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span><span class="n">X</span><span class="p">)</span>
<span class="n">results</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="n">results</span><span class="o">.</span><span class="n">params</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[67]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.91091105, 0.00304656])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[68]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[68]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.0030465559552613256, \\quad 0.9109110483677062, \\quad 0.38332760386937675, \\quad 0.010215438077036431\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Intercept above $0$, the p-value is way below $0.05$. So $f$ grows at least exponetially.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Example:-$x%5E%7B9%7D+1$-with-added-error">Example: $x^{9}+1$ with added error<a class="anchor-link" href="#Example:-$x%5E%7B9%7D+1$-with-added-error">&#182;</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[69]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Polynomial_12</span>  <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asarray</span><span class="p">([</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="mi">9</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">50</span><span class="p">)])</span>
<span class="n">Polynomial_12</span> <span class="o">=</span> <span class="n">Polynomial_12</span> <span class="o">+</span> <span class="mf">0.05</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="n">size</span><span class="o">=</span><span class="n">Polynomial_12</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">d_g</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">dg</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[69]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([-7.81277878,  6.99348244,  4.43400602,  2.98624049,  2.24576501,
        1.79839249,  1.49929662,  1.28537274,  1.12482032,  0.99989926,
        0.8999405 ,  0.81814512,  0.74997653,  0.6922922 ,  0.64284663,
        0.5999927 ,  0.56249482,  0.52940802,  0.49999725,  0.47368216,
        0.44999845,  0.42857024,  0.40908999,  0.39130363,  0.37499943,
        0.35999954,  0.34615348,  0.33333304,  0.32142833,  0.31034463,
        0.29999984,  0.29032244,  0.28124989,  0.27272718,  0.2647058 ,
        0.25714279,  0.24999994,  0.24324319,  0.23684206,  0.23076919,
        0.22499997,  0.21951217,  0.21428569,  0.2093023 ])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[70]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sps</span><span class="o">.</span><span class="n">spearmanr</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">),</span><span class="n">dg</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[70]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.8666666666666667, \\quad 2.902552001617057e-14\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>As in not error <a href="#highPoly">case</a>. We have low p-value so it is a monotonic series. The correlation is negative, so series is decreasing.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[71]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">warnings</span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s1">'ignore'</span><span class="p">)</span>
<span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">kpss</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">)</span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s1">'always'</span><span class="p">)</span>     

<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[71]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 0.34118658637955945, \\quad 0.1\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[72]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Result</span> <span class="o">=</span> <span class="n">stat</span><span class="o">.</span><span class="n">adfuller</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">maxlag</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">regression</span><span class="o">=</span><span class="s1">'c'</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> <span class="o">=</span> <span class="n">Result</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>
<span class="p">(</span><span class="n">R_scr</span><span class="p">,</span><span class="n">pvalue</span><span class="p">)</span> 
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[72]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -23.36582956181525, \\quad 0.0\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Hard to get conclusions here, p-value changes from run to run for me.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[73]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">OLS</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span><span class="n">X</span><span class="p">)</span>
<span class="n">results</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="n">results</span><span class="o">.</span><span class="n">params</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[73]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 1.40387923, -0.03438382])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[74]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">dg</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.0001</span><span class="p">,</span><span class="n">dg</span><span class="p">)</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[74]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.03438381669283168, \\quad 1.4038826732131393, \\quad -0.24460927781181283, \\quad 0.109540906402397\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Negative slope with low p-value (not always). We cannot reject hypothesis that growth $f$ is not at least exponetial anyway. We will try to show that it is polynomial.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Let try to estimate the highest power of the polynomial.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[75]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">g</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">))</span>
<span class="n">X</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">)</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">sm</span><span class="o">.</span><span class="n">add_constant</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
<span class="n">g</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[75]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 0.04750543,  0.64764806,  6.24045422,  9.8875653 , 12.4766533 ,
       14.48494172, 16.12583533, 17.51319137, 18.71497388, 19.7750212 ,
       20.72326584, 21.58105746, 22.36415985, 23.08454422, 23.75151597,
       24.37245181, 24.9532985 , 25.4989201 , 26.01334582, 26.49995081,
       26.96159046, 27.40070194, 27.81938208, 28.21944794, 28.60248447,
       28.96988242, 29.32286884, 29.66253179, 29.98984059, 30.30566247,
       30.61077643, 30.90588484, 31.19162313, 31.46856805, 31.73724472,
       31.99813255, 32.25167045, 32.49826121, 32.73827544, 32.97205482,
       33.19991509, 33.4221486 , 33.63902656, 33.85080104, 34.05770671,
       34.25996241, 34.45777257, 34.65132842, 34.8408091 , 35.02638268])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[76]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span><span class="p">,</span> <span class="n">std_err</span> <span class="o">=</span> \\
    <span class="n">sps</span><span class="o">.</span><span class="n">linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">),</span><span class="n">g</span><span class="p">)</span>
<span class="n">params</span><span class="o">=</span><span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span>
<span class="n">slope</span><span class="p">,</span> <span class="n">intercept</span><span class="p">,</span> <span class="n">r_value</span><span class="p">,</span> <span class="n">p_value</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[76]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 9.911703759653076, \\quad -3.485225288840585, \\quad 0.9970705671421584, \\quad 2.96843599857997e-55\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[77]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">log_linregress</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span><span class="n">g</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[77]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( 9.911703759653035, \\quad -3.485225288840461\\right )$$
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[78]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">g</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'g'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">log_func</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">params</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function g'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[79]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">exp_func</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">params</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We compute the $9$th and $10$th derivate of $f$ based on the stencil method <a href="http://web.media.mit.edu/~crtaylor/calculator.html">link</a></p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[80]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df9</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">df_9</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">df9</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[80]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([362870.66043305, 362887.60864341, 362874.31785297, 362885.76447392,
       362871.39162827, 362891.54462814, 362867.64628601, 362891.9006958 ,
       362868.25720215, 362892.69052124, 362863.54241943, 362903.87512207,
       362848.93579102, 362912.23608398, 362853.35693359, 362899.67871094,
       362862.74609375, 362900.1953125 , 362855.76757812, 362905.08789062,
       362858.28125   , 362895.6875    , 362870.94921875, 362883.4296875 ,
       362879.6875    , 362878.5546875 , 362880.328125  , 362884.640625  ,
       362870.859375  , 362889.78125   , 362874.71875   , 362885.25      ,
       362874.        , 362886.9375    , 362871.4375    , 362888.        ,
       362881.        , 362879.        , 362883.        , 362885.        ])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[81]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">df9</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.1</span><span class="p">,</span> <span class="n">df9</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">df9</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">0.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">repeat</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">df9</span><span class="p">),</span><span class="n">df9</span><span class="o">.</span><span class="n">size</span><span class="p">)),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[82]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">df_10</span><span class="p">(</span><span class="n">f</span><span class="p">,</span><span class="n">h</span><span class="p">):</span>
    <span class="n">f</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    <span class="n">h</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">(</span><span class="n">h</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">f</span><span class="p">,</span> <span class="n">h</span><span class="p">:</span> \\
    <span class="p">(</span><span class="mi">1</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">-</span><span class="mi">10</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="mi">45</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">-</span><span class="mi">120</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="o">+</span><span class="mi">210</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">-</span><span class="mi">252</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span><span class="o">+</span><span class="mi">210</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span><span class="o">-</span><span class="mi">120</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span><span class="o">+</span><span class="mi">45</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">8</span><span class="p">]</span><span class="o">-</span><span class="mi">10</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">9</span><span class="p">]</span><span class="o">+</span><span class="mi">1</span><span class="o">*</span><span class="n">f</span><span class="p">[</span><span class="mi">10</span><span class="p">])</span>\\
    <span class="o">/</span><span class="p">(</span><span class="mi">1</span><span class="o">*</span><span class="mf">1.0</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="n">h</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span>
    <span class="k">return</span> <span class="p">[</span><span class="n">df</span><span class="p">(</span><span class="n">f</span><span class="p">[</span><span class="n">j</span><span class="p">:</span><span class="n">j</span><span class="o">+</span><span class="mi">11</span><span class="p">],</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">f</span><span class="o">.</span><span class="n">size</span><span class="o">-</span><span class="mi">11</span><span class="p">)]</span>

<span class="n">df10</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">df_10</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">,</span><span class="mi">100</span><span class="p">))</span>
<span class="n">df10</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[82]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 16.9482106 , -13.29079342,  11.44661808, -14.37285233,
        20.15299606, -23.89820862,  24.25463867, -23.64379883,
        24.4336853 , -29.14727783,  40.33361816, -54.93725586,
        63.29858398, -58.86962891,  46.31542969, -36.94140625,
        37.44140625, -44.42773438,  49.21289062, -46.625     ,
        37.46875   , -24.64453125,  12.4921875 ,  -3.125     ,
        -1.3828125 ,   1.890625  ,   4.390625  , -14.640625  ,
        18.28125   , -15.28125   ,   9.25      , -12.        ,
        12.9375    , -19.5625    ,  14.        , -20.        ,
       -15.        , -10.        ,   1.        ])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[83]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">sc</span><span class="o">.</span><span class="n">stats</span><span class="o">.</span><span class="n">ttest_1samp</span><span class="p">(</span><span class="n">df10</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[83]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$\\left ( -0.1980639575195013, \\quad 0.8440508139020735\\right )$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Higher variance help statistical tests to get conclusions about the mean. Still it is not significant.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>But when we compare $10$th and $9$th derivate we will get conclusion.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[84]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">linalg</span><span class="o">.</span><span class="n">norm</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">divide</span><span class="p">(</span><span class="n">df10</span><span class="p">,</span><span class="n">df9</span><span class="p">[:</span><span class="o">-</span><span class="mi">1</span><span class="p">]))</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[84]:</div>




<div class="jp-RenderedLatex jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/latex">
$$0.0004979928767924338$$
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Do the polynomial regression and check residuals.</p>

</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[85]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">residuals</span><span class="p">,</span> <span class="n">rank</span><span class="p">,</span> <span class="n">singular_values</span><span class="p">,</span> <span class="n">rcond</span><span class="p">)</span> <span class="o">=</span> \\
<span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="mi">8</span><span class="p">,</span> <span class="n">full</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">residuals</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[85]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([3.78438246e+21])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[86]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">residuals</span><span class="p">,</span> <span class="n">rank</span><span class="p">,</span> <span class="n">singular_values</span><span class="p">,</span> <span class="n">rcond</span><span class="p">)</span> <span class="o">=</span> \\
<span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="mi">10</span><span class="p">,</span> <span class="n">full</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">residuals</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[86]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.26086202])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[87]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">residuals</span><span class="p">,</span> <span class="n">rank</span><span class="p">,</span> <span class="n">singular_values</span><span class="p">,</span> <span class="n">rcond</span><span class="p">)</span> <span class="o">=</span> \\
<span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="mi">9</span><span class="p">,</span> <span class="n">full</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">residuals</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[87]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.27828147])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[88]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">transpose</span><span class="p">(</span><span class="n">Polynomial_12</span><span class="p">),</span> <span class="n">label</span><span class="o">=</span><span class="s1">'f'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">polyval</span><span class="p">(</span><span class="n">coef</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="n">g</span><span class="o">.</span><span class="n">size</span><span class="p">))</span><span class="o">+</span><span class="mf">1.1</span><span class="p">),</span>
         <span class="n">label</span><span class="o">=</span><span class="s1">'Fitted function f'</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</body></html>


     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>


<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
class="
"
>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The degree is $9$. It looks that everything works.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="Q.E.D$_%5Csquare$">Q.E.D$_\\square$<a class="anchor-link" href="#Q.E.D$_%5Csquare$">&#182;</a></h2>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Bibliography-&amp;-references:">Bibliography &amp; references:<a class="anchor-link" href="#Bibliography-&amp;-references:">&#182;</a></h3>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>http://web.media.mit.edu/~crtaylor/calculator.html</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://www.statsmodels.org</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://docs.scipy.org</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://stats.stackexchange.com/questions/30569/what-is-the-difference-between-a-stationary-test-and-a-unit-root-test/235916</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://scipy-cookbook.readthedocs.io/items/FittingData.html</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>http://cars9.uchicago.edu/software/python/lmfit/lmfit.pdf</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://docs.sympy.org</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://www.southampton.ac.uk/~fangohr/teaching/python/book/html/12-symbolic-computation.html</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://www.coursera.org/learn/machine-learning/lecture/2DKxQ/normal-equation</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>A lot of https://en.wikipedia.org/</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://foothill.edu/psme/daley/tutorials_files/10.%20Error%20Propagation.pdf</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://sites.fas.harvard.edu/~scphys/nsta/error_propagation.pdf</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>http://ipl.physics.harvard.edu/wp-uploads/2013/03/PS3_Error_Propagation_sp13.pdf</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>http://se.mathworks.com/help/econ/kpsstest.html</p>
<p>which references:</p>
<p>Hamilton, J. D. Time Series Analysis. Princeton, NJ: Princeton University Press, 1994.</p>
<p>Kwiatkowski, D., P. C. B. Phillips, P. Schmidt, and Y. Shin. \u201CTesting the Null Hypothesis of Stationarity against the Alternative of a Unit Root.\u201D Journal of Econometrics. Vol. 54, 1992, pp. 159\u2013178.</p>
<p>Newey, W. K., and K. D. West. \u201CA Simple, Positive Semidefinite, Heteroskedasticity and Autocorrelation Consistent Covariance Matrix.\u201D Econometrica. Vol. 55, 1987, pp. 703\u2013708.</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>https://en.wikipedia.org/wiki/Isotonic_regression</p>

</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>http://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html#sklearn.isotonic.IsotonicRegression</p>

</div>
</div>
</div>
</div>
</body>






<script type="application/vnd.jupyter.widget-state+json">
{"state": {}, "version_major": 2, "version_minor": 0}
<\/script>


</html>
`;export{n as default};
