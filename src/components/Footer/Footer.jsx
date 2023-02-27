
import React from "react";
import Grid from "@mui/material/Grid";
import "../../assets/css/footer.css";

export default function Footer() {
  return (
    // <div className="footer">
    //   <div className="container">
    //     <h3 className="footer-title">TNike: Your choice - Your life</h3>
    //     <div className="flex-container">
    //       <div className="flex-item footer-item">
    //         <h4>Contact</h4>
    //         <ul className="nav contact-list">
    //           <li>
    //             <a href="#">facebook</a>
    //           </li>
    //           <li>
    //             <a href="#">witter</a>
    //           </li>
    //           <li>
    //             <a href="#">instagram</a>
    //           </li>
    //           <li>
    //             <a href="#">youtube</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex-item footer-item">
    //         <h4>Contact</h4>
    //       </div>
    //       <div className="flex-item footer-item">
    //         <h4>Contact</h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Grid
      className="container"
      sx={{ flexGrow: 1 }}
    >
      <Grid
        className="container footer"
        container
        spacing={2}
      >
        <Grid item sx={4}>
          <h1>aaaa</h1>
        </Grid>
        <Grid item sx={4}>
          <h1>aaaa</h1>
        </Grid>
        <Grid item sx={4}>
          <h1>aaaa</h1>
        </Grid>
      </Grid>
    </Grid>

  );
}
