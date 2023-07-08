let views = {
    homepage : `
    <div class="new-topic-border">
    <div class="header-background">
        <span>New Topic</span>
    </div>
    <form>
        <div class="new-topic-title">
            <label for="topicName">Title <span class="red">*</span></label>
            <input type="text" name="topicName" id="topicName">
        </div>
        <div class="new-topic-title">
            <label for="username">Username <span class="red">*</span></label>
            <input type="text" name="username" id="username">
        </div>
        <div class="new-topic-content">
            <label for="postText">Post <span class="red">*</span></label>
            <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
        </div>
        <div class="new-topic-buttons">
            <button class="cancel">Cancel</button>
            <button class="public">Post</button>
        </div>

    </form>
</div>
<!-- topic component  -->
<div class="topic-container">
    
</div>
    `
}

export { views };