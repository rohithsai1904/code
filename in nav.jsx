
             //put this in navigation.jsx//
             
             
             //infrastructure ......//
             <li
                class={`nav-item  ${
                  props.location.pathname === "/newone" ? "active" : ""
                }`}
              >
			  <div class="dropdown">
                <Link class="nav-link" to="/newone">
                  Infrastructure
				  <div class="dropdown-content">
                     <HashLink to="/newone">Labs</HashLink>
                     <HashLink to="/newone">Classrooms </HashLink>
                     <HashLink to="/newone">Playgrounds</HashLink>
					 <HashLink to="/newone">Library</HashLink>
					 <HashLink to="/newone#au">Auditorium</HashLink>
                  </div>
                </Link>
				</div>
              </li>
			  
        
        
        
        //events.........//
			   <li
                class={`nav-item  ${
                  props.location.pathname === "/events" ? "active" : ""
                }`}
              >
			  <div class="dropdown">
                <Link class="nav-link" to="/events">
                  Events
				  <div class="dropdown-content">
                     <HashLink to="events#tf">Tech Fests</HashLink>
                      <HashLink to="events#clg">College Fests</HashLink>
                     <HashLink to="events#reas">Research and Publications</HashLink>
					 <HashLink to="events#sig">Significant Days</HashLink>
                  </div> 
                </Link>
			 </div>	
              </li> 
			  
