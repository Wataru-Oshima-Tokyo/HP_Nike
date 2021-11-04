<template lang="html">
  <div id="navbar">


  <b-navbar toggleable="lg" type="primary" variant="light" style="position:relative;  padding: 0px; height: auto;">
    <b-navbar-brand href="#" style="color: black;margin-left: 45px;">
    <i class="fas fa-graduation-cap"></i>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <i class="fas fa-sliders-h"></i>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>


      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto" v-b-hover="handleHover">

        <b-navbar-nav class="navItemPadding" left>
          <div v-b-hover="handleNEWRELEASE">
            <b-nav-item >
              <p class="navFont">NEW RELEASES</p>
            </b-nav-item>
            <div class="borderBlack" v-if="newrelease" ></div>
            <div v-if="newrelease" class="bg zeroToOne">
            <TextComp :sort = "valueOne"></TextComp>
            </div>
          </div>

        </b-navbar-nav>
        <b-navbar-nav class="navItemPadding" left>
          <div v-b-hover="handleMen" >
            <b-nav-item>
              <p class="navFont">MEN</p></b-nav-item>
            <div class="borderBlack" v-if="men" ></div>
            <div v-if="men" class="bg zeroToOne">
            <TextComp :sort = "valueOne"></TextComp>
            </div>
          </div>
        </b-navbar-nav>

        <b-navbar-nav class="navItemPadding" left>
          <div v-b-hover="handleWomen">
            <b-nav-item ><p class="navFont">WOMEN</p></b-nav-item>
            <div class="borderBlack" v-if="women"></div>
            <div v-if="women" class="bg zeroToOne">
            <TextComp :sort = "valueOne"></TextComp>
            </div>
          </div>

        </b-navbar-nav>
        <b-navbar-nav class="navItemPadding" left>
          <div v-b-hover="handleKids">
            <b-nav-item ><p class="navFont">KIDS</p></b-nav-item>
            <div class="borderBlack" v-if="kids"></div>
            <div v-if="kids" class="bg zeroToOne">
            <TextComp :sort = "valueOne"></TextComp>
            </div>
          </div>

        </b-navbar-nav>


        <b-nav-form style=" border-radius: 20px; background-color: #f0f1f5; height: 40px; margin: 10px;" v-b-hover="antihandleHover">
          <b-button size="sm" class="my-2 my-sm-0" type="submit" style="background-color: transparent; border: none;">
          <i class="fas fa-search"></i>
          </b-button>
          <b-form-input size="sm" class="mr-sm-2" style="border: none; background-color: transparent;" placeholder="Search"></b-form-input>
        </b-nav-form>




        <b-navbar-nav  v-b-hover="antihandleHover" class="navItemPadding" style="padding-right: 10px;" right>
          <b-nav-item >
            <i class="far fa-heart" style="color: black;"></i>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav  v-b-hover="antihandleHover" class="navItemPadding" style="padding-right: 10px;" right>
          <b-nav-item >
            <i class="fas fa-shopping-cart" style="color: black;"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

 <div class="" v-if ="carousel">
   <Navcarousel></Navcarousel>
 </div>



</div >
</template>

<script>
import TextComp from '../components/text'
import Navcarousel from '../components/navCarousel'
export default {
    name: 'navbar',
    components: {
        TextComp,
        Navcarousel,
    },
    data() {
        return {
            newrelease: false,
            men: false,
            women: false,
            kids: false,
            isHovered: false,
            valueOne: "",
            carousel: true,
        }
    },
    methods: {
        handleNEWRELEASE(hovered) {
            this.carousel = !hovered;
            this.newrelease = hovered;
            this.valueOne = "newrelease";
        },
        handleMen(hovered) {
          this.carousel = !hovered;
            this.men = hovered;
            this.valueOne = "men";
        },
        handleWomen(hovered) {
            this.carousel = !hovered;
            this.women = hovered;
            this.valueOne = "women";
        },
        handleKids(hovered) {
            this.carousel = !hovered;
            this.kids = hovered;
            this.valueOne = "kids";
        },
        handleHover(hovered) {
            this.isHovered = hovered;
        },
        antihandleHover(hovered) {
            this.isHovered = !hovered;
        }
    }
}
</script>

<style lang="css">
.bg {
  position: absolute;
  display: block;
  top:-10;
  left: 0;
  background-color: white;
  width: 100%;
  height:auto;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
}



</style>
