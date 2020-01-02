import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components Basic
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
// Components On
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { VideosComponent } from './components/videos/videos.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
// Components In
import { PostComponent } from './components/home/post/post.component';
import { VideoComponent } from './components/videos/video/video.component';
import { ItemComponent } from './components/shop/item/item.component';
import { PostDetailComponent } from './components/home/post-detail/post-detail.component';
import { VideoDetailComponent } from './components/videos/video-detail/video-detail.component';
import { ItemDetailComponent } from './components/shop/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    VideosComponent,
    NavBarComponent,
    BodyComponent,
    PostComponent,
    VideoDetailComponent,
    VideoComponent,
    ItemComponent,
    ItemDetailComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
