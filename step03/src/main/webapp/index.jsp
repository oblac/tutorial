<%@ taglib prefix="j" uri="/jodd" %>
<html>
<body>
<h1>Messages</h1>

<ul>
<j:iter items="${messages}" var="msg">
    <li>${msg.messageId} ${msg.text}
</j:iter>
</ul>
</body>
</html>
