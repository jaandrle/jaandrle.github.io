(function () {
  var form= document.getElementById('#new_comment'),
    js_notice_el= form.getElementsByClassName("js-notice")[0],
    js_notice_className= js_notice_el.className,
    js_notice_success_el= js_notice_el.getElementsByClassName("js-notice-text-success")[0],
    js_notice_failure_el= js_notice_el.getElementsByClassName("js-notice-text-failure")[0],
    submitted_el= document.getElementById('comment-form-submitted'),
    submit_el= document.getElementById('comment-form-submit');
  
  document.getElementById('#new_comment').onsubmit= function(){
    var form= this;
    toggleDisabled(form, true);
    var xhr= new XMLHttpRequest();
    xhr.open(form.getAttribute('method'), form.getAttribute('url'), true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload= ajaxCallback.bind(null, 0);
    xhr.onerror= ajaxCallback.bind(null, 1);
    xhr.send(serialize(form));
    return false;
  };

  function showAlert(message) {
    js_notice_el.removeClass('hidden');
    if (message == 'success') {
      js_notice_success_el.classList.remove('hidden');
      js_notice_failure_el.classList.add('hidden');
    } else {
      js_notice_success_el.classList.add('hidden');
      js_notice_failure_el.classList.remove('hidden');
    }
  }
  function ajaxCallback(exit_code, data){
    exit_code= exit_code || 0;
    offSubmitButton();
    if(!exit_code){
      setNoticeClass('notice--success');
      showAlert('success');
    } else {
      console.log(data);
      setNoticeClass('notice--danger');
      showAlert('failure');
    }
    toggleDisabled(form, false);
  }
  function toggleDisabled(el, disabled){
    disabled= disabled || false;
    if(disabled) el.classList.add("disabled");
    else el.classList.remove("disabled");
    el.disabled= disabled;
  }
  function offSubmitButton(){
    submit_el.classList.add("disabled");
    submitted_el.classList.remove("disabled");
  }
  function setNoticeClass(className){
    js_notice_el.className= js_notice_className+className;
  }
  function serialize(form) {
    if (!form || form.nodeName !== "FORM") {
      return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
      if (form.elements[i].name === "") {
        continue;
      }
      switch (form.elements[i].nodeName) {
      case 'INPUT':
        switch (form.elements[i].type) {
        case 'text':
        case 'email':
        case 'url':
        case 'hidden':
        case 'password':
        case 'button':
        case 'reset':
        case 'submit':
          q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
          break;
        case 'checkbox':
        case 'radio':
          if (form.elements[i].checked) {
            q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
          }
          break;
        case 'file':
          break;
        }
        break;
      case 'TEXTAREA':
        q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
        break;
      case 'SELECT':
        switch (form.elements[i].type) {
        case 'select-one':
          q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
          break;
        case 'select-multiple':
          for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
            if (form.elements[i].options[j].selected) {
              q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].options[j].value));
            }
          }
          break;
        }
        break;
      case 'BUTTON':
        switch (form.elements[i].type) {
        case 'reset':
        case 'submit':
        case 'button':
          q.push(encodeURIComponent(form.elements[i].name) + "=" + encodeURIComponent(form.elements[i].value));
          break;
        }
        break;
      }
    }
    return q.join("&");
  }
})();
