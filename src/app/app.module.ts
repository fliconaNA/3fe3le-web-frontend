import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { VideosComponent } from './components/videos/videos.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { BodyComponent } from './components/body/body.component';
import { PostComponent } from './components/post/post.component';
import { VideoDetailComponent } from './components/videos/video-detail/video-detail.component';
import { VideoComponent } from './components/videos/video/video.component';
import { ItemComponent } from './components/shop/item/item.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
