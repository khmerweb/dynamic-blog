<!--src/components/admin/Category-edit.svelte-->
<script>
    import jq from 'jquery'
    import { activePage } from "../../stores/page.js"
    let { data } = $props()

    function save_data_check(){   
        return "Your changes may not be saved."
    }

    $effect(()=>{
        jq('.category input').on('change', () => {
            window.onbeforeunload = save_data_check
        })
    })

    function submitForm(){
        window.onbeforeunload = null
    }
</script>

<section class="category">
    <form method="post" action="/admin/category/edit/{data.category.id}?p={$activePage}" onsubmit={submitForm} >
        <span>ឈ្មោះ​ជំពូកៈ</span><input type="text" name="label" value={data.category.title} required />
        <span>រូប​សញ្ញាៈ</span><input type="text" name="thumb" value={data.category.thumb} required />
        <span>ពេល​បង្កើតៈ</span><input type="datetime-local" step="1" name="datetime" value={data.category.date} required />
        <span></span><input type="submit" value="បញ្ជូន" />
        <span></span>
    </form>
</section>

<style>
    .category{
        padding: 20px;
        background: var(--background);
        height: 100%;
    }
    .category form{
        display: grid;
        grid-template-columns: 80px 300px;
        grid-gap: 5px 2px;
        align-items: center;
    }
    .category form span{
        text-align: right;
        color: black;
    }
    .category form input{
        font: var(--body-font);
        padding: 2px 5px
    }
</style>