﻿<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Jasmine Spec Runner v2.0.0</title>

        <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.0.0/jasmine_favicon.png">
        <link rel="stylesheet" type="text/css" href="lib/jasmine-2.0.0/jasmine.css">

        <script type="text/javascript" src="lib/jasmine-2.0.0/jasmine.js"></script>
        <script type="text/javascript" src="lib/jasmine-2.0.0/jasmine-html.js"></script>
        <script type="text/javascript" src="lib/jasmine-2.0.0/boot.js"></script>

        <!-- include source files here... -->
        <%: Scripts.Render("~/app/common") %>
        <%: Scripts.Render("~/app/sampleApplication") %>

        <!-- include spec files here... -->
        <%: Scripts.Render("~/app/commonTests") %>
        <%: Scripts.Render("~/app/sampleApplicationTests")%>

    </head>

<body>
</body>
</html>
