<%@ taglib prefix="j" uri="/jodd" %>
<html>
<body>
<h1>Messages</h1>

<ul>
    <j:iter items="${messages}" var="msg">
        <li>${msg.messageId} ${msg.text}
            <ul>
                <j:iter items="${msg.responses}" var="resp">
                    <li>${resp.responseId} ${resp.text}</li>
                </j:iter>
            </ul>
        </li>
    </j:iter>
</ul>

</body>
</html>
