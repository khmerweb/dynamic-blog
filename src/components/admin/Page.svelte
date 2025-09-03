<!--src/components/admin/Page.svelte-->
<script>
    // npm install jquery
    import jq from 'jquery'
    let { data } = $props()

    function submitForm(){
        window.onbeforeunload = null
    }

    function save_data_check(){   
        return "Your changes may not be saved."
    }

    $effect(()=>{
        jq('.Editor input').on('change', () => {
            window.onbeforeunload = save_data_check
        })

        ckeditor.model.document.on( 'change', () => {
            window.onbeforeunload = save_data_check
        } )
    })
</script>

<div class="Editor">
    <script src="/scripts/ckeditor/ckeditor.js"></script>
    <form action="/admin/page" method="post" onsubmit={submitForm}>
        <input type="text" name="title" required placeholder="ចំណងជើង" />
        <div class="wrapper">
            <textarea name="content" id="editor"></textarea>
        </div>
        <div class="frame">
            <input type="text" name="thumb" required placeholder="រូប​​តំណាង" />
            <input type="datetime-local" step="1" name="datetime" required />
            <input type="submit" value="ចុះ​ផ្សាយ" />
        </div>
        <script src="/scripts/ckeditor/config-page.js"></script>
    </form>
</div>

<style>
    .Editor{
        background-color: white;
        height: 100%;
        position: relative;
    } 
    .Editor .wrapper{
        height: 350px;
    }
    .Editor input{
        width: 100%;
        font: var(--body-font);
        padding: 3px 5px;
    }
    .Editor .frame{
        display: grid;
        grid-template-columns: 45% auto 15%;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>