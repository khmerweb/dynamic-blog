<script>
    let { siteTitle } = $props()
    
</script>

<header>
    <div class="inner region">
        <div class="date">
            {new Date().toLocaleDateString('km-KH', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </div>
        
        <h1 class="site-title">
            <a href="/">{siteTitle}</a>
        </h1>

        <div class="login">
            <a href="/admin">ចូល​ក្នុង</a> | 
            <a href="/user">ចុះ​ឈ្មោះ</a>
        </div>
    </div>
</header>

<style>
    header{
        border-bottom: 5px solid var(--color);
        max-width: 900px;
        margin: 30px auto 0;
        padding: 0 30px;
        background-color: teal;
        color: white;
        font: 16px/1.5 Vidaloka, OdorMeanChey;
        border-radius: 5px 5px 0 0;
    }
    header .inner{
        display: grid;
        grid-template-columns: 38% auto 20%;
        align-items: center;
        padding: 20px 0;
    }
    header a{
        text-decoration: none;
        color: white;
    }
    header .inner .site-title a{
        font: 40px 'Limonf3';
    }
    header .inner .login{
        text-align: right;
    }

    @media only screen and (max-width: 600px){
        header .inner{
            grid-template-columns: 100%;
            padding: 20px 10px;
            text-align: center;
        }
       header .inner .login{
            text-align: center;
        }
    }
</style>