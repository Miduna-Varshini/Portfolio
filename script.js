const textarea = document.getElementById("commentInput");

textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});

    function addComment() {
        let comment = document.getElementById("commentInput").value;

        if (comment === "") {
            document.getElementById("commentText").innerText = "";
            document.getElementById("message").innerText = "Comment cannot be empty!";
            document.getElementById("message").style.color = "red";
        } else {
            document.getElementById("commentText").innerText = comment;
            document.getElementById("message").innerText = "Comment added successfully!";
            document.getElementById("message").style.color = "green";

            document.getElementById("commentInput").value = "";
        }
    }

    
