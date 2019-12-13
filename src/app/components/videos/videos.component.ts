import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() { }
  public videos:any = [];
  ngOnInit() {
    this.videos = [
        {
            videoId: "https://youtu.be/lq2aHF3ZPcw",
            url: "https://i.ytimg.com/vi/lq2aHF3ZPcw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcGZ0IFcSYhtrj47PJbdIxv8P7YQ",
            title: "BALLELOWEEN!!👻(Los pandas del ballenato EXCLUSIVA)🎤- Halloween 🎃 en Navidad 🎄 ??",
            publishedTimeText: "5 days ago",
            viewCountText: "8 views"
        },
        {
            videoId: "https://youtu.be/oiRXHBacf6A",
            url: "https://i.ytimg.com/vi/oiRXHBacf6A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATlIvWv7aVCrtHdJ1XysGXDa4_Lg",
            title: "DIA DE @LCOHOL y AMISTAD🍺🍻",
            publishedTimeText: "2 weeks ago",
            viewCountText: "34 views"
        },
        {
            videoId: "https://youtu.be/BqMhKIHAftc",
            url: "https://i.ytimg.com/vi/BqMhKIHAftc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDHfj8g4aYunIXadlXDOR64qC1JyA",
            title: "El guemplei #2 || La ULTIMA persecusion de NFS MW (2006)",
            publishedTimeText: "1 month ago",
            viewCountText: "8 views"
        },
        {
            videoId: "https://youtu.be/ZvVqnEsbRZw",
            url: "https://i.ytimg.com/vi/ZvVqnEsbRZw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9PXWhBJrVcHTWyFIi5bEVvk-tBw",
            title: "El guemplei #1 || 3FE 3LE VS # 1 de la BLACKLIST (Razor)",
            publishedTimeText: "1 month ago",
            viewCountText: "27 views"
        },
        {
            videoId: "https://youtu.be/3mhED2oe7H4",
            url: "https://i.ytimg.com/vi/3mhED2oe7H4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCyf7c7rzL6NaQ6vmsKXHyB_oGr5g",
            title: "¿Como NO REACCIONAR cuando veas un SAPO? 🐸",
            publishedTimeText: "2 months ago",
            viewCountText: "20 views"
        },
        {
            videoId: "https://youtu.be/0Yn8PpBLeb0",
            url: "https://i.ytimg.com/vi/0Yn8PpBLeb0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC-sbNGb0M9m9z_YWzV1-cXtrZiDg",
            title: "NO me gusta y QUE!! ¿ algun PROBLEMA!!? 🤨",
            publishedTimeText: "3 months ago",
            viewCountText: "46 views"
        },
        {
            videoId: "https://youtu.be/wF7JhEvzYpE",
            url: "https://i.ytimg.com/vi/wF7JhEvzYpE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB4lbn2KIJt3rw7HDkpy7uroQ2GkA",
            title: "El ENFERMO 🤢🤒...",
            publishedTimeText: "3 months ago",
            viewCountText: "65 views"
        },
        {
            videoId: "https://youtu.be/BvXlnrpmuYQ",
            url: "https://i.ytimg.com/vi/BvXlnrpmuYQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBob8hCZMsnjldsj8N-hrmhDEHxFA",
            title: "👶 Me ESTOY poniendo VIEJO!! 👴",
            publishedTimeText: "3 months ago",
            viewCountText: "56 views"
        },
        {
            videoId: "https://youtu.be/zN_xH2fYUgs",
            url: "https://i.ytimg.com/vi/zN_xH2fYUgs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCZ_4pbCPiiZ5M68DLgT8VFbpZx6w",
            title: "TU 🤔 no sabes QUIEN S🤬Y  Y🤪!!🤮",
            publishedTimeText: "3 months ago",
            viewCountText: "39 views"
        },
        {
            videoId: "https://youtu.be/g_AF83ZDyd8",
            url: "https://i.ytimg.com/vi/g_AF83ZDyd8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBeFypjdosq2Gp0txbDA8_4knur6g",
            title: "🎁PLATZI me PREMIA, encontre mi PASION!! 🤩 (PREMIO PARA TODOS 😏 )",
            publishedTimeText: "4 months ago",
            viewCountText: "128 views"
        },
        {
            videoId: "https://youtu.be/5-ySlX96gGM",
            url: "https://i.ytimg.com/vi/5-ySlX96gGM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBL24qtF3TbEyVkltj5AeIeTNl8Og",
            title: "😱😩Personas DRAMÁTICAS... 😒| El DRAMA",
            publishedTimeText: "4 months ago",
            viewCountText: "55 views"
        },
        {
            videoId: "https://youtu.be/cPlxUPV8IoY",
            url: "https://i.ytimg.com/vi/cPlxUPV8IoY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAp2ljoxEXB5JYDOLVgnKA1sqCILg",
            title: "🍑🍆Las RELACIONES... | COSAS a tener en CUENTA",
            publishedTimeText: "4 months ago",
            viewCountText: "52 views"
        },
        {
            videoId: "https://youtu.be/zMkRdye8sUM",
            url: "https://i.ytimg.com/vi/zMkRdye8sUM/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCFm7Qyc4nBju7HrDb4YAhteqW3Og",
            title: "Un \"PARLERO\" PARLEANDO sobre la PARLA",
            publishedTimeText: "4 months ago",
            viewCountText: "62 views"
        },
        {
            videoId: "https://youtu.be/V22n6rBWDL8",
            url: "https://i.ytimg.com/vi/V22n6rBWDL8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDtDHgza8fkuw4JtZbNluANfXPrFQ",
            title: "¿POR QUE 💩 somos FELICES?!!!!!! | La FELICIDAD",
            publishedTimeText: "5 months ago",
            viewCountText: "60 views"
        },
        {
            videoId: "https://youtu.be/c-DhINms51A",
            url: "https://i.ytimg.com/vi/c-DhINms51A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCiJ3NtDPQuJTFLgiH4atibcP4NOw",
            title: "FEEDBACK #1 | 25 COSAS para MEJORAR✅✅ PARTE 2",
            publishedTimeText: "5 months ago",
            viewCountText: "46 views"
        },
        {
            videoId: "https://youtu.be/qmMz8AfQJI8",
            url: "https://i.ytimg.com/vi/qmMz8AfQJI8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGQxPIT_T5ie2YEAYexxqXb7oHUA",
            title: "FEEDBACK #1 | 25 COSAS para MEJORAR✅✅ PARTE 1",
            publishedTimeText: "5 months ago",
            viewCountText: "76 views"
        },
        {
            videoId: "https://youtu.be/eDzrUbaHf2o",
            url: "https://i.ytimg.com/vi/eDzrUbaHf2o/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBN6n1rgwbmyrjhqlHnIutYQ9Hz1g",
            title: "😳¿CUAL INFANCIA ES MEJOR? 🤔",
            publishedTimeText: "5 months ago",
            viewCountText: "114 views"
        },
        {
            videoId: "https://youtu.be/CQDI13jWOjY",
            url: "https://i.ytimg.com/vi/CQDI13jWOjY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDFmL3odi-gWJCZTaoW6Ez9VMXPlQ",
            title: "ESPECIAL 100 SUSCRIPTORES !! | GRACIAS POR TODO",
            publishedTimeText: "5 months ago",
            viewCountText: "151 views"
        },
        {
            videoId: "https://youtu.be/TRPJz6bF4VQ",
            url: "https://i.ytimg.com/vi/TRPJz6bF4VQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB1sIEvcLJIMBwY4fX6HrXIfZvJ2Q",
            title: "¿TU EX? | CARACTERÍSTICAS , TIPOS Y MAS",
            publishedTimeText: "6 months ago",
            viewCountText: "174 views"
        },
        {
            videoId: "https://youtu.be/zzSvXIYTy0E",
            url: "https://i.ytimg.com/vi/zzSvXIYTy0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBPgRJOHe6gLqaRIVT4MT5Fk2-KSA",
            title: "¿TE GUSTARÍA VIAJAR?| TIPS PARA VIAJAR POR PRIMERA VEZ",
            publishedTimeText: "6 months ago",
            viewCountText: "114 views"
        },
        {
            videoId: "https://youtu.be/rlgHcHyDpjY",
            url: "https://i.ytimg.com/vi/rlgHcHyDpjY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4HSE2hfvh-B9pfwuVBsRL_QthcQ",
            title: "VIRTUDES Y DEFECTOS | ¿SON LO MISMO?",
            publishedTimeText: "6 months ago",
            viewCountText: "220 views"
        },
        {
            videoId: "https://youtu.be/YpfQ6URDmJI",
            url: "https://i.ytimg.com/vi/YpfQ6URDmJI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBGRnZWhu1xMezlO-gNR_wqFdwDNw",
            title: "¿COMO BAILAR LO QUE QUIERAS? | APRENDE A SENTIR LA MÚSICA",
            publishedTimeText: "6 months ago",
            viewCountText: "198 views"
        },
        {
            videoId: "https://youtu.be/GGm8ZRkT-do",
            url: "https://i.ytimg.com/vi/GGm8ZRkT-do/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk2vTaLqV8LxIjnecmqFMMO8ndgw",
            title: "BLOOPERS!!  | Gracias por todo...",
            publishedTimeText: "7 months ago",
            viewCountText: "118 views"
        },
        {
            videoId: "https://youtu.be/btJYVL3iSug",
            url: "https://i.ytimg.com/vi/btJYVL3iSug/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA9vP7MiJzujl1ADCZwMO_kffQEog",
            title: "3FE 3LE || Do you want to be the best? ...",
            publishedTimeText: "7 months ago",
            viewCountText: "136 views"
        },
        {
            videoId: "https://youtu.be/eQhbrTygs6g",
            url: "https://i.ytimg.com/vi/eQhbrTygs6g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAoZRowJVnHTu_yK29F8weVbOKW9Q",
            title: "NOTICIAS... ¿MITO O REALIDAD? | TEN CRITERIO",
            publishedTimeText: "7 months ago",
            viewCountText: "107 views"
        },
        {
            videoId: "https://youtu.be/FJ3-DWGIWqc",
            url: "https://i.ytimg.com/vi/FJ3-DWGIWqc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCkj_xQb5rlPdHf1-8-3JhNEPH90g",
            title: "¿COMO NO TENER PENA? | NO TE COHÍBAS !!",
            publishedTimeText: "7 months ago",
            viewCountText: "230 views"
        },
        {
            videoId: "https://youtu.be/P8LfJYuqxN8",
            url: "https://i.ytimg.com/vi/P8LfJYuqxN8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDwV-JirpXJh1QZVmGUv7WzpDFY8Q",
            title: "¿QUE NECESITAS PARA EMPEZAR HACERLO? | TOMA ESTE CONCEJO",
            publishedTimeText: "7 months ago",
            viewCountText: "172 views"
        },
        {
            videoId: "https://youtu.be/RNViruA1SDE",
            url: "https://i.ytimg.com/vi/RNViruA1SDE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC7Ep5jmY4AIrwdsOtU00GgKPRSTg",
            title: "Muy Pronto... ||⚫«3FE 3LE»⚪||",
            publishedTimeText: "8 months ago",
            viewCountText: "89 views"
        }
      ]
      console.log(this.videos)
    }
  }
