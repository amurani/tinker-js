window.onload = function() {
  var $codeEditor = document.querySelector('#code-editor');
  var options = {
    autofocus: true,
    lineNumbers: true,
    mode: 'javascript',
    tabSize: 2,
    indentWithTabs: true
  };

  var codeMirror = CodeMirror($codeEditor, options);
  codeMirror.setSize({ height: '100%', width: '100%' });

  console.log( codeMirror.getMode() );
};
