(function () {
  var form= document.getElementById('new_comment'),
    js_notice_el= form.getElementsByClassName("js-notice")[0],
    js_notice_className= js_notice_el.className,
    js_notice_success_el= js_notice_el.getElementsByClassName("js-notice-text-success")[0],
    js_notice_failure_el= js_notice_el.getElementsByClassName("js-notice-text-failure")[0],
    submitted_el= document.getElementById('comment-form-submitted'),
    submit_el= document.getElementById('comment-form-submit'),
    submit_el_className= submit_el.className;
  
  form.onsubmit= function(){
    toggleDisabled(form, true);
    toggleSubmitButton(true);
    js_notice_el.className= js_notice_className;
    var xhr= new XMLHttpRequest();
    xhr.open(form.getAttribute('method'), form.getAttribute('url'), true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload= ajaxCallback.bind(null, 0);
    xhr.onerror= ajaxCallback.bind(null, 1);
    xhr.send(serialize(form));
    return false;
  };

  function showAlert(message) {
    js_notice_el.classList.remove('hidden');
    if (message == 'success') {
      js_notice_success_el.classList.remove('hidden');
      js_notice_failure_el.classList.add('hidden');
    } else {
      js_notice_success_el.classList.add('hidden');
      js_notice_failure_el.classList.remove('hidden');
    }
  }
  function ajaxCallback(exit_code, data){
    exit_code= exit_code || data.srcElement && data.srcElement.status===500;
    if(!exit_code){
      setNoticeClass('notice--success');
      showAlert('success');
      form.reset();
    } else {
      console.log(data);
      setNoticeClass('notice--danger');
      showAlert('failure');
    }
    toggleSubmitButton(false);
    toggleDisabled(form, false);
  }
  function toggleDisabled(el, disabled){ el.disabled= disabled || false; }
  function toggleSubmitButton(form_disabled){
    if(form_disabled){
      submit_el.className= submit_el_className+" hidden";
      submitted_el.className= submit_el_className;
    } else {
      submit_el.className= submit_el_className;
      submitted_el.className= submit_el_className+" hidden";
    }
  }
  function setNoticeClass(className){
    js_notice_el.className+= className;
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
