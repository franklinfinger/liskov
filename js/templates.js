var templates = {
  sideBarUser: [
    "<li><img src='<%= avatar %>' /><h5><%= username %></h5></li>"
  ].join(""),
  message: [
    "<li><img src='<%= avatar %>' /><h3><%= username %></h3>",
    "<p><%= message %></p></li>"
  ].join(""),
  loginDisplay: [
    "<li><img src='<%= avatar %>' /><p><%= username %></p></li>",
    "<p><%= content %></p>",
    "<button type='submit'>X</button></li>"
  ].join("")
};
